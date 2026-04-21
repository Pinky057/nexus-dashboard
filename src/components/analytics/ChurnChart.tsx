"use client"

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { CHURN_DATA } from "@/data/mock"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export function ChurnChart() {
  return (
    <Card variant="hero" className="h-full flex flex-col group overflow-hidden border-border-theme hover:border-rose-400/30 transition-all duration-500 shadow-hero bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl font-black tracking-tighter text-foreground uppercase tracking-wider">Churn Analytics</CardTitle>
          <CardDescription className="text-[10px] font-bold text-muted uppercase tracking-widest">Monthly customer churn rate (%)</CardDescription>
        </div>
        <div className="h-12 w-12 rounded-[1.25rem] bg-rose-50 flex items-center justify-center text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-500/10 group-hover:border-rose-500/50 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all duration-500">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      </CardHeader>
      <CardContent className="flex-1 min-h-[300px] pt-8">
        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={CHURN_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorChurn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.01}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="0" vertical={false} stroke="var(--border-theme)" strokeOpacity={0.3} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--text-muted)', fontSize: 10, fontWeight: 800, letterSpacing: '0.05em' }}
                dy={15}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--text-muted)', fontSize: 10, fontWeight: 800, letterSpacing: '0.05em' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                cursor={{ stroke: "#f43f5e", strokeWidth: 2, strokeDasharray: "4 4" }}
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-card/40 backdrop-blur-3xl border border-border-theme p-6 rounded-[2rem] shadow-hero animate-in fade-in zoom-in duration-300 ring-1 ring-white/10">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted mb-3">{label}</p>
                        <div className="flex items-center gap-4">
                          <div className="h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                          <p className="text-2xl font-black text-foreground tracking-tighter">
                            {payload[0].value}%
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                           <div className="h-1 w-1 rounded-full bg-rose-500" />
                           <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest">High retention risk</p>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area 
                type="monotone" 
                dataKey="rate" 
                stroke="#f43f5e" 
                strokeWidth={5}
                fillOpacity={1} 
                fill="url(#colorChurn)" 
                filter="drop-shadow(0 0 8px rgba(244, 63, 94, 0.4))"
                animationDuration={2500}
                activeDot={{ 
                  r: 8, 
                  fill: "#f43f5e", 
                  stroke: "var(--bg-card)", 
                  strokeWidth: 4,
                  className: "shadow-[0_0_15px_rgba(244,63,94,0.8)]" 
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
