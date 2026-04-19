"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function ForgotPasswordPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-zinc-950">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[440px]"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8 text-center px-4">
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.4)]"
          >
            <Sparkles className="h-7 w-7 text-white" />
          </motion.div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-100">Recovery Center</h1>
          <p className="text-sm text-zinc-500 mt-1">We&apos;ll help you regain access to your dashboard.</p>
        </div>

        {/* Card */}
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl shadow-black/50">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 ml-1">
                Registered Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full h-12 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-zinc-100 placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>

            <Button variant="primary" className="w-full h-12 text-sm font-bold gap-2 group">
              Send Reset Instructions
              <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/login" className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-100 transition-colors uppercase tracking-widest">
              <ArrowLeft className="h-4 w-4" /> Back to command center
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Decorative Rotating Ring */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 border-[1px] border-indigo-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
    </div>
  )
}
