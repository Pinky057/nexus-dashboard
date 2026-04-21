"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, Check, Sun, Moon, Waves, Settings } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const THEMES = [
  { 
    id: "light", 
    name: "Light Mode", 
    desc: "Studio Light",
    icon: Sun, 
    gradient: "from-amber-400 to-orange-500 shadow-orange-500/20",
    bg: "bg-white",
    text: "text-zinc-900"
  },
  { 
    id: "dark", 
    name: "Dark Mode", 
    desc: "Midnight Zinc",
    icon: Moon, 
    gradient: "from-indigo-500 to-purple-600 shadow-purple-500/20",
    bg: "bg-zinc-950",
    text: "text-zinc-100"
  },
  { 
    id: "ocean", 
    name: "Ocean Mode", 
    desc: "Ocean Deep",
    icon: Waves, 
    gradient: "from-teal-400 to-cyan-500 shadow-cyan-500/20",
    bg: "bg-[#041616]",
    text: "text-[#e1fdf4]"
  },
]

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border-theme text-muted hover:text-primary transition-all hover:border-primary/50 shadow-sm"
      >
        <Palette className="h-5 w-5 transition-transform group-hover:rotate-12" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute right-0 mt-3 z-50 w-72 overflow-hidden rounded-3xl border border-border-theme bg-card shadow-2xl p-3"
            >
              <div className="px-4 py-3 flex items-center gap-2 mb-2">
                <Settings className="h-4 w-4 text-muted" />
                <p className="text-[11px] font-black uppercase tracking-widest text-muted">Active Theme</p>
              </div>
              
              <div className="space-y-2">
                {THEMES.map((t) => {
                  const Icon = t.icon
                  const isActive = theme === t.id
                  
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id)
                        setIsOpen(false)
                      }}
                      className={cn(
                        "flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all relative group",
                        isActive 
                          ? "bg-primary/5 ring-2 ring-primary shadow-sm" 
                          : "hover:bg-muted/50"
                      )}
                    >
                      <div className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform group-hover:scale-105",
                        t.gradient
                      )}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className={cn(
                          "text-sm font-black",
                          isActive ? "text-foreground" : "text-muted group-hover:text-foreground"
                        )}>
                          {t.name}
                        </p>
                        <p className="text-[11px] font-medium text-muted">{t.desc}</p>
                      </div>
                      {isActive && (
                        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                          <Check className="h-3.5 w-3.5 text-white stroke-[3px]" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="mt-2 p-2 rounded-xl bg-muted/30 border border-border-theme">
                <p className="text-[9px] font-bold text-muted uppercase tracking-tighter leading-tight text-center">
                  Theme switches background, elevation, and accent color globally.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
