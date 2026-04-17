"use client"

import { motion } from "framer-motion"

const transactions = [
  {
    id: "TRX-8291",
    user: "Ummey Habiba Pinky",
    email: "pinky@example.com",
    amount: "$350.00",
    status: "Completed",
    date: "Today, 10:23 AM",
  },
  {
    id: "TRX-8290",
    user: "John Doe",
    email: "john@acme.com",
    amount: "$1,200.00",
    status: "Completed",
    date: "Today, 09:12 AM",
  },
  {
    id: "TRX-8289",
    user: "Sarah Smith",
    email: "sarah.s@design.co",
    amount: "$85.00",
    status: "Pending",
    date: "Yesterday, 04:45 PM",
  },
  {
    id: "TRX-8288",
    user: "Alex Johnson",
    email: "alex@startup.io",
    amount: "$15.00",
    status: "Failed",
    date: "Yesterday, 02:10 PM",
  },
  {
    id: "TRX-8287",
    user: "Emma Williams",
    email: "emmaw@gmail.com",
    amount: "$450.00",
    status: "Completed",
    date: "Oct 12, 11:30 AM",
  },
]

export function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="col-span-4 lg:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/50"
    >
      <div className="border-b border-zinc-800 p-6">
        <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
        <p className="text-sm text-zinc-400">Latest payments processed through your platform.</p>
      </div>
      
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
            {transactions.map((tx) => (
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
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tx.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : tx.status === "Pending"
                        ? "bg-amber-500/10 text-amber-500"
                        : "bg-rose-500/10 text-rose-500"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
