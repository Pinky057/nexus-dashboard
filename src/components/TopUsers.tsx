"use client"

import { motion } from "framer-motion"
import { TOP_USERS } from "@/data/mock"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export function TopUsers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>Top API Consumers</CardTitle>
          <CardDescription>Top users by monthly token utilization.</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1">
          <ul className="space-y-5">
            {TOP_USERS.map((user, index) => (
              <li key={index} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 ring-1 ring-zinc-800 text-sm font-bold text-indigo-400 group-hover:ring-indigo-500/50 transition-all">
                    {user.name.charAt(0)}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold text-zinc-100 group-hover:text-indigo-300 transition-colors">{user.name}</p>
                    <p className="text-[11px] text-zinc-500 flex items-center gap-1.5 uppercase tracking-wider font-bold">
                      {user.role}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-zinc-100">{user.revenue}</p>
                  <p className="text-[10px] text-zinc-500">USD Equivalent</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
