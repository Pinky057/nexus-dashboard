"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Code, Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden bg-background">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0,transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[500px]"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-xl shadow-primary/30"
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>
          <h1 className="mt-5 text-3xl font-black tracking-tight text-foreground">Join the Future</h1>
          <p className="text-sm text-muted mt-2 font-medium">Start your 14-day free trial. No credit card required.</p>
        </div>

        {/* Register Card */}
        <div className="bg-card backdrop-blur-xl border border-border-theme p-10 rounded-[32px] shadow-2xl shadow-black/5">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-muted mb-2.5 ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full h-12 bg-background border border-border-theme rounded-2xl px-5 text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-muted mb-2.5 ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full h-12 bg-background border border-border-theme rounded-2xl px-5 text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black uppercase tracking-widest text-muted mb-2.5 ml-1">
                Workspace Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full h-12 bg-background border border-border-theme rounded-2xl px-5 text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-[11px] font-black uppercase tracking-widest text-muted mb-2.5 ml-1">
                Choose Password
              </label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                className="w-full h-12 bg-background border border-border-theme rounded-2xl px-5 text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
            </div>

            <div className="flex items-center gap-3 py-2 px-1">
              <div className="flex h-5 w-5 items-center justify-center rounded border border-border-theme bg-background shadow-sm">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <p className="text-[11px] text-muted leading-tight font-medium">
                I agree to the <span className="text-foreground font-black underline cursor-pointer">Terms</span> and <span className="text-foreground font-black underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>

            <Link href="/" className="block pt-3">
              <Button variant="primary" className="w-full h-13 text-sm font-black gap-2 group shadow-xl shadow-primary/10">
                Create My Account
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </form>

          {/* Social Logins */}
          <div className="mt-10">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-theme"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.2em] text-muted">
                <span className="bg-card px-4">Or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2.5 h-12 rounded-2xl border border-border-theme bg-muted/5 text-foreground hover:bg-muted/10 transition-all font-bold text-xs shadow-sm">
                <Code className="h-4.5 w-4.5 text-muted" />
                <span>Github</span>
              </button>
              <button className="flex items-center justify-center gap-2.5 h-12 rounded-2xl border border-border-theme bg-muted/5 text-foreground hover:bg-muted/10 transition-all font-bold text-xs shadow-sm">
                <Globe className="h-4.5 w-4.5 text-muted" />
                <span>Google</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <p className="mt-10 text-center text-sm text-muted font-medium">
          Already using Synthex?{' '}
          <Link href="/login" className="font-black text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </motion.div>

      {/* Decorative Rotating Ring */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 border-[1px] border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 border-[1px] border-primary/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
    </div>
  )
}
