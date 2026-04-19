"use client"

import { motion } from "framer-motion"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
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
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CHURN_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="#52525b"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis
                stroke="#52525b"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#09090b", borderColor: "#27272a", borderRadius: "8px", border: "1px solid #27272a" }}
                cursor={{ fill: '#27272a', opacity: 0.4 }}
              />
              <Bar
                dataKey="rate"
                fill="#f43f5e"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
