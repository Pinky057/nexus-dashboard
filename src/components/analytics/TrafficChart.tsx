"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { TRAFFIC_SOURCES } from "@/data/mock"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export function TrafficChart() {
  return (
    <Card variant="hero" className="h-full flex flex-col group overflow-hidden border-border-theme hover:border-primary-400/30 transition-all duration-500 shadow-hero bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl font-black tracking-tighter text-foreground uppercase tracking-wider">Traffic Acquisition</CardTitle>
          <CardDescription className="text-[10px] font-bold text-muted uppercase tracking-widest">Top sources of inbound platform traffic</CardDescription>
        </div>
        <div className="h-12 w-12 rounded-[1.25rem] bg-indigo-50 flex items-center justify-center text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-500/10 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_var(--brand-glow)] transition-all duration-500">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center gap-10 p-8">
        <div className="h-[220px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={TRAFFIC_SOURCES}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={95}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {TRAFFIC_SOURCES.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-card/40 backdrop-blur-3xl border border-border-theme p-4 rounded-3xl shadow-hero ring-1 ring-white/10">
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted mb-1">{payload[0].name}</p>
                        <p className="text-xl font-black text-foreground tracking-tighter">{payload[0].value}%</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-black text-foreground tracking-tighter">100%</span>
            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Total</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {TRAFFIC_SOURCES.map((source) => (
            <div key={source.name} className="flex items-center justify-between p-3 rounded-2xl bg-muted/5 border border-border-theme/50 group-hover:border-border-theme transition-all">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.4)]" style={{ backgroundColor: source.color }} />
                <span className="text-[11px] font-black text-muted uppercase tracking-widest">{source.name}</span>
              </div>
              <span className="text-xs font-black text-foreground tracking-tighter">{source.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
