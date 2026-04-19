"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, Users, Settings, BarChart3, CreditCard, 
  Box, LogIn, MousePointerClick, FileText, Tags, 
  Table2, LineChart, UserPlus, KeyRound, X, 
  ChevronDown, Zap, Search, Bell, Menu
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"

const navigationGroups = [
  {
    title: "Intelligence",
    items: [
      { name: "Command Center", href: "/", icon: LayoutDashboard },
      { name: "Live Analytics", href: "/analytics", icon: BarChart3 },
      { name: "AI Insights", href: "/insights", icon: Zap, pro: true },
    ]
  },
  {
    title: "Management",
    items: [
      { name: "Active Users", href: "/users", icon: Users },
      { name: "Token Usage", href: "/products", icon: Box },
      { name: "Transactions", href: "/transactions", icon: CreditCard },
      { name: "Settings", href: "/settings", icon: Settings },
    ]
  },
  {
    title: "UI System",
    items: [
      { name: "Buttons", href: "/components/buttons", icon: MousePointerClick },
      { name: "Forms", href: "/components/forms", icon: FileText },
      { name: "Badges", href: "/components/badges", icon: Tags },
      { name: "Tables", href: "/components/tables", icon: Table2 },
      { name: "Charts", href: "/components/charts", icon: LineChart },
    ]
  },
  {
    title: "Authentication",
    items: [
      { name: "Login", href: "/login", icon: LogIn },
      { name: "Register", href: "/register", icon: UserPlus },
      { name: "Forgot Password", href: "/forgot-password", icon: KeyRound },
    ]
  }
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-[260px] flex-col overflow-hidden bg-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl lg:m-4 lg:shadow-2xl lg:shadow-indigo-500/10 transition-all duration-300">
      {/* Workspace Switcher */}
      <div className="p-4 shrink-0 border-b border-zinc-800/50">
        <button className="flex items-center justify-between w-full p-2 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800 transition-all group">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 font-bold text-white shadow-lg shadow-indigo-500/20">
              N
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-zinc-100 tracking-tight leading-none mb-0.5">Nexus AI</p>
              <p className="text-[10px] text-zinc-500 font-medium">Free Workspace</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-6 mt-2">
        {navigationGroups.map((group) => (
          <div key={group.title}>
            <p className="px-3 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500/80 mb-3">
              {group.title}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-zinc-100 bg-white/5 shadow-[0_0_20px_-12px_rgba(255,255,255,0.2)]"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                    )}
                  >
                    {/* Active Glow Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute left-0 w-1 h-5 bg-indigo-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <item.icon
                      className={cn(
                        "h-5 w-5 flex-shrink-0 transition-all duration-300",
                        isActive ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]" : "text-zinc-500 group-hover:text-zinc-300"
                      )}
                    />
                    <span className="flex-1">{item.name}</span>
                    
                    {item.pro && (
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 tracking-tighter">
                        PRO
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Profile Card */}
      <div className="p-3 shrink-0 border-t border-zinc-800/50 bg-zinc-950/30">
        <div className="group flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg ring-2 ring-zinc-950">
                IP
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow-sm" />
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-xs font-semibold text-zinc-100 truncate">Ishrat Pinky</p>
              <p className="text-[10px] text-zinc-500 truncate">Pro Plan Admin</p>
            </div>
          </div>
          <Settings className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 group-hover:rotate-45 transition-all" />
        </div>
      </div>
    </div>
  )
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:shrink-0 h-screen sticky top-0 py-2">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
              onClick={onClose}
            />
            <motion.div
              key="panel"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed inset-y-0 left-0 z-50 p-4 w-[300px] lg:hidden"
            >
              <SidebarContent onClose={onClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
