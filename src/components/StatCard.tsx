"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/Card"

interface StatCardProps {
  title: string
  value: string
  trend: string
  isPositive: boolean
  icon: LucideIcon
  delay?: number
}

export function StatCard({ title, value, trend, isPositive, icon: Icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="p-6 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgb(99,102,241,0.12)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-400">{title}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-100">{value}</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
            <Icon className="h-6 w-6 text-indigo-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span
            className={`text-sm font-medium ${
              isPositive ? "text-emerald-500" : "text-rose-500"
            }`}
          >
            {trend}
          </span>
          <span className="ml-2 text-sm text-zinc-500">vs last month</span>
        </div>
      </Card>
    </motion.div>
  )
}
