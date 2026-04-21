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
import { Button } from "@/components/ui/Button"
import { Sparkles, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isProModalOpen, setIsProModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
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
          <Sparkles className="h-5 w-5 text-primary-500 animate-pulse" />
          <h1 className="text-2xl font-black tracking-tighter text-foreground uppercase tracking-[0.05em]">AI Command Center</h1>
        </div>
        <p className="text-sm font-bold text-muted uppercase tracking-wider">Intelligent overview of your SaaS performance and system health.</p>
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
                <div className={cn(
                  "w-full animate-pulse rounded-[2.5rem] border-2 border-border-theme/30 bg-transparent flex items-center justify-center",
                  i === 2 ? "h-[450px]" : "h-[200px]"
                )}>
                  <div className="h-10 w-10 rounded-2xl bg-muted/5 border border-border-theme/20 flex items-center justify-center">
                    <Loader2 className="h-5 w-5 animate-spin text-muted/30" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            {/* Top Row: Stats + Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Stats Section (2x2) */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatCard {...STATS[0]} variant="hero" delay={0.1} />
                <StatCard {...STATS[1]} variant="hero" delay={0.15} />
                <StatCard {...STATS[2]} delay={0.2} />
                <StatCard {...STATS[3]} delay={0.25} />
              </div>
              
              {/* Main Chart Section */}
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
            </div>

            {/* Middle Row: Tables & Users */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <TopUsers />
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <RecentTransactions />
              </div>
            </div>

            {/* Bottom Row: AI & Upsell */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AiAssistantCard />
              
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                className="rounded-[2.5rem] border-2 border-border-theme bg-background/5 backdrop-blur-xl p-10 flex flex-col items-center justify-center text-center gap-8 group hover:border-primary-500/50 transition-all h-full min-h-[320px] cursor-pointer shadow-flat hover:shadow-hero relative overflow-hidden"
                onClick={() => setIsProModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="h-20 w-20 rounded-[2.5rem] bg-background border border-border-theme flex items-center justify-center group-hover:border-primary-500/50 group-hover:shadow-[0_0_40px_var(--brand-glow)] transition-all relative z-10">
                  <Sparkles className="h-10 w-10 text-primary-500 group-hover:animate-pulse" />
                </div>
                <div className="relative z-10 space-y-3">
                  <p className="text-xl font-black text-foreground tracking-tighter uppercase tracking-[0.1em]">Unlock Pro Features</p>
                  <p className="text-[10px] font-black text-muted uppercase tracking-[0.3em] leading-relaxed max-w-[280px]">Advanced predictive analytics & custom AI reporting engine</p>
                </div>
                <Button variant="primary" className="relative z-10 h-12 px-10 rounded-full shadow-hero uppercase font-black tracking-widest text-[10px]">
                  Upgrade Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
