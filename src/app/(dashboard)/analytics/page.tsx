"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { StatCard } from "@/components/StatCard"
import { RevenueChart } from "@/components/RevenueChart"
import { ChurnChart } from "@/components/analytics/ChurnChart"
import { TrafficChart } from "@/components/analytics/TrafficChart"
import { ANALYTIC_STATS } from "@/data/mock"
import { BarChart3, Sparkles, Loader2, TrendingUp, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { ProModal } from "@/components/ui/ProModal"

export default function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isProModalOpen, setIsProModalOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleProClick = (feature: string) => {
    setSelectedFeature(feature)
    setIsProModalOpen(true)
  }

  return (
    <div className="space-y-10 pb-12">
      <ProModal 
        isOpen={isProModalOpen} 
        onClose={() => setIsProModalOpen(false)} 
        featureName={selectedFeature}
      />

      {/* Premium Pill Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
              <BarChart3 className="h-5 w-5 text-primary-500" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase tracking-wider">Advanced Analytics</h1>
          </div>
          <p className="text-[11px] font-black text-muted uppercase tracking-[0.2em] ml-[52px]">Granular breakdown of user behavior and revenue retention</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="h-[52px] px-6 rounded-full border-border-theme bg-background/50 backdrop-blur-md hover:border-primary-500/30 gap-3 transition-all"
            onClick={() => handleProClick("Custom Date Ranges")}
          >
            <Calendar className="h-4 w-4" />
            <span className="font-black uppercase tracking-widest text-[10px]">Last 30 Days</span>
          </Button>
          <Button 
            variant="primary" 
            className="h-[52px] px-8 rounded-full shadow-hero gap-3 transition-all"
            onClick={() => handleProClick("Report Exports")}
          >
            <Download className="h-5 w-5" />
            <span className="font-black uppercase tracking-widest text-[10px]">Download Report</span>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className={i === 0 ? "lg:col-span-2" : ""}>
                <div className="h-56 w-full animate-pulse rounded-[2.5rem] border-2 border-border-theme/30 bg-transparent flex items-center justify-center backdrop-blur-sm">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Row 1: Key Performance Indicators */}
            {ANALYTIC_STATS.map((stat, i) => (
              <StatCard key={stat.title} {...stat} delay={0.1 * (i + 1)} />
            ))}

            <div className="lg:col-span-1">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="h-full rounded-[2.5rem] border-2 border-primary-500/20 bg-primary-500/5 p-8 flex flex-col justify-between group hover:border-primary-500/40 transition-all cursor-pointer shadow-flat hover:shadow-hero relative overflow-hidden"
                onClick={() => handleProClick("Predictive Forecasting")}
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="h-12 w-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shadow-[0_0_15px_var(--brand-glow)]">
                    <TrendingUp className="h-6 w-6 text-primary-500" />
                  </div>
                  <Sparkles className="h-5 w-5 text-primary-500/40 group-hover:animate-pulse" />
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.3em] mb-2">Predictive AI Engine</p>
                  <h3 className="text-xl font-black text-foreground group-hover:text-primary-500 transition-colors tracking-tight uppercase">LTV Forecast</h3>
                  <p className="text-[11px] font-bold text-muted mt-3 leading-relaxed uppercase tracking-wide">Projected lifetime value to increase by 14% based on current cohort trends.</p>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Deep Dive Charts - Primary Card */}
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
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                className="h-full rounded-[2.5rem] border-2 border-border-theme bg-background/5 p-10 flex flex-col items-center justify-center text-center gap-6 group hover:border-primary-500/40 transition-all min-h-[350px] shadow-flat hover:shadow-hero backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="h-20 w-20 rounded-[2.5rem] bg-background border border-border-theme flex items-center justify-center group-hover:border-primary-500/50 group-hover:shadow-[0_0_40px_var(--brand-glow)] transition-all relative z-10 shadow-sm">
                  <BarChart3 className="h-10 w-10 text-muted group-hover:text-primary-500" />
                  <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center border-2 border-background shadow-lg">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-black text-foreground uppercase tracking-tight">Custom Funnels</h3>
                  <p className="text-[10px] font-black text-muted uppercase tracking-[0.25em] leading-relaxed max-w-[280px]">
                    Create custom event funnels to track conversion drops at every stage of your user journey.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="relative z-10 h-12 px-10 rounded-full border-border-theme hover:border-primary-500/50 hover:bg-primary-500/5 hover:text-primary-500 font-black uppercase tracking-widest text-[10px] transition-all"
                  onClick={() => handleProClick("Custom Funnel Builder")}
                >
                  Build Custom Funnel
                </Button>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
