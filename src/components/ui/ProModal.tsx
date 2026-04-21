"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react"
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
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl"
          >
            {/* Top Pattern / Glow */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative p-6 sm:p-8">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-1 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 ring-1 ring-indigo-500/20">
                  <ShieldCheck className="h-8 w-8 text-indigo-400" />
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-4">
                  <Sparkles className="h-3 w-3" />
                  Premium Version Required
                </div>

                <h2 className="mb-2 text-2xl font-bold text-zinc-100">
                  Unlock {featureName}
                </h2>
                <p className="mb-8 text-zinc-400 text-sm max-w-[320px]">
                  This feature is part of the **Nexus Dashboard Pro** version. Get full access to all modules and source code.
                </p>

                <div className="grid w-full gap-3 mb-8 text-left">
                  {[
                    "Full Advanced Analytics Module",
                    "Custom Date Range & Comparisons",
                    "Export to PDF, CSV & Excel",
                    "Priority Developer Support",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300 bg-zinc-800/30 p-3 rounded-xl border border-zinc-800/50">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex w-full flex-col sm:flex-row gap-3">
                  <Button variant="primary" className="flex-1 h-12 text-sm font-bold shadow-indigo-500/20">
                    Upgrade to Pro ($49)
                  </Button>
                  <Button variant="outline" onClick={onClose} className="flex-1 h-12 text-sm font-bold border-zinc-700">
                    Maybe Later
                  </Button>
                </div>
                
                <p className="mt-6 text-[10px] text-zinc-500">
                  Secure checkout via Gumroad or Stripe. One-time payment, lifetime updates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
