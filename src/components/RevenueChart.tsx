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
      <Card className="h-full flex flex-col group overflow-hidden border-border-theme hover:border-primary-400/30 transition-all duration-500 shadow-premium">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle className="text-xl font-black tracking-tighter text-foreground">Revenue Analytics</CardTitle>
            <CardDescription className="text-xs font-medium text-muted">Monthly Recurring Revenue growth curve</CardDescription>
          </div>
          <div className="h-10 w-10 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
            <Flame className="h-5 w-5" />
          </div>
        </CardHeader>
        <CardContent className="flex-1 min-h-[350px] pt-6">
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={REVENUE_DATA}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--brand-500)" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="var(--brand-500)" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="0" 
                  vertical={false} 
                  stroke="var(--border-theme)"
                  strokeOpacity={0.5}
                />
                <XAxis
                  dataKey="name"
                  stroke="var(--text-muted)"
                  fontSize={10}
                  fontWeight={600}
                  tickLine={false}
                  axisLine={false}
                  dy={15}
                />
                <YAxis
                  stroke="var(--text-muted)"
                  fontSize={10}
                  fontWeight={600}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip
                  cursor={{ stroke: "var(--brand-500)", strokeWidth: 2, strokeDasharray: "4 4" }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card/95 backdrop-blur-md border border-border-theme p-4 rounded-2xl shadow-premium animate-in fade-in zoom-in duration-200">
                          <p className="text-[10px] font-black uppercase tracking-widest text-muted mb-2">{label}</p>
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary-500" />
                            <p className="text-lg font-black text-foreground">
                              ${(payload[0].value as number).toLocaleString()}
                            </p>
                          </div>
                          <p className="text-[10px] font-bold text-emerald-500 mt-1">+12.5% from last month</p>
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
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                  animationDuration={2000}
                  activeDot={{ 
                    r: 6, 
                    fill: "var(--brand-500)", 
                    stroke: "var(--bg-card)", 
                    strokeWidth: 3,
                    className: "shadow-xl" 
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
