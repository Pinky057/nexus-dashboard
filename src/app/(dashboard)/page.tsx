"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { StatCard } from "@/components/StatCard"
import { RevenueChart } from "@/components/RevenueChart"
import { RecentTransactions } from "@/components/RecentTransactions"
import { TopUsers } from "@/components/TopUsers"
import { AiAssistantCard } from "@/components/AiAssistantCard"
import { ProModal } from "@/components/ui/ProModal"
import { STATS } from "@/data/mock"
import { Sparkles, Loader2 } from "lucide-react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isProModalOpen, setIsProModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6 pb-8">
      <ProModal 
        isOpen={isProModalOpen} 
        onClose={() => setIsProModalOpen(false)} 
        featureName="Pro Dashboard Analytics"
      />

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-400" />
          <h1 className="text-2xl font-bold tracking-tight text-foreground">AI Command Center</h1>
        </div>
        <p className="text-sm text-muted">Intelligent overview of your SaaS performance and system health.</p>
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
              <div key={i} className={i === 2 ? "lg:col-span-2 lg:row-span-2" : ""}>
                <div className={i === 2 ? "h-[450px]" : "h-[200px]" + " w-full animate-pulse rounded-xl bg-muted/20 border border-border-theme flex items-center justify-center"}>
                  <Loader2 className="h-6 w-6 animate-spin text-muted" />
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
            {/* Column 1 & 2: Stats */}
            <div className="space-y-6">
              <StatCard {...STATS[0]} delay={0.1} />
              <StatCard {...STATS[2]} delay={0.2} />
            </div>
            
            <div className="space-y-6">
              <StatCard {...STATS[1]} delay={0.15} />
              <StatCard {...STATS[3]} delay={0.25} />
            </div>

            {/* Column 3 & 4: Main Chart (Spans 2 columns) */}
            <div className="md:col-span-2">
              <RevenueChart />
            </div>

            {/* Bottom Row: Varied Widths */}
            <div className="lg:col-span-1">
              <TopUsers />
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <RecentTransactions />
            </div>

            <div className="md:col-span-2">
              <AiAssistantCard />
            </div>

            <div className="md:col-span-2">
              <div 
                className="rounded-xl border border-dashed border-border-theme bg-muted/5 p-8 flex flex-col items-center justify-center text-center gap-4 group hover:border-indigo-500/50 transition-colors h-full min-h-[220px] cursor-pointer"
                onClick={() => setIsProModalOpen(true)}
              >
                <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center ring-1 ring-border-theme group-hover:ring-indigo-500/50 transition-all">
                  <Sparkles className="h-5 w-5 text-muted group-hover:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Unlock Pro Features</p>
                  <p className="text-xs text-muted mt-1 max-w-[200px]">Get advanced predictive analytics and custom AI reporting.</p>
                </div>
                <button className="mt-2 rounded-md bg-foreground px-4 py-1.5 text-xs font-semibold text-background hover:bg-muted/90 transition-all">
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
