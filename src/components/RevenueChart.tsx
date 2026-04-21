"use client"

import { motion } from "framer-motion"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { Flame } from "lucide-react"
import { REVENUE_DATA } from "@/data/mock"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { useEffect, useState } from "react"

export function RevenueChart() {
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="h-full"
    >
      <Card variant="hero" className="h-full flex flex-col group overflow-hidden border-border-theme hover:border-primary-400/30 transition-all duration-500 shadow-hero bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle className="text-xl font-black tracking-tighter text-foreground uppercase tracking-wider">Revenue Analytics</CardTitle>
            <CardDescription className="text-[10px] font-bold text-muted uppercase tracking-widest">Monthly Recurring Revenue growth curve</CardDescription>
          </div>
          <div className="h-12 w-12 rounded-[1.25rem] bg-primary-50 flex items-center justify-center text-primary-600 dark:bg-primary-500/10 dark:text-primary-400 border border-primary-500/10 group-hover:border-primary-500/50 group-hover:shadow-[0_0_20px_var(--brand-glow)] transition-all duration-500">
            <Flame className="h-6 w-6" />
          </div>
        </CardHeader>
        <CardContent className="flex-1 min-h-[350px] pt-8">
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={REVENUE_DATA}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--brand-500)" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="var(--brand-500)" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="0" 
                  vertical={false} 
                  stroke="var(--border-theme)"
                  strokeOpacity={0.3}
                />
                <XAxis
                  dataKey="name"
                  stroke="var(--text-muted)"
                  fontSize={10}
                  fontWeight={800}
                  tickLine={false}
                  axisLine={false}
                  dy={15}
                  tick={{ fill: 'var(--text-muted)', letterSpacing: '0.05em' }}
                />
                <YAxis
                  stroke="var(--text-muted)"
                  fontSize={10}
                  fontWeight={800}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value/1000}k`}
                  tick={{ fill: 'var(--text-muted)', letterSpacing: '0.05em' }}
                />
                <Tooltip
                  cursor={{ stroke: "var(--brand-500)", strokeWidth: 2, strokeDasharray: "4 4" }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card/40 backdrop-blur-3xl border border-border-theme p-6 rounded-[2rem] shadow-hero animate-in fade-in zoom-in duration-300 ring-1 ring-white/10">
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted mb-3">{label}</p>
                          <div className="flex items-center gap-4">
                            <div className="h-3 w-3 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                            <p className="text-2xl font-black text-foreground tracking-tighter">
                              ${(payload[0].value as number).toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                             <div className="h-1 w-1 rounded-full bg-emerald-500" />
                             <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">+12.5% vs last month</p>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="var(--brand-500)"
                  strokeWidth={5}
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                  animationDuration={2500}
                  filter="drop-shadow(0 0 8px rgba(99, 102, 241, 0.4))"
                  activeDot={{ 
                    r: 8, 
                    fill: "var(--brand-500)", 
                    stroke: "var(--bg-card)", 
                    strokeWidth: 4,
                    className: "shadow-[0_0_15px_rgba(99,102,241,0.8)]" 
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
