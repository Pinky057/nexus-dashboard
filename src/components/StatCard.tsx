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
  variant?: "default" | "hero" | "flat"
}

export function StatCard({ title, value, trend, isPositive, icon: Icon, insight, delay = 0, variant = "default" }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="h-full"
    >
      <Card variant={variant} className="group relative overflow-hidden p-7 h-full flex flex-col justify-between">
        {/* Decorative dynamic background glow */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary-500/5 blur-2xl transition-all duration-500 group-hover:bg-primary-500/10 group-hover:blur-3xl" />
        
        <div>
          <div className="relative flex items-center justify-between mb-6">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">{title}</p>
              <p className="text-3xl font-black tracking-tighter text-foreground">{value}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 dark:bg-primary-500/10 border border-primary-500/10 transition-all duration-500 group-hover:border-primary-500/50 group-hover:shadow-[0_0_20px_var(--brand-glow)]">
              <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
  
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-black border",
                isPositive 
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" 
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
              )}
            >
              {trend}
            </span>
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider">vs last month</span>
          </div>
        </div>

        {insight && (
          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-primary-500/5 p-4 border border-primary-500/10 transition-all duration-500 group-hover:bg-primary-500/10 group-hover:border-primary-500/20">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
            <p className="text-[11px] leading-relaxed text-primary-600 dark:text-primary-400 font-bold italic">
              {insight}
            </p>
          </div>
        )}
      </Card>
    </motion.div>
  )
}
