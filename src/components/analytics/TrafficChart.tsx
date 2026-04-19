"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { TRAFFIC_SOURCES } from "@/data/mock"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export function TrafficChart() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Traffic Acquisition</CardTitle>
        <CardDescription>Top sources of inbound platform traffic.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center gap-6">
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={TRAFFIC_SOURCES}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {TRAFFIC_SOURCES.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#09090b", borderColor: "#27272a", borderRadius: "8px", border: "1px solid #27272a" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-2">
          {TRAFFIC_SOURCES.map((source) => (
            <div key={source.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: source.color }} />
                <span className="text-xs text-zinc-400">{source.name}</span>
              </div>
              <span className="text-xs font-bold text-zinc-200">{source.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
