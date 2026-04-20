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
  X,
  Sparkles
} from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/Toast"

const PAGES = [
  { name: "Dashboard", href: "/", icon: Layout, category: "Pages" },
  { name: "Analytics", href: "/analytics", icon: BarChart3, category: "Pages" },
  { name: "Kanban Board", href: "/kanban", icon: Layout, category: "Pages" },
  { name: "Users", href: "/users", icon: Users, category: "Pages" },
  { name: "Transactions", href: "/transactions", icon: CreditCard, category: "Pages" },
  { name: "Settings", href: "/settings", icon: Settings, category: "Pages" },
]

interface CommandItem {
  name: string
  href?: string
  action?: ((toast: any) => void) | (() => void)
  icon: any
  category: string
}

type ToastFunction = (props: { title: string; description?: string; type?: "success" | "error" | "info" | "loading" }) => void

const ACTIONS = (toast: ToastFunction): CommandItem[] => [
  { 
    name: "Create New User", 
    action: () => toast({ 
      title: "User Management", 
      description: "Redirecting to user creation wizard...",
      type: "loading"
    }), 
    icon: Plus, 
    category: "Actions" 
  },
  { 
    name: "Generate AI Report", 
    action: () => toast({ 
      title: "AI Analysis Started", 
      description: "Synthesizing latest revenue data into a PDF report.",
      type: "success"
    }), 
    icon: Zap, 
    category: "Actions" 
  },
  { 
    name: "Export Transactions", 
    action: () => toast({ 
      title: "Export Initiated", 
      description: "Your CSV file will be ready in a few seconds.",
      type: "info"
    }), 
    icon: FileText, 
    category: "Actions" 
  },
]

const AI_SUGGESTIONS: CommandItem[] = [
  { name: "Analyze Churn Trends", icon: Sparkles, category: "AI Suggestion", action: (toast: ToastFunction) => toast({ title: "AI Insight", description: "Analyzing churn patterns for the last 30 days...", type: "loading" }) },
  { name: "Optimize Token Usage", icon: Sparkles, category: "AI Suggestion", action: (toast: ToastFunction) => toast({ title: "AI Insight", description: "Identifying high-usage endpoints for optimization.", type: "success" }) },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const router = useRouter()
  const { toast } = useToast()

  const actions = ACTIONS(toast)

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

  const filteredItems = [...PAGES, ...actions, ...AI_SUGGESTIONS].filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (item: CommandItem) => {
    if (!item) return
    if (item.href) {
      router.push(item.href)
    } else if (item.action) {
      if (typeof item.action === 'function') {
        if (item.category === "AI Suggestion") {
          (item.action as (toast: ToastFunction) => void)(toast)
        } else {
          (item.action as () => void)()
        }
      }
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
              className="absolute inset-0 bg-zinc-950/60 dark:bg-zinc-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl"
            >
              <div className="flex items-center border-b border-zinc-100 dark:border-zinc-800 px-4">
                <Search className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
                <input
                  autoFocus
                  className="flex h-14 w-full bg-transparent px-4 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="flex items-center gap-1 rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px] font-bold text-zinc-500 border border-zinc-200 dark:border-zinc-700">
                  ESC
                </div>
              </div>

              <div className="max-h-[400px] overflow-y-auto p-2 scrollbar-hide">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-sm text-zinc-500">No results found for &quot;{query}&quot;</p>
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
                            index === selectedIndex ? "bg-indigo-600/10 ring-1 ring-indigo-500/20" : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-50 dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700 transition-colors",
                              index === selectedIndex ? "bg-indigo-600/20 ring-indigo-500/30 text-indigo-600 dark:text-indigo-400" : "text-zinc-400 dark:text-zinc-500"
                            )}>
                              <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className={cn(
                                "text-sm font-semibold transition-colors",
                                index === selectedIndex ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400"
                              )}>
                                {item.name}
                              </p>
                              <div className="flex items-center gap-2">
                                <p className={cn(
                                  "text-[10px] uppercase tracking-widest font-black",
                                  item.category === "AI Suggestion" ? "text-indigo-500" : "text-zinc-400 dark:text-zinc-600"
                                )}>
                                  {item.category}
                                </p>
                                {item.category === "AI Suggestion" && (
                                  <div className="h-1 w-1 rounded-full bg-indigo-400 animate-pulse" />
                                )}
                              </div>
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

              <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 px-4 py-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-black">
                    <div className="rounded bg-zinc-200 dark:bg-zinc-800 p-1 ring-1 ring-zinc-300 dark:ring-zinc-700">
                      <ArrowRight className="h-2.5 w-2.5 rotate-90" />
                    </div>
                    <span>Navigate</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-black">
                    <div className="rounded bg-zinc-200 dark:bg-zinc-800 p-1 ring-1 ring-zinc-300 dark:ring-zinc-700">
                      <CommandIcon className="h-2.5 w-2.5" />
                    </div>
                    <span>Enter</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-indigo-500 dark:text-indigo-400 uppercase tracking-widest font-black">
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
