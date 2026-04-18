"use client"

import { motion } from "framer-motion"

const topUsers = [
  { name: "Moshiour Rahman", role: "CEO", revenue: "$4,500" },
  { name: "John Doe", role: "Developer", revenue: "$2,100" },
  { name: "Sarah Smith", role: "Designer", revenue: "$1,850" },
  { name: "Alex Johnson", role: "Marketing", revenue: "$950" },
]

export function TopUsers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="col-span-4 lg:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/50"
    >
      <div className="border-b border-zinc-800 p-6">
        <h2 className="text-lg font-semibold text-zinc-100">Top Performing Users</h2>
        <p className="text-sm text-zinc-400">Users generating the most revenue this month.</p>
      </div>
      
      <div className="p-6">
        <ul className="space-y-6">
          {topUsers.map((user, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-sm font-medium text-zinc-100">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-100">{user.name}</p>
                  <p className="text-xs text-zinc-500">{user.role}</p>
                </div>
              </div>
              <div className="text-sm font-medium text-indigo-400">
                {user.revenue}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
