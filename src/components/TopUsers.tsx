"use client"

import { TOP_USERS } from "@/data/mock"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"

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
          <ul className="space-y-6">
            {TOP_USERS.map((user, index) => (
              <li key={index} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border-theme text-sm font-black text-indigo-500 group-hover:border-indigo-500/50 transition-all shadow-sm">
                    {user.name.charAt(0)}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-foreground group-hover:text-indigo-500 transition-colors">{user.name}</p>
                    <p className="text-[10px] text-muted flex items-center gap-1.5 uppercase tracking-widest font-black">
                      {user.role}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-foreground">{user.revenue}</p>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-tighter">USD Equiv.</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
