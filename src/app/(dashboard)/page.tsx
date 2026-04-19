"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { StatCard } from "@/components/StatCard"
import { RevenueChart } from "@/components/RevenueChart"
import { RecentTransactions } from "@/components/RecentTransactions"
import { TopUsers } from "@/components/TopUsers"
import { AiAssistantCard } from "@/components/AiAssistantCard"
import { STATS } from "@/data/mock"
import { Sparkles, Loader2 } from "lucide-react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-400" />
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100">AI Command Center</h1>
        </div>
        <p className="text-sm text-zinc-400">Intelligent overview of your SaaS performance and system health.</p>
      </div>
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className={i === 2 || i === 5 || i === 6 ? "md:col-span-2" : ""}>
                <div className="h-48 w-full animate-pulse rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-zinc-800" />
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
          >
            {/* Row 1: Stats & Major Chart */}
            <div className="lg:col-span-1 space-y-6">
              <StatCard {...STATS[0]} delay={0.1} />
              <StatCard {...STATS[2]} delay={0.2} />
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <StatCard {...STATS[1]} delay={0.15} />
              <StatCard {...STATS[3]} delay={0.25} />
            </div>

            <div className="md:col-span-2 lg:col-span-2 h-full">
              <RevenueChart />
            </div>

            {/* Row 2: Assistant & Transactions */}
            <div className="md:col-span-2 lg:col-span-1 h-full">
              <TopUsers />
            </div>

            <div className="md:col-span-2 lg:col-span-3 h-full">
              <RecentTransactions />
            </div>

            {/* Row 3: Full-width / Bottom Widgets */}
            <div className="md:col-span-2 lg:col-span-2 h-full">
              <AiAssistantCard />
            </div>

            <div className="md:col-span-2 lg:col-span-2 h-full">
              <div className="rounded-xl border border-dashed border-zinc-800 bg-zinc-950/20 p-8 flex flex-col items-center justify-center text-center gap-4 group hover:border-indigo-500/50 transition-colors h-full">
                <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center ring-1 ring-zinc-800 group-hover:ring-indigo-500/50 transition-all">
                  <Sparkles className="h-5 w-5 text-zinc-600 group-hover:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-300">Unlock Pro Features</p>
                  <p className="text-xs text-zinc-500 mt-1 max-w-[200px]">Get advanced predictive analytics and custom AI reporting.</p>
                </div>
                <button className="mt-2 rounded-md bg-zinc-900 px-4 py-1.5 text-xs font-semibold text-zinc-100 hover:bg-zinc-800 ring-1 ring-zinc-800 transition-all">
                  Upgrade Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
