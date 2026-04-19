"use client"

import { motion } from "framer-motion"
import { STATS } from "@/data/mock"
import { RevenueChart } from "@/components/RevenueChart"
import { RecentTransactions } from "@/components/RecentTransactions"
import { TopUsers } from "@/components/TopUsers"
import { ArrowUpRight, ArrowDownRight, Sparkles, Zap, TrendingUp } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header Greeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Command Center</h1>
          <p className="text-sm text-zinc-500 mt-1 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Your AI agents are operating at <span className="text-emerald-400 font-semibold">99.9%</span> efficiency today.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900/50 p-1.5 rounded-xl border border-zinc-800">
          <Badge variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700">Daily</Badge>
          <Badge variant="ghost" className="text-zinc-500 hover:text-zinc-300">Weekly</Badge>
          <Badge variant="ghost" className="text-zinc-500 hover:text-zinc-300">Monthly</Badge>
        </div>
      </div>

      {/* Stats Grid - "Smart Insight Cards" */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            {/* Glow Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500 group-hover:duration-200" />
            
            <Card className="relative h-full bg-zinc-950 border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className={cn(
                    "p-2 rounded-lg bg-zinc-900 border border-zinc-800 transition-colors group-hover:border-zinc-700",
                    stat.isPositive ? "text-indigo-400" : "text-rose-400"
                  )}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className={cn(
                    "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
                    stat.isPositive ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
                  )}>
                    {stat.trend}
                    {stat.isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  </div>
                </div>
                
                <p className="text-sm font-medium text-zinc-500 mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3">{stat.value}</h3>
                
                {/* AI Insight Row */}
                <div className="pt-3 border-t border-zinc-900 flex items-start gap-2">
                  <div className="h-4 w-4 shrink-0 mt-0.5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Zap className="h-2.5 w-2.5 text-indigo-400" />
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-tight italic">
                    {stat.insight}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Bento Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Large Analytics Card - Column 1-8 */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <RevenueChart />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <RecentTransactions />
          </motion.div>
        </div>

        {/* Side Actions & Users - Column 9-12 */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 border-none shadow-xl shadow-indigo-500/20 overflow-hidden relative group">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/10 blur-[40px] rounded-full group-hover:scale-125 transition-transform duration-700" />
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Growth Prediction
                </CardTitle>
                <CardDescription className="text-indigo-100/70">Our AI predicts a <span className="text-white font-bold">14% increase</span> in revenue over the next 30 days based on current patterns.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white" 
                      initial={{ width: 0 }} 
                      animate={{ width: "74%" }} 
                      transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-sm font-bold text-white">74% Confidence</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <TopUsers />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

