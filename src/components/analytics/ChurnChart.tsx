"use client"

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { CHURN_DATA } from "@/data/mock"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export function ChurnChart() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Churn Analytics</CardTitle>
        <CardDescription>Monthly customer churn rate (%)</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-[250px]">
        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={CHURN_DATA}>
              <defs>
                <linearGradient id="colorChurn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-theme)" opacity={0.1} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--text-muted)', fontSize: 10, fontWeight: 700 }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--text-muted)', fontSize: 10, fontWeight: 700 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-card)', 
                  borderColor: 'var(--border-theme)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  fontSize: '12px',
                  fontWeight: '700'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="churn" 
                stroke="#f43f5e" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorChurn)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
