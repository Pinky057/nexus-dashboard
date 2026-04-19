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
  Sparkles,
  ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navigationGroups = [
  {
    title: "Main",
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
      { name: "Analytics", href: "/analytics", icon: BarChart3 },
      { name: "Kanban", href: "/kanban", icon: Table2 },
    ]
  },
  {
    title: "Management",
    items: [
      { 
        name: "Products", 
        icon: Box,
        subItems: [
          { name: "All Products", href: "/products" },
          { name: "Categories", href: "#" },
          { name: "Inventory", href: "#" },
        ]
      },
      { name: "Users", href: "/users", icon: Users },
      { name: "Transactions", href: "/transactions", icon: CreditCard },
    ]
  },
  {
    title: "Resources",
    items: [
      { 
        name: "UI Kit", 
        icon: MousePointerClick,
        subItems: [
          { name: "Buttons", href: "/components/buttons" },
          { name: "Forms", href: "/components/forms" },
          { name: "Badges", href: "/components/badges" },
          { name: "Tables", href: "/components/tables" },
          { name: "Charts", href: "/components/charts" },
        ]
      },
      { 
        name: "Auth", 
        icon: KeyRound,
        subItems: [
          { name: "Login", href: "/login" },
          { name: "Register", href: "/register" },
          { name: "Recovery", href: "/forgot-password" },
        ]
      },
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
  const [expandedMenus, setExpandedMenus] = React.useState<string[]>([])
  const pathname = usePathname()

  const toggleMenu = (name: string) => {
    if (isCollapsed) return // Don't expand/collapse in slim mode, flyout will handle it
    setExpandedMenus(prev => 
      prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]
    )
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
    setExpandedMenus([])
  }

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
          width: isCollapsed ? 100 : 280,
          x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -300 : 0)
        }}
        transition={{ type: "spring", stiffness: 250, damping: 32 }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col p-5 lg:static lg:translate-x-0 h-full",
          !isOpen && "max-lg:-translate-x-full"
        )}
      >
        {/* The Outer Panel Container (NO overflow-hidden here so toggle can stick out) */}
        <div className="flex h-full flex-col relative">
          
          {/* Collapse Toggle Button (Now Outside the inner container to avoid clipping) */}
          <button 
            onClick={toggleCollapse}
            className={cn(
              "absolute top-28 hidden lg:flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all z-[60] shadow-2xl",
              isCollapsed ? "-right-4" : "right-4"
            )}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>

          {/* The Actual Sidebar Box */}
          <div className="flex h-full flex-col rounded-[2.5rem] border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden">
            
            {/* Header/Logo */}
            <div className={cn(
              "flex flex-col items-center gap-4 py-16 transition-all",
              isCollapsed ? "px-0" : "px-8"
            )}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 shadow-[0_0_40px_rgba(79,70,229,0.4)]">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-black text-white tracking-tighter"
                >
                  Synthex
                </motion.span>
              )}
              <button onClick={onClose} className="ml-auto lg:hidden text-zinc-500 hover:text-white absolute right-10 top-10">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-12 scrollbar-hide">
              {navigationGroups.map((group) => (
                <div key={group.title} className="space-y-6">
                  {!isCollapsed && (
                    <p className="px-4 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500/30">
                      {group.title}
                    </p>
                  )}
                  <div className="space-y-3">
                    {group.items.map((item) => {
                      const hasSubItems = item.subItems && item.subItems.length > 0
                      const isExpanded = expandedMenus.includes(item.name)
                      const isActive = pathname === item.href || (item.subItems?.some(s => s.href === pathname))
                      
                      return (
                        <div key={item.name} className="relative group/item">
                          {hasSubItems ? (
                            <div className="relative">
                              <button
                                onClick={() => toggleMenu(item.name)}
                                className={cn(
                                  "w-full flex items-center gap-4 rounded-[1.25rem] py-4 text-sm font-semibold transition-all duration-300",
                                  isCollapsed ? "justify-center px-0" : "px-5",
                                  isActive && !isExpanded ? "bg-indigo-600/10 text-indigo-400" : "text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-100"
                                )}
                              >
                                <item.icon className={cn("h-6 w-6 shrink-0 transition-transform group-hover/item:scale-110", isActive ? "text-indigo-400" : "text-zinc-500 group-hover/item:text-indigo-300")} />
                                {!isCollapsed && (
                                  <>
                                    <span className="flex-1 text-left">{item.name}</span>
                                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isExpanded && "rotate-180")} />
                                  </>
                                )}
                              </button>

                              {/* Collapsed Flyout (FLYOUT MODE) */}
                              {isCollapsed && (
                                <div className="absolute left-[calc(100%+1.5rem)] top-0 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-300 z-[100] translate-x-2 group-hover/item:translate-x-0">
                                  <div className="bg-zinc-900/95 border border-zinc-800 backdrop-blur-2xl rounded-2xl p-2 w-48 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                    <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 border-b border-zinc-800 mb-2">
                                      {item.name}
                                    </div>
                                    <div className="space-y-1">
                                      {item.subItems.map((sub) => (
                                        <Link
                                          key={sub.name}
                                          href={sub.href}
                                          className={cn(
                                            "block px-4 py-2.5 rounded-xl text-xs font-semibold transition-all",
                                            pathname === sub.href 
                                              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                                              : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                                          )}
                                        >
                                          {sub.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={item.href || "#"}
                              className={cn(
                                "group flex items-center gap-4 rounded-[1.25rem] py-4 text-sm font-semibold transition-all duration-300 relative",
                                isCollapsed ? "justify-center px-0" : "px-5",
                                isActive 
                                  ? "bg-indigo-600 text-white shadow-[0_15px_30px_-5px_rgba(79,70,229,0.4)]" 
                                  : "text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-100"
                              )}
                            >
                              <item.icon className={cn("h-6 w-6 shrink-0 transition-transform group-hover/item:scale-110", isActive ? "text-white" : "text-zinc-500 group-hover/item:text-indigo-300")} />
                              {!isCollapsed && <span>{item.name}</span>}
                              
                              {/* Simple Tooltip for Single Items */}
                              {isCollapsed && (
                                <div className="absolute left-[calc(100%+1.5rem)] invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-300 z-[100] translate-x-2 group-hover/item:translate-x-0">
                                  <div className="bg-zinc-900 border border-zinc-800 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl">
                                    {item.name}
                                  </div>
                                </div>
                              )}
                            </Link>
                          )}

                          {/* Expanded sub-items (INLINE MODE) */}
                          <AnimatePresence>
                            {hasSubItems && isExpanded && !isCollapsed && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-14 pr-2 space-y-2 mt-1"
                              >
                                {item.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className={cn(
                                      "block py-2 text-[13px] font-medium transition-colors",
                                      pathname === sub.href ? "text-indigo-400" : "text-zinc-500 hover:text-zinc-200"
                                    )}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* User Profile Card */}
            <div className="mt-auto p-6">
              <div className={cn(
                "flex items-center gap-4 rounded-3xl bg-zinc-950/60 border border-zinc-800/50 p-2.5 shadow-inner transition-all",
                isCollapsed ? "justify-center px-0" : "px-4"
              )}>
                <div className="relative group/avatar cursor-pointer">
                  <img 
                    src="https://ui-avatars.com/api/?name=Ummey+Habiba+Pinky&background=6366f1&color=fff" 
                    alt="Profile"
                    className="h-10 w-10 rounded-2xl border border-zinc-800 shrink-0 transition-transform group-hover/avatar:scale-105"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow-sm" />
                </div>
                {!isCollapsed && (
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-bold text-white truncate leading-tight">U.H. Pinky</p>
                    <p className="text-[11px] text-zinc-500 truncate mt-0.5">Administrator</p>
                  </div>
                )}
                {!isCollapsed && (
                  <button className="text-zinc-600 hover:text-rose-400 transition-colors p-1.5">
                    <LogOut className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </motion.aside>
    </>
  )
}
