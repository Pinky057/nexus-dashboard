"use client"

import { motion } from "framer-motion"
import { Check, X, Clock, AlertTriangle, Info, Zap, Star, Shield, Bell, Lock, Wifi, Flame } from "lucide-react"

export default function BadgesPage() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Badges & Indicators</h1>
        <p className="text-sm text-zinc-400 mt-1">A full collection of status indicators, labels, and tags.</p>
      </div>

      {/* Status Badges */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">Status Badges</h2>
          <p className="text-xs text-zinc-500 mt-1">Use in tables and lists to indicate record status.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Active
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-400 ring-1 ring-inset ring-rose-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> Inactive
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" /> Pending
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" /> Processing
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-500/10 px-3 py-1 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> Draft
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> Scheduled
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400 ring-1 ring-inset ring-sky-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> In Review
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400" /> Archived
          </span>
        </div>
      </motion.div>

      {/* Icon Badges */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">Icon Badges</h2>
          <p className="text-xs text-zinc-500 mt-1">Badges with leading icons for contextual meaning.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <Check className="h-3.5 w-3.5" /> Completed
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-400">
            <X className="h-3.5 w-3.5" /> Rejected
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400">
            <Clock className="h-3.5 w-3.5" /> Awaiting
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-500/10 px-2.5 py-1 text-xs font-medium text-orange-400">
            <AlertTriangle className="h-3.5 w-3.5" /> Warning
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-400">
            <Info className="h-3.5 w-3.5" /> Info
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-400">
            <Zap className="h-3.5 w-3.5" /> Pro
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-400">
            <Star className="h-3.5 w-3.5" /> Featured
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <Shield className="h-3.5 w-3.5" /> Verified
          </span>
        </div>
      </motion.div>

      {/* Notification Badges */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">Notification Dots</h2>
          <p className="text-xs text-zinc-500 mt-1">Count indicators and notification dots for icons and avatars.</p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300">
              <Bell className="h-5 w-5" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">3</span>
          </div>
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300">
              <Lock className="h-5 w-5" />
            </div>
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber-400 ring-2 ring-zinc-900" />
          </div>
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300">
              <Wifi className="h-5 w-5" />
            </div>
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-zinc-900 animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-zinc-300">Live — System Operational</span>
          </div>
        </div>
      </motion.div>

      {/* Label Tags */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">Label Tags</h2>
          <p className="text-xs text-zinc-500 mt-1">Flat tags for categories, roles, and labels.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Admin", color: "bg-indigo-600 text-white" },
            { label: "Developer", color: "bg-blue-600 text-white" },
            { label: "Designer", color: "bg-purple-600 text-white" },
            { label: "Manager", color: "bg-teal-600 text-white" },
            { label: "Free Tier", color: "bg-zinc-700 text-zinc-200" },
            { label: "Pro Tier", color: "bg-indigo-600 text-white" },
            { label: "Enterprise", color: "bg-amber-600 text-white" },
            { label: "Deprecated", color: "bg-rose-700 text-white" },
          ].map((tag) => (
            <span key={tag.label} className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${tag.color}`}>
              {tag.label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Alert Banners */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">Alert Banners</h2>
          <p className="text-xs text-zinc-500 mt-1">Inline alerts for system messages and user feedback.</p>
        </div>
        <div className="space-y-3">
          <div className="flex gap-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4">
            <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-emerald-300">Successfully saved!</p>
              <p className="text-xs text-emerald-400/80 mt-0.5">Your changes have been saved to the database.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-lg bg-amber-500/10 border border-amber-500/20 p-4">
            <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-300">Review required</p>
              <p className="text-xs text-amber-400/80 mt-0.5">Your subscription will expire in 3 days. Please renew.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-lg bg-rose-500/10 border border-rose-500/20 p-4">
            <X className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-rose-300">Action failed</p>
              <p className="text-xs text-rose-400/80 mt-0.5">We could not process your request. Please try again.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-lg bg-blue-500/10 border border-blue-500/20 p-4">
            <Info className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-300">New feature available</p>
              <p className="text-xs text-blue-400/80 mt-0.5">The AI Assistant panel is now live on your dashboard.</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 p-4">
            <Flame className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-indigo-300">Upgrade to unlock more</p>
              <p className="text-xs text-indigo-400/80 mt-0.5">Get access to advanced analytics, exports, and more in Pro.</p>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}
