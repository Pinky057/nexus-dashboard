"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Command, Layout, Users, Settings, CreditCard, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export function CommandPalette() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const items = [
    { icon: Layout, label: "Dashboard", href: "/" },
    { icon: Users, label: "User Management", href: "/users" },
    { icon: CreditCard, label: "Transactions", href: "/transactions" },
    { icon: Sparkles, label: "AI Hub", href: "/ai-hub" },
    { icon: Settings, label: "Settings", href: "#", pro: true },
  ]

  const filteredItems = items.filter(item => 
    item.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-zinc-950/60 backdrop-blur-md z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-xl bg-zinc-900/90 border border-white/10 rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto ring-1 ring-white/10 mx-4"
            >
              <div className="relative border-b border-white/5">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
                <input
                  autoFocus
                  className="w-full bg-transparent pl-16 pr-16 py-6 text-lg font-black text-white placeholder:text-muted/40 outline-none uppercase tracking-widest"
                  placeholder="SEARCH EVERYTHING..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <div className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-black text-muted uppercase">ESC</div>
                </div>
              </div>

              <div className="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                <div className="px-4 py-2">
                  <p className="text-[10px] font-black text-muted/60 uppercase tracking-[0.2em] mb-3">Navigation</p>
                  <div className="space-y-1">
                    {filteredItems.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (item.pro) {
                            window.dispatchEvent(new CustomEvent('open-pro-modal', { detail: { feature: item.label } }));
                          } else {
                            router.push(item.href);
                          }
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-white/5 transition-all group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-500/50 transition-all">
                            <item.icon className="h-5 w-5 text-muted group-hover:text-primary-500 transition-colors" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-white uppercase tracking-tight">{item.label}</p>
                            {item.pro && <span className="text-[8px] font-black text-primary-500 uppercase tracking-widest px-1.5 py-0.5 rounded bg-primary-500/10 border border-primary-500/20">PRO</span>}
                          </div>
                        </div>
                        <Command className="h-4 w-4 text-muted/20 group-hover:text-primary-500/40 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>

                {search.length > 0 && filteredItems.length === 0 && (
                  <div className="px-4 py-12 text-center">
                    <p className="text-sm font-bold text-muted uppercase tracking-widest italic">No results found for &quot;{search}&quot;</p>
                  </div>
                )}
              </div>

              <div className="bg-white/5 px-8 py-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-black text-muted">↑↓</div>
                    <span className="text-[9px] font-black text-muted/60 uppercase tracking-widest">Navigate</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-black text-muted">↵</div>
                    <span className="text-[9px] font-black text-muted/60 uppercase tracking-widest">Select</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3 w-3 text-primary-500" />
                  <span className="text-[9px] font-black text-primary-500 uppercase tracking-widest">Powered by Synthex AI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
