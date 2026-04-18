"use client"

import { motion } from "framer-motion"
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts"

const monthlyData = [
  { name: "Jan", revenue: 4000, users: 240 },
  { name: "Feb", revenue: 3000, users: 139 },
  { name: "Mar", revenue: 5000, users: 380 },
  { name: "Apr", revenue: 4780, users: 390 },
  { name: "May", revenue: 5890, users: 480 },
  { name: "Jun", revenue: 4390, users: 380 },
  { name: "Jul", revenue: 6490, users: 430 },
  { name: "Aug", revenue: 7000, users: 510 },
]

const pieData = [
  { name: "Direct", value: 400 },
  { name: "Social", value: 300 },
  { name: "Referral", value: 200 },
  { name: "Organic", value: 100 },
]

const PIE_COLORS = ["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd"]

const radarData = [
  { subject: "Marketing", A: 120, B: 110 },
  { subject: "Sales", A: 98, B: 130 },
  { subject: "Dev", A: 86, B: 130 },
  { subject: "Support", A: 99, B: 100 },
  { subject: "Design", A: 85, B: 90 },
]

const TOOLTIP_STYLE = {
  contentStyle: { backgroundColor: "#18181b", borderColor: "#27272a", borderRadius: "8px", color: "#fff", fontSize: "12px" }
}

export default function ChartsPage() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Charts</h1>
        <p className="text-sm text-zinc-400 mt-1">Recharts data visualization components with custom dark styling.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Area Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-base font-semibold text-zinc-100 mb-1">Area Chart</h2>
          <p className="text-xs text-zinc-500 mb-5">Revenue over last 8 months</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip {...TOOLTIP_STYLE} />
              <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fill="url(#areaGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-base font-semibold text-zinc-100 mb-1">Bar Chart</h2>
          <p className="text-xs text-zinc-500 mb-5">Monthly user sign-ups</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyData} barSize={24}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis dataKey="name" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip {...TOOLTIP_STYLE} />
              <Bar dataKey="users" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Line Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-base font-semibold text-zinc-100 mb-1">Multi-Line Chart</h2>
          <p className="text-xs text-zinc-500 mb-5">Revenue vs Users comparison</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="name" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip {...TOOLTIP_STYLE} />
              <Legend wrapperStyle={{ fontSize: "12px", color: "#a1a1aa" }} />
              <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={2} dot={false} strokeDasharray="4 2" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-base font-semibold text-zinc-100 mb-1">Pie / Donut Chart</h2>
          <p className="text-xs text-zinc-500 mb-5">Traffic source breakdown</p>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip {...TOOLTIP_STYLE} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {pieData.map((entry, i) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: PIE_COLORS[i] }} />
                  <span className="text-sm text-zinc-400">{entry.name}</span>
                  <span className="ml-auto text-sm font-medium text-zinc-200">{entry.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Radar Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 lg:col-span-2">
          <h2 className="text-base font-semibold text-zinc-100 mb-1">Radar Chart</h2>
          <p className="text-xs text-zinc-500 mb-5">Team performance comparison across departments</p>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#27272a" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#71717a", fontSize: 12 }} />
              <Radar name="Team A" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} />
              <Radar name="Team B" dataKey="B" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} />
              <Legend wrapperStyle={{ fontSize: "12px", color: "#a1a1aa" }} />
              <Tooltip {...TOOLTIP_STYLE} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  )
}
