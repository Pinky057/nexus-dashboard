"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts"
import { MONTHLY_DATA, PIE_DATA, RADAR_DATA } from "@/data/mock"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"

const PIE_COLORS = ["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd"]

export default function ChartsPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const tooltipStyle = {
    contentStyle: { 
      backgroundColor: isDark ? "#18181b" : "#ffffff", 
      borderColor: isDark ? "#27272a" : "#e4e4e7", 
      borderRadius: "12px", 
      color: isDark ? "#fff" : "#18181b", 
      fontSize: "12px",
      border: "1px solid",
      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
    },
    itemStyle: {
      color: isDark ? "#a1a1aa" : "#52525b"
    }
  }

  const gridStroke = isDark ? "#27272a" : "#f4f4f5"
  const textStroke = isDark ? "#52525b" : "#a1a1aa"

  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors">Charts</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 transition-colors">Recharts data visualization components integrated with our UI Card system.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Area Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader>
              <CardTitle>Area Chart</CardTitle>
              <CardDescription>Revenue growth trends over the last 8 months.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={MONTHLY_DATA}>
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke={textStroke} fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke={textStroke} fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                  <Tooltip {...tooltipStyle} />
                  <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fill="url(#areaGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bar Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <Card>
            <CardHeader>
              <CardTitle>Bar Chart</CardTitle>
              <CardDescription>Monthly user sign-ups and acquisition metrics.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={MONTHLY_DATA} barSize={24}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                  <XAxis dataKey="name" stroke={textStroke} fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke={textStroke} fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="users" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Line Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Multi-Line Chart</CardTitle>
              <CardDescription>Direct comparison between revenue and active user base.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={MONTHLY_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                  <XAxis dataKey="name" stroke={textStroke} fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke={textStroke} fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip {...tooltipStyle} />
                  <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }} />
                  <Line name="Revenue" type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} dot={{ fill: "#6366f1", strokeWidth: 2, r: 3 }} activeDot={{ r: 5 }} />
                  <Line name="Users" type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pie Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <Card>
            <CardHeader>
              <CardTitle>Pie / Donut Chart</CardTitle>
              <CardDescription>Traffic source breakdown for the current period.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {PIE_DATA.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip {...tooltipStyle} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-2 shrink-0">
                  {PIE_DATA.map((entry, i) => (
                    <div key={entry.name} className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: PIE_COLORS[i] }} />
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">{entry.name}</span>
                      <span className="ml-auto text-sm font-medium text-zinc-900 dark:text-zinc-200 pl-4">{entry.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Radar Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Radar Chart</CardTitle>
              <CardDescription>Departmental performance metrics and resource allocation comparison.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={RADAR_DATA}>
                  <PolarGrid stroke={gridStroke} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: textStroke, fontSize: 12 }} />
                  <Radar name="Team Alpha" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
                  <Radar name="Team Beta" dataKey="B" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                  <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }} />
                  <Tooltip {...tooltipStyle} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
