"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function ForgotPasswordPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-background">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0,transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[440px]"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10 text-center px-4">
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-xl shadow-primary/30"
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>
          <h1 className="mt-5 text-3xl font-black tracking-tight text-foreground">Recovery Center</h1>
          <p className="text-sm text-muted mt-2 font-medium">We&apos;ll help you regain access to your dashboard.</p>
        </div>

        {/* Card */}
        <div className="bg-card backdrop-blur-xl border border-border-theme p-10 rounded-[32px] shadow-2xl shadow-black/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[11px] font-black uppercase tracking-widest text-muted mb-2.5 ml-1">
                Registered Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full h-13 bg-background border border-border-theme rounded-2xl px-5 text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all font-medium"
              />
            </div>

            <Button variant="primary" className="w-full h-13 text-sm font-black gap-2 group shadow-xl shadow-primary/10">
              Send Reset Instructions
              <Send className="h-4.5 w-4.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/login" className="inline-flex items-center gap-2.5 text-[11px] font-black text-muted hover:text-primary transition-all uppercase tracking-widest group">
              <div className="h-6 w-6 rounded-lg bg-muted/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <ArrowLeft className="h-3 w-3" />
              </div>
              Back to command center
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Decorative Rotating Ring */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 border-[1px] border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
    </div>
  )
}
