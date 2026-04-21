"use client"

import { TOP_USERS } from "@/data/mock"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Avatar } from "@/components/ui/Avatar"

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
                  <Avatar 
                    alt={user.name} 
                    shape="squircle" 
                    size="md" 
                    status="online"
                    className="group-hover:shadow-[0_0_15px_var(--brand-glow)] transition-all"
                  />
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
