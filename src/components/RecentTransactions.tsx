"use client"

import { motion } from "framer-motion"
import { TRANSACTIONS } from "@/data/mock"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="col-span-4 lg:col-span-2"
    >
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest payments processed through your platform.</CardDescription>
        </CardHeader>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-400">
            <thead className="bg-zinc-950/50 text-xs uppercase text-zinc-500">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Transaction</th>
                <th scope="col" className="px-6 py-4 font-medium">Customer</th>
                <th scope="col" className="px-6 py-4 font-medium">Amount</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {TRANSACTIONS.map((tx) => (
                <tr key={tx.id} className="hover:bg-zinc-800/20 transition-colors">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-zinc-300">
                    {tx.id}
                    <div className="mt-1 text-xs text-zinc-500 font-normal">{tx.date}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-zinc-300">{tx.user}</div>
                    <div className="mt-1 text-xs text-zinc-500">{tx.email}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-zinc-300">
                    {tx.amount}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
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
      </Card>
    </motion.div>
  )
}
