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
    <div className="space-y-6 pb-8">
      <ProModal 
        isOpen={isProModalOpen} 
        onClose={() => setIsProModalOpen(false)} 
        featureName={selectedFeature}
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Advanced Analytics</h1>
          </div>
          <p className="text-sm text-muted">Granular breakdown of user behavior and revenue retention.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 gap-2 border-border-theme"
            onClick={() => handleProClick("Custom Date Ranges")}
          >
            <Calendar className="h-4 w-4" />
            Last 30 Days
          </Button>
          <Button 
            variant="primary" 
            size="sm" 
            className="h-9 gap-2"
            onClick={() => handleProClick("Report Exports")}
          >
            <Download className="h-4 w-4" />
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
                <div className="h-48 w-full animate-pulse rounded-xl bg-muted/20 border border-border-theme flex items-center justify-center">
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
            {/* Row 1: Key Performance Indicators */}
            {ANALYTIC_STATS.map((stat, i) => (
              <StatCard key={stat.title} {...stat} delay={0.1 * (i + 1)} />
            ))}

            <div className="lg:col-span-1">
              <div 
                className="h-full rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col justify-between group hover:border-primary/40 transition-all cursor-pointer shadow-sm shadow-primary/5"
                onClick={() => handleProClick("Predictive Forecasting")}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <Sparkles className="h-4 w-4 text-primary/30" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Predictive AI</p>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">LTV Forecast</h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">Projected lifetime value to increase by 14% based on current cohort trends.</p>
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
              <div className="h-full rounded-2xl border border-border-theme bg-card p-8 flex flex-col items-center justify-center text-center gap-4 group hover:border-primary/50 transition-all min-h-[300px] shadow-sm">
                <div className="h-16 w-16 rounded-full bg-muted/20 flex items-center justify-center border border-border-theme group-hover:border-primary/30 transition-all relative">
                  <BarChart3 className="h-8 w-8 text-muted group-hover:text-primary" />
                  <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center border-2 border-card shadow-lg shadow-primary/20">
                    <Sparkles className="h-2.5 w-2.5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Custom Funnels</h3>
                  <p className="text-sm text-muted mt-2 max-w-[320px] leading-relaxed">
                    Create custom event funnels to track conversion drops at every stage of your user journey.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-4 border-border-theme hover:bg-primary/5 hover:text-primary"
                  onClick={() => handleProClick("Custom Funnel Builder")}
                >
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
