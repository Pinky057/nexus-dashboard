"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Github, Chrome } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-zinc-950">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0,transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[440px]"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.4)]"
          >
            <Sparkles className="h-7 w-7 text-white" />
          </motion.div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-100">Welcome to Synthex</h1>
          <p className="text-sm text-zinc-500 mt-1">Access your AI Command Center</p>
        </div>

        {/* Login Card */}
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl shadow-black/50">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 ml-1">
                Workspace Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full h-12 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-zinc-100 placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2 ml-1">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Secure Password
                </label>
                <Link href="/forgot-password-placeholder" className="text-[10px] font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-wider">
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-12 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-zinc-100 placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
              />
            </div>

            <Link href="/" className="block pt-2">
              <Button variant="primary" className="w-full h-12 text-sm font-bold gap-2 group">
                Enter Command Center
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </form>

          {/* Social Logins */}
          <div className="mt-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-zinc-600 font-bold tracking-widest bg-[#121214] rounded">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 h-11 rounded-xl border border-zinc-800 bg-zinc-950/50 text-zinc-300 hover:bg-zinc-800 transition-colors">
                <Github className="h-4 w-4" />
                <span className="text-xs font-medium">Github</span>
              </button>
              <button className="flex items-center justify-center gap-2 h-11 rounded-xl border border-zinc-800 bg-zinc-950/50 text-zinc-300 hover:bg-zinc-800 transition-colors">
                <Chrome className="h-4 w-4" />
                <span className="text-xs font-medium">Google</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <p className="mt-8 text-center text-sm text-zinc-500">
          New to the platform?{' '}
          <Link href="/register" className="font-bold text-indigo-400 hover:text-indigo-300">
            Create an ID
          </Link>
        </p>
      </motion.div>

      {/* Decorative Rotating Ring */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 border-[1px] border-indigo-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 border-[1px] border-purple-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
    </div>
  )
}
