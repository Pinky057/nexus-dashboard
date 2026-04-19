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

// Updated Navigation with Sub-items for "UI KIT" and "AUTH" as requested
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
    if (isCollapsed) setIsCollapsed(false) 
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
          width: isCollapsed ? 96 : 280,
          x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -300 : 0)
        }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col p-5 transition-all duration-300 ease-in-out lg:static lg:translate-x-0",
          !isOpen && "max-lg:-translate-x-full"
        )}
      >
        {/* The Floating Panel */}
        <div className="flex h-full flex-col rounded-[2.5rem] border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative group">
          
          {/* Collapse Toggle Button (Improved) */}
          <button 
            onClick={toggleCollapse}
            className="absolute -right-3 top-32 hidden lg:flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all z-20"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>

          {/* Header/Logo */}
          <div className="flex items-center gap-4 px-7 py-12">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 shadow-[0_0_25px_rgba(79,70,229,0.5)]">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            {!isCollapsed && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-black text-white tracking-tighter"
              >
                Synthex
              </motion.span>
            )}
            <button onClick={onClose} className="ml-auto lg:hidden text-zinc-500 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6 scrollbar-hide">
            {navigationGroups.map((group) => (
              <div key={group.title} className="space-y-2">
                {!isCollapsed && (
                  <p className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500/60">
                    {group.title}
                  </p>
                )}
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const hasSubItems = item.subItems && item.subItems.length > 0
                    const isExpanded = expandedMenus.includes(item.name)
                    const isActive = pathname === item.href || (item.subItems?.some(s => s.href === pathname))
                    
                    return (
                      <div key={item.name} className="space-y-1">
                        {hasSubItems ? (
                          <button
                            onClick={() => toggleMenu(item.name)}
                            className={cn(
                              "w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                              isActive && !isExpanded ? "bg-indigo-600/10 text-indigo-400" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100"
                            )}
                          >
                            <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-indigo-400" : "text-zinc-500 group-hover:text-zinc-300")} />
                            {!isCollapsed && (
                              <>
                                <span className="flex-1 text-left">{item.name}</span>
                                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isExpanded && "rotate-180")} />
                              </>
                            )}
                          </button>
                        ) : (
                          <Link
                            href={item.href || "#"}
                            onClick={onClose}
                            className={cn(
                              "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                              isActive 
                                ? "bg-indigo-600 text-white shadow-[0_10px_20px_-5px_rgba(79,70,229,0.3)]" 
                                : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100"
                            )}
                          >
                            <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300")} />
                            {!isCollapsed && <span>{item.name}</span>}
                          </Link>
                        )}

                        {/* Collapsible Sub-items */}
                        <AnimatePresence>
                          {hasSubItems && isExpanded && !isCollapsed && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-11 pr-2 space-y-1"
                            >
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={onClose}
                                  className={cn(
                                    "block py-2 text-xs font-medium transition-colors",
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
          <div className="mt-auto p-4">
            <div className={cn(
              "flex items-center gap-3 rounded-2xl bg-zinc-950/40 border border-zinc-800/50 p-2",
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
