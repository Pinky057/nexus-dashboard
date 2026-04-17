"use client"

import { motion } from "framer-motion"
import { Download, Trash2, Plus, ArrowRight, Loader2, Check, X, ChevronDown } from "lucide-react"

export default function ButtonsPage() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Buttons</h1>
        <p className="text-sm text-zinc-400 mt-1">A comprehensive set of button styles for every use case.</p>
      </div>

      {/* Solid Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">Solid Variants</h2>
          <p className="text-xs text-zinc-500 mt-1">Use for primary actions, confirmations, and CTA buttons.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">Primary</button>
          <button className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 transition-colors">Secondary</button>
          <button className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors">Success</button>
          <button className="rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-500 transition-colors">Danger</button>
          <button className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-400 transition-colors">Warning</button>
          <button className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500 transition-colors">Info</button>
        </div>
      </motion.div>

      {/* Outline Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">Outline Variants</h2>
          <p className="text-xs text-zinc-500 mt-1">Subtle alternatives that maintain visual hierarchy.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-md border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-500 hover:bg-indigo-600/10 transition-colors">Primary</button>
          <button className="rounded-md border border-zinc-600 px-4 py-2 text-sm font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors">Secondary</button>
          <button className="rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-500 hover:bg-emerald-600/10 transition-colors">Success</button>
          <button className="rounded-md border border-rose-600 px-4 py-2 text-sm font-semibold text-rose-500 hover:bg-rose-600/10 transition-colors">Danger</button>
          <button className="rounded-md border border-amber-500 px-4 py-2 text-sm font-semibold text-amber-400 hover:bg-amber-500/10 transition-colors">Warning</button>
        </div>
      </motion.div>

      {/* Ghost / Soft Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">Ghost / Soft Variants</h2>
          <p className="text-xs text-zinc-500 mt-1">Minimal buttons for secondary actions and toolbars.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-md bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400 hover:bg-indigo-500/20 transition-colors">Indigo Soft</button>
          <button className="rounded-md bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors">Emerald Soft</button>
          <button className="rounded-md bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-400 hover:bg-rose-500/20 transition-colors">Rose Soft</button>
          <button className="rounded-md bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-400 hover:bg-amber-500/20 transition-colors">Amber Soft</button>
          <button className="rounded-md px-4 py-2 text-sm font-semibold text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">Plain Ghost</button>
        </div>
      </motion.div>

      {/* Icon Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">With Icons</h2>
          <p className="text-xs text-zinc-500 mt-1">Pair icons with labels for clarity and visual interest.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">
            <Plus className="h-4 w-4" /> Add New
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 transition-colors">
            <Download className="h-4 w-4" /> Download
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-400 hover:bg-rose-500/20 transition-colors">
            <Trash2 className="h-4 w-4" /> Delete
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600/10 border border-indigo-500/30 px-4 py-2 text-sm font-semibold text-indigo-400 hover:bg-indigo-600/20 transition-colors">
            Continue <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-colors">
            Options <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </motion.div>

      {/* States */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">State Variants</h2>
          <p className="text-xs text-zinc-500 mt-1">Loading, success, and disabled states for async actions.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button disabled className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white opacity-50 cursor-not-allowed">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading...
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white cursor-default">
            <Check className="h-4 w-4" /> Success
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white cursor-default">
            <X className="h-4 w-4" /> Failed
          </button>
          <button disabled className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-500 cursor-not-allowed">
            Disabled
          </button>
        </div>
      </motion.div>

      {/* Sizes */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-white">Sizes</h2>
          <p className="text-xs text-zinc-500 mt-1">Available in xs, sm, md, lg, and xl sizes.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded px-2 py-1 text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">XSmall</button>
          <button className="rounded-md px-3 py-1.5 text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">Small</button>
          <button className="rounded-md px-4 py-2 text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">Medium</button>
          <button className="rounded-lg px-5 py-2.5 text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">Large</button>
          <button className="rounded-xl px-6 py-3 text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">XLarge</button>
        </div>
      </motion.div>

    </div>
  )
}
