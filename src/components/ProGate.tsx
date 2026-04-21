"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Lock, Sparkles, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

interface ProGateProps {
  title: string
  description: string
  features: string[]
  icon?: React.ReactNode
  className?: string
}

export function ProGate({
  title,
  description,
  features,
  icon,
  className
}: ProGateProps) {
  return (
    <div className={cn("relative min-h-[500px] w-full rounded-[2.5rem] overflow-hidden border-2 border-border-theme bg-background/5 backdrop-blur-xl", className)}>
      {/* Blurred Background Tease */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 blur-xl scale-110">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/20 rounded-full mix-blend-screen" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen" />
        <div className="grid grid-cols-3 gap-4 p-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-40 rounded-3xl bg-muted/20 border border-border-theme" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center p-8 md:p-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full bg-card/60 backdrop-blur-2xl border-2 border-primary-500/30 rounded-[3rem] p-10 md:p-16 shadow-hero relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="h-20 w-20 rounded-[2rem] bg-primary-500/10 border-2 border-primary-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(99,102,241,0.2)] animate-pulse">
              {icon || <Lock className="h-8 w-8 text-primary-500" />}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500">Premium Feature</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground uppercase tracking-wider mb-6">
              Unlock {title}
            </h2>
            
            <p className="text-muted/80 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-lg">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-12 text-left">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-background/40 border border-border-theme">
                  <div className="h-6 w-6 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Zap className="h-3 w-3 text-emerald-500" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <Button 
                className="w-full h-16 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-black uppercase tracking-[0.2em] text-xs gap-3 shadow-[0_15px_30px_-10px_rgba(99,102,241,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Upgrade to Pro
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="w-full h-16 rounded-2xl border-border-theme bg-background/50 hover:bg-muted/10 font-black uppercase tracking-[0.2em] text-xs transition-all"
              >
                View Comparison
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
