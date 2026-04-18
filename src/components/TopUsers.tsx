"use client"

import { motion } from "framer-motion"
import { TOP_USERS } from "@/data/mock"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"

export function TopUsers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="col-span-4 lg:col-span-2"
    >
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Users</CardTitle>
          <CardDescription>Users generating the most revenue this month.</CardDescription>
        </CardHeader>
        
        <CardContent>
          <ul className="space-y-6">
            {TOP_USERS.map((user, index) => (
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
        </CardContent>
      </Card>
    </motion.div>
  )
}
