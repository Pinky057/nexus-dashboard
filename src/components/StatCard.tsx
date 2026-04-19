"use client"

import { motion } from "framer-motion"
import { LucideIcon, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  trend: string
  isPositive: boolean
  icon: LucideIcon
  insight?: string
  delay?: number
}

export function StatCard({ title, value, trend, isPositive, icon: Icon, insight, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
        {/* Decorative background glow */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/10 group-hover:blur-3xl" />
        
        <div className="relative flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{title}</p>
            <p className="text-3xl font-bold tracking-tight text-zinc-100">{value}</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 ring-1 ring-zinc-800 transition-all duration-300 group-hover:ring-indigo-500/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Icon className="h-6 w-6 text-indigo-400" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-bold ring-1 ring-inset",
              isPositive 
                ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20" 
                : "bg-rose-500/10 text-rose-400 ring-rose-500/20"
            )}
          >
            {trend}
          </span>
          <span className="text-[11px] font-medium text-zinc-500">vs last month</span>
        </div>

        {insight && (
          <div className="mt-6 flex items-start gap-2 rounded-lg bg-indigo-500/5 p-2.5 ring-1 ring-indigo-500/10 transition-all duration-300 group-hover:bg-indigo-500/10">
            <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-indigo-400" />
            <p className="text-[11px] leading-relaxed text-indigo-300/90 font-medium italic">
              {insight}
            </p>
          </div>
        )}
      </Card>
    </motion.div>
  )
}
