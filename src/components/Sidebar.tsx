"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  CreditCard, 
  Box, 
  LogIn, 
  MousePointerClick, 
  FileText, 
  Tags, 
  Table2, 
  LineChart, 
  UserPlus, 
  KeyRound, 
  X, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navigationGroups = [
  {
    title: "Apps",
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
      { name: "Analytics", href: "/analytics", icon: BarChart3 },
      { name: "Kanban", href: "/kanban", icon: Table2 },
      { name: "Users", href: "/users", icon: Users },
      { name: "Products", href: "/products", icon: Box },
    ]
  },
  {
    title: "System",
    items: [
      { name: "Payments", href: "/transactions", icon: CreditCard },
      { name: "UI Kit", href: "/components/buttons", icon: MousePointerClick },
      { name: "Settings", href: "/settings", icon: Settings },
    ]
  }
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const pathname = usePathname()

  const sidebarWidth = isCollapsed ? "w-20" : "w-64"

  const toggleCollapse = () => setIsCollapsed(!isCollapsed)

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        initial={false}
        animate={{ 
          width: isCollapsed ? 80 : 256,
          x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -300 : 0)
        }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col p-4 transition-all duration-300 ease-in-out lg:static lg:translate-x-0",
          !isOpen && "max-lg:-translate-x-full"
        )}
      >
        {/* The Floating Panel */}
        <div className="flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl shadow-2xl overflow-hidden relative group">
          
          {/* Collapse Toggle Button (Desktop only) */}
          <button 
            onClick={toggleCollapse}
            className="absolute -right-3 top-20 hidden lg:flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all z-10 shadow-lg"
          >
            {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
          </button>

          {/* Header/Logo */}
          <div className="flex items-center gap-3 px-6 py-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            {!isCollapsed && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-black text-white tracking-tighter"
              >
                Synthex
              </motion.span>
            )}
            {/* Mobile Close Button */}
            <button onClick={onClose} className="ml-auto lg:hidden text-zinc-500 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-8 scrollbar-hide">
            {navigationGroups.map((group) => (
              <div key={group.title} className="space-y-2">
                {!isCollapsed && (
                  <p className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500/80">
                    {group.title}
                  </p>
                )}
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 relative",
                          isActive 
                            ? "bg-indigo-600 text-white shadow-[0_10px_20px_-5px_rgba(79,70,229,0.3)]" 
                            : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100"
                        )}
                      >
                        <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300")} />
                        {!isCollapsed && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="whitespace-nowrap"
                          >
                            {item.name}
                          </motion.span>
                        )}
                        {/* Hover Tooltip for Collapsed State */}
                        {isCollapsed && (
                          <div className="absolute left-full ml-4 hidden group-hover:block z-50">
                            <div className="bg-zinc-800 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-zinc-700 whitespace-nowrap shadow-xl">
                              {item.name}
                            </div>
                          </div>
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* User Profile Card */}
          <div className="mt-auto p-4">
            <div className={cn(
              "flex items-center gap-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/50 p-2 transition-all",
              isCollapsed ? "justify-center px-0" : "px-3"
            )}>
              <img 
                src="https://ui-avatars.com/api/?name=Ummey+Habiba+Pinky&background=6366f1&color=fff" 
                alt="Profile"
                className="h-9 w-9 rounded-xl border border-zinc-800 shrink-0"
              />
              {!isCollapsed && (
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white truncate">U.H. Pinky</p>
                  <p className="text-[10px] text-zinc-500 truncate">Admin Account</p>
                </div>
              )}
              {!isCollapsed && (
                <button className="text-zinc-500 hover:text-rose-400 transition-colors">
                  <LogOut className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

        </div>
      </motion.aside>
    </>
  )
}
