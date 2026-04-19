"use client"

import { motion } from "framer-motion"
import { TRANSACTIONS } from "@/data/mock"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

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
            <table className="w-full text-left text-sm text-zinc-400 border-collapse">
              <thead className="bg-zinc-950/50 text-xs uppercase text-zinc-500 sticky top-0 z-10 border-b border-zinc-800">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Transaction</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Customer</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider text-right">Amount</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {TRANSACTIONS.map((tx) => (
                  <tr key={tx.id} className="hover:bg-zinc-800/20 transition-colors group">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-zinc-300">
                      <span className="group-hover:text-indigo-400 transition-colors">{tx.id}</span>
                      <div className="mt-0.5 text-[11px] text-zinc-500 font-normal">{tx.date}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-zinc-300">{tx.user}</div>
                      <div className="mt-0.5 text-[11px] text-zinc-500">{tx.email}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-zinc-200 text-right">
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
                        className="text-[10px] py-0.5"
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
