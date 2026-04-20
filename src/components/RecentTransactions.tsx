"use client"

import { motion } from "framer-motion"
import { TRANSACTIONS } from "@/data/mock"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { cn } from "@/lib/utils"

export function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest subscription payments and API top-ups.</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-hidden p-0">
          <div className="overflow-x-auto h-full">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-muted/5 text-[10px] uppercase font-black tracking-widest text-muted sticky top-0 z-10 border-b border-border-theme">
                <tr>
                  <th scope="col" className="px-6 py-4">Transaction</th>
                  <th scope="col" className="px-6 py-4">Customer</th>
                  <th scope="col" className="px-6 py-4 text-right">Amount</th>
                  <th scope="col" className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme/50">
                {TRANSACTIONS.map((tx) => (
                  <tr key={tx.id} className="hover:bg-muted/5 transition-colors group">
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-foreground">
                      <span className="group-hover:text-indigo-500 transition-colors">{tx.id}</span>
                      <div className="mt-0.5 text-[11px] text-muted font-normal">{tx.date}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-foreground font-semibold">{tx.user}</div>
                      <div className="mt-0.5 text-[11px] text-muted">{tx.email}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-black text-foreground text-right">
                      {tx.amount}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">
                      <Badge
                        variant={
                          tx.status === "Completed"
                            ? "success"
                            : tx.status === "Pending"
                            ? "warning"
                            : "danger"
                        }
                      >
                        {tx.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
