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
      <Card className="group relative overflow-hidden p-6 card-premium">
        {/* Decorative dynamic background glow */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10 group-hover:blur-3xl" />
        
        <div className="relative flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">{title}</p>
            <p className="text-3xl font-bold tracking-tight text-foreground">{value}</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border-theme transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_var(--color-primary-soft)]">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-[11px] font-bold border",
              isPositive 
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" 
                : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
            )}
          >
            {trend}
          </span>
          <span className="text-[11px] font-semibold text-muted">vs last month</span>
        </div>

        {insight && (
          <div className="mt-6 flex items-start gap-2 rounded-xl bg-primary/5 p-3 border border-primary/10 transition-all duration-300 group-hover:bg-primary/10">
            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            <p className="text-[11px] leading-relaxed text-primary dark:text-primary/90 font-bold italic">
              {insight}
            </p>
          </div>
        )}
      </Card>
    </motion.div>
  )
}
