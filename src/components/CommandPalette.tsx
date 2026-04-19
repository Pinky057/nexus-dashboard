"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  FileText, 
  Users, 
  Settings, 
  BarChart3, 
  Layout, 
  CreditCard,
  Plus,
  Zap,
  ArrowRight,
  Command as CommandIcon,
  X
} from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const PAGES = [
  { name: "Dashboard", href: "/", icon: Layout, category: "Pages" },
  { name: "Analytics", href: "/analytics", icon: BarChart3, category: "Pages" },
  { name: "Kanban Board", href: "/kanban", icon: Layout, category: "Pages" },
  { name: "Users", href: "/users", icon: Users, category: "Pages" },
  { name: "Transactions", href: "/transactions", icon: CreditCard, category: "Pages" },
  { name: "Settings", href: "/settings", icon: Settings, category: "Pages" },
]

const ACTIONS = [
  { name: "Create New User", action: () => console.log("New User"), icon: Plus, category: "Actions" },
  { name: "Generate AI Report", action: () => console.log("AI Report"), icon: Zap, category: "Actions" },
  { name: "Export Transactions", action: () => console.log("Export"), icon: FileText, category: "Actions" },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const router = useRouter()

  // Handle shortcut and global event
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
      if (e.key === "Escape") setIsOpen(false)
    }

    const toggleOpen = () => setIsOpen((open) => !open)

    document.addEventListener("keydown", down)
    window.addEventListener("toggle-command-palette", toggleOpen)
    
    return () => {
      document.removeEventListener("keydown", down)
      window.removeEventListener("toggle-command-palette", toggleOpen)
    }
  }, [])

  const filteredItems = [...PAGES, ...ACTIONS].filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (item: any) => {
    if (!item) return
    if (item.href) {
      router.push(item.href)
    } else if (item.action) {
      item.action()
    }
    setIsOpen(false)
    setQuery("")
  }

  // Reset selection index when query changes
  React.useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredItems.length === 0) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
    } else if (e.key === "Enter") {
      e.preventDefault()
      handleSelect(filteredItems[selectedIndex])
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl"
            >
              <div className="flex items-center border-b border-zinc-800 px-4">
                <Search className="h-5 w-5 text-zinc-500" />
                <input
                  autoFocus
                  className="flex h-14 w-full bg-transparent px-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="flex items-center gap-1 rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-bold text-zinc-500 border border-zinc-700">
                  ESC
                </div>
              </div>

              <div className="max-h-[400px] overflow-y-auto p-2 scrollbar-hide">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-sm text-zinc-500">No results found for "{query}"</p>
                  </div>
                ) : (
                  <div className="space-y-4 pb-2">
                    <div className="space-y-1">
                      {filteredItems.map((item, index) => (
                        <div
                          key={item.name}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={cn(
                            "group flex items-center justify-between rounded-xl px-3 py-3 cursor-pointer transition-all",
                            index === selectedIndex ? "bg-indigo-600/10 ring-1 ring-indigo-500/20" : "hover:bg-zinc-800/50"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 ring-1 ring-zinc-700 transition-colors",
                              index === selectedIndex ? "bg-indigo-600/20 ring-indigo-500/30 text-indigo-400" : "text-zinc-400"
                            )}>
                              <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className={cn(
                                "text-sm font-medium transition-colors",
                                index === selectedIndex ? "text-zinc-100" : "text-zinc-400"
                              )}>
                                {item.name}
                              </p>
                              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
                                {item.category}
                              </p>
                            </div>
                          </div>
                          {index === selectedIndex && (
                            <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase tracking-widest animate-in fade-in slide-in-from-right-1">
                              <span>Select</span>
                              <ArrowRight className="h-3 w-3" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-950/50 px-4 py-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    <div className="rounded bg-zinc-800 p-1 ring-1 ring-zinc-700">
                      <ArrowRight className="h-2.5 w-2.5 rotate-90" />
                    </div>
                    <span>Navigate</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    <div className="rounded bg-zinc-800 p-1 ring-1 ring-zinc-700">
                      <CommandIcon className="h-2.5 w-2.5" />
                    </div>
                    <span>Enter</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-indigo-400 uppercase tracking-widest font-bold">
                  <Sparkles className="h-3 w-3" />
                  <span>AI Powered</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
