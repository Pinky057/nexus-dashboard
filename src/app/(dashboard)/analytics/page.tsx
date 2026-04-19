"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { StatCard } from "@/components/StatCard"
import { RevenueChart } from "@/components/RevenueChart"
import { ChurnChart } from "@/components/analytics/ChurnChart"
import { TrafficChart } from "@/components/analytics/TrafficChart"
import { ANALYTIC_STATS } from "@/data/mock"
import { BarChart3, Sparkles, Loader2, TrendingUp, Calendar } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-indigo-400" />
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Advanced Analytics</h1>
          </div>
          <p className="text-sm text-zinc-400">Granular breakdown of user behavior and revenue retention.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-2">
            <Calendar className="h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="primary" size="sm" className="h-9 gap-2">
            Download Report
          </Button>
        </div>
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
            {[...Array(6)].map((_, i) => (
              <div key={i} className={i === 0 ? "lg:col-span-2" : ""}>
                <div className="h-48 w-full animate-pulse rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-zinc-800" />
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Row 1: Key Performance Indicators */}
            {ANALYTIC_STATS.map((stat, i) => (
              <StatCard key={stat.title} {...stat} delay={0.1 * (i + 1)} />
            ))}

            <div className="lg:col-span-1">
              <div className="h-full rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 flex flex-col justify-between group hover:border-indigo-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    <TrendingUp className="h-5 w-5 text-indigo-400" />
                  </div>
                  <Sparkles className="h-4 w-4 text-indigo-500/40" />
                </div>
                <div>
                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Predictive</p>
                  <h3 className="text-lg font-bold text-zinc-100">LTV Forecast</h3>
                  <p className="text-xs text-zinc-500 mt-1">Projected lifetime value to increase by 14% based on current cohort trends.</p>
                </div>
              </div>
            </div>

            {/* Row 2: Deep Dive Charts */}
            <div className="md:col-span-2 lg:col-span-3">
              <RevenueChart />
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <TrafficChart />
            </div>

            {/* Row 3: Retention & Churn */}
            <div className="md:col-span-2 lg:col-span-2">
              <ChurnChart />
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <div className="h-full rounded-xl border border-zinc-800 bg-zinc-950/50 p-8 flex flex-col items-center justify-center text-center gap-4 group hover:border-indigo-500/50 transition-colors min-h-[300px]">
                <div className="h-16 w-16 rounded-full bg-zinc-900 flex items-center justify-center ring-1 ring-zinc-800 group-hover:ring-indigo-500/50 transition-all relative">
                  <BarChart3 className="h-8 w-8 text-zinc-700 group-hover:text-indigo-400" />
                  <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-indigo-600 flex items-center justify-center border-2 border-zinc-950">
                    <Sparkles className="h-2.5 w-2.5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-200">Custom Funnels</h3>
                  <p className="text-sm text-zinc-500 mt-2 max-w-[320px]">
                    Create custom event funnels to track conversion drops at every stage of your user journey.
                  </p>
                </div>
                <Button variant="secondary" className="mt-4 ring-1 ring-zinc-700">
                  Build Custom Funnel
                </Button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
