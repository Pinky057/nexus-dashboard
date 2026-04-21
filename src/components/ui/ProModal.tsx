"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, CheckCircle2, Zap } from "lucide-react"
import { Button } from "./Button"

interface ProModalProps {
  isOpen: boolean
  onClose: () => void
  featureName?: string
}

export function ProModal({ isOpen, onClose, featureName = "Premium Feature" }: ProModalProps) {
  // Close on Escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] border-2 border-border-theme bg-card/60 backdrop-blur-3xl shadow-hero"
          >
            {/* Top Pattern / Glow */}
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative p-8 md:p-10">
              <button
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full p-2 text-muted hover:bg-muted/10 hover:text-foreground transition-all z-50"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-500 border border-primary-500/20 mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  Limited Time Launch Pricing
                </div>
                <h2 className="text-3xl font-black text-foreground uppercase tracking-wider">
                  Select Your {featureName} Access
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pro Tier */}
                <div className="relative flex flex-col p-8 rounded-[2rem] bg-background/40 border border-border-theme group/tier transition-all hover:border-primary-500/30">
                  <div className="mb-6">
                    <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.2em] mb-2">Essential</p>
                    <h3 className="text-2xl font-black text-foreground uppercase">Pro Version</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-foreground">$49</span>
                      <span className="text-sm font-bold text-muted uppercase">/ Once</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    {[
                      "Full Advanced Kanban Board",
                      "Advanced User Management",
                      "E-commerce & Product Modules",
                      "Standard Data Tables & CRUD",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-muted/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary-500 shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full h-14 rounded-2xl group-hover/tier:bg-primary-500/5 group-hover/tier:border-primary-500/30">
                    Get Pro Access
                  </Button>
                </div>

                {/* Elite Tier */}
                <div className="relative flex flex-col p-8 rounded-[2rem] bg-primary-500/[0.03] border-2 border-primary-500/30 group/tier transition-all hover:border-primary-500/60 shadow-[0_0_30px_rgba(99,102,241,0.05)] overflow-hidden">
                  <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary-500 text-[9px] font-black text-white uppercase tracking-widest rounded-bl-2xl">
                    Best Value
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-[10px] font-black text-primary-500 uppercase tracking-[0.2em] mb-2">Enterprise</p>
                    <h3 className="text-2xl font-black text-foreground uppercase">Elite AI Hub</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-foreground">$79</span>
                      <span className="text-sm font-bold text-muted uppercase">/ Once</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    {[
                      "Neural AI Intelligence Hub",
                      "Predictive Revenue Forecasting",
                      "Customer Sentiment Analytics",
                      "Global Sales Live Heatmap",
                      "Priority Developer Support",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-foreground">
                        <Zap className="h-3.5 w-3.5 text-primary-500 fill-primary-500 shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" className="w-full h-14 rounded-2xl shadow-hero">
                    Unlock Elite Power
                  </Button>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-border-theme/50 flex flex-col items-center gap-4">
                <p className="text-[10px] font-bold text-muted/60 uppercase tracking-widest text-center">
                  Secure Checkout Powered by Stripe • Instant Source Code Access
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-emerald-500" />
                  <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Pricing locked for first 100 license sales</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
