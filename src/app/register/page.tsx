"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Github, Chrome, Check } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-zinc-950">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0,transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[500px]"
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
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-100">Join the Future</h1>
          <p className="text-sm text-zinc-500 mt-1">Start your 14-day free trial. No credit card required.</p>
        </div>

        {/* Register Card */}
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl shadow-black/50">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-zinc-100 placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-zinc-100 placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 ml-1">
                Workspace Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-zinc-100 placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 ml-1">
                Choose Password
              </label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-zinc-100 placeholder:text-zinc-600 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>

            <div className="flex items-center gap-3 py-2 px-1">
              <div className="flex h-5 w-5 items-center justify-center rounded border border-zinc-700 bg-zinc-950">
                <Check className="h-3 w-3 text-indigo-500" />
              </div>
              <p className="text-[11px] text-zinc-500 leading-tight">
                I agree to the <span className="text-zinc-300 font-bold underline cursor-pointer">Terms of Service</span> and <span className="text-zinc-300 font-bold underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>

            <Link href="/" className="block pt-2">
              <Button variant="primary" className="w-full h-12 text-sm font-bold gap-2 group">
                Create My Account
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
                <span className="bg-[#121214] px-2 text-zinc-600 font-bold tracking-widest rounded">Or sign up with</span>
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
          Already using Synthex?{' '}
          <Link href="/login" className="font-bold text-indigo-400 hover:text-indigo-300">
            Sign In
          </Link>
        </p>
      </motion.div>

      {/* Decorative Rotating Ring */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 border-[1px] border-indigo-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 border-[1px] border-purple-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
    </div>
  )
}
