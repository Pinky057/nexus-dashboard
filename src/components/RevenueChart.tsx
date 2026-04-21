"use client"

import { motion } from "framer-motion"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { Flame, TrendingUp, Sparkles } from "lucide-react"
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
      <Card variant="glass" className="h-full flex flex-col group overflow-hidden shadow-hero">
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2">
          <div className="space-y-1">
            <CardTitle className="text-xl font-black tracking-tighter text-foreground uppercase tracking-wider">Revenue Stream</CardTitle>
            <CardDescription className="text-[10px] font-black text-muted uppercase tracking-widest">Real-time performance & AI projections</CardDescription>
          </div>
          <div className="flex items-center gap-3">
             <button 
               onClick={() => window.dispatchEvent(new CustomEvent('open-pro-modal', { detail: { feature: 'AI Forecasting' } }))}
               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500/10 border border-primary-500/20 hover:bg-primary-500/20 transition-all group/nudge"
             >
               <Sparkles className="h-3.5 w-3.5 text-primary-500 group-hover/nudge:animate-pulse" />
               <span className="text-[9px] font-black text-primary-500 uppercase tracking-[0.2em]">Unlock AI Insights</span>
             </button>
             <div className="h-12 w-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 border border-primary-500/10 group-hover:border-primary-500/50 group-hover:shadow-[0_0_20px_var(--brand-glow)] transition-all duration-500">
               <Flame className="h-6 w-6" />
             </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 min-h-[350px] pt-8">
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={REVENUE_DATA}
                margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="40%" stopColor="#a855f7" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="0" 
                  vertical={false} 
                  stroke="var(--border-theme)"
                  strokeOpacity={0.2}
                />
                <XAxis
                  dataKey="name"
                  stroke="var(--text-muted)"
                  fontSize={10}
                  fontWeight={900}
                  tickLine={false}
                  axisLine={false}
                  dy={15}
                  tick={{ fill: 'var(--text-muted)', letterSpacing: '0.1em' }}
                  className="uppercase"
                />
                <YAxis
                  stroke="var(--text-muted)"
                  fontSize={10}
                  fontWeight={900}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value/1000}k`}
                  tick={{ fill: 'var(--text-muted)', letterSpacing: '0.05em' }}
                />
                <Tooltip
                  cursor={{ stroke: "url(#strokeGradient)", strokeWidth: 2, strokeDasharray: "4 4" }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-zinc-950/90 backdrop-blur-3xl border border-white/10 p-6 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-300 ring-1 ring-white/10 overflow-hidden relative">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted/60 mb-4">{label}</p>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                              <div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1]" />
                              <p className="text-3xl font-black text-white tracking-tighter">
                                ${(payload[0].value as number).toLocaleString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
                               <TrendingUp className="h-3 w-3 text-emerald-500" />
                               <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">+12.5% VS LAST MONTH</p>
                            </div>
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
                  stroke="url(#strokeGradient)"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                  animationDuration={2500}
                  filter="drop-shadow(0 0 12px rgba(99, 102, 241, 0.4))"
                  activeDot={{ 
                    r: 8, 
                    fill: "#fff", 
                    stroke: "#a855f7", 
                    strokeWidth: 4,
                    className: "shadow-[0_0_20px_#a855f7]" 
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
