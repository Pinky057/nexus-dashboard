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
  ChevronDown,
  Search
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
    if (isCollapsed) return
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
          "fixed inset-y-0 left-0 z-50 flex flex-col p-5 lg:static lg:translate-x-0 h-full scrollbar-hide",
          !isOpen && "max-lg:-translate-x-full"
        )}
      >
        {/* The Outer Panel Container */}
        <div className="flex h-full flex-col relative scrollbar-hide">
          
          {/* Collapse Toggle Button (Improved Outward Position) */}
          <button 
            onClick={toggleCollapse}
            className={cn(
              "absolute top-10 hidden lg:flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all z-[60] shadow-2xl",
              isCollapsed ? "-right-4.5" : "right-4"
            )}
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>

          {/* The Actual Sidebar Box */}
          <div className="flex h-full flex-col rounded-[2.5rem] border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-visible scrollbar-hide">
            
            {/* Logo Section */}
            <div className={cn(
              "flex flex-col items-center py-16 transition-all",
              isCollapsed ? "px-0" : "px-8"
            )}>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                <Sparkles className="h-9 w-9 text-white" />
              </div>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-black text-white tracking-tighter mt-4"
                >
                  Synthex
                </motion.span>
              )}
            </div>

            {/* Search Bar (Doclines style) */}
            <div className={cn(
              "px-6 mb-10 flex justify-center",
              isCollapsed ? "px-0" : "px-8"
            )}>
              <div className={cn(
                "flex items-center gap-3 bg-zinc-950/40 border border-zinc-800/50 rounded-2xl transition-all cursor-pointer hover:border-zinc-700",
                isCollapsed ? "h-12 w-12 justify-center" : "h-12 w-full px-4"
              )}>
                <Search className="h-5 w-5 text-zinc-500" />
                {!isCollapsed && <span className="text-xs font-medium text-zinc-500">Search...</span>}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-4 space-y-14 scrollbar-hide">
              {navigationGroups.map((group) => (
                <div key={group.title} className="space-y-6">
                  {!isCollapsed && (
                    <p className="px-5 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500/20">
                      {group.title}
                    </p>
                  )}
                  <div className="space-y-4">
                    {group.items.map((item) => {
                      const hasSubItems = item.subItems && item.subItems.length > 0
                      const isExpanded = expandedMenus.includes(item.name)
                      const isActive = pathname === item.href || (item.subItems?.some(s => s.href === pathname))
                      
                      return (
                        <div key={item.name} className="relative group/item px-2">
                          {hasSubItems ? (
                            <div className="relative">
                              <button
                                onClick={() => toggleMenu(item.name)}
                                className={cn(
                                  "w-full flex items-center gap-4 rounded-2xl py-4 transition-all duration-300",
                                  isCollapsed ? "justify-center" : "px-5",
                                  isActive && !isExpanded 
                                    ? "bg-emerald-500/10 text-emerald-400" 
                                    : "text-zinc-500 hover:text-zinc-100"
                                )}
                              >
                                <item.icon className={cn("h-6 w-6 shrink-0 transition-all", isActive ? "text-emerald-400" : "text-zinc-500 group-hover/item:text-zinc-100")} />
                                {!isCollapsed && (
                                  <>
                                    <span className="flex-1 text-left text-sm font-semibold">{item.name}</span>
                                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isExpanded && "rotate-180")} />
                                  </>
                                )}
                              </button>

                              {/* Collapsed Flyout */}
                              {isCollapsed && (
                                <div className="absolute left-[calc(100%+2rem)] top-0 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-300 z-[100] translate-x-2 group-hover/item:translate-x-0">
                                  <div className="bg-zinc-900 border border-zinc-800 backdrop-blur-2xl rounded-3xl p-3 w-56 shadow-[0_30px_70px_rgba(0,0,0,0.7)]">
                                    <div className="px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800/50 mb-3">
                                      {item.name}
                                    </div>
                                    <div className="space-y-1.5">
                                      {item.subItems.map((sub) => (
                                        <Link
                                          key={sub.name}
                                          href={sub.href}
                                          className={cn(
                                            "block px-5 py-3 rounded-2xl text-[13px] font-bold transition-all",
                                            pathname === sub.href 
                                              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                                              : "text-zinc-400 hover:bg-zinc-800/60 hover:text-white"
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
                                "group/link flex items-center gap-4 rounded-2xl py-4 transition-all duration-300 relative",
                                isCollapsed ? "justify-center" : "px-5",
                                isActive 
                                  ? "bg-emerald-500 text-white shadow-[0_15px_35px_-5px_rgba(16,185,129,0.4)] scale-[1.02]" 
                                  : "text-zinc-500 hover:text-zinc-100"
                              )}
                            >
                              <item.icon className={cn("h-6 w-6 shrink-0 transition-all", isActive ? "text-white" : "text-zinc-500 group-hover/link:text-zinc-100")} />
                              {!isCollapsed && <span className="text-sm font-bold">{item.name}</span>}
                              
                              {/* Simple Tooltip */}
                              {isCollapsed && (
                                <div className="absolute left-[calc(100%+2rem)] invisible opacity-0 group-hover/link:visible group-hover/link:opacity-100 transition-all duration-300 z-[100] translate-x-2 group-hover/link:translate-x-0">
                                  <div className="bg-zinc-900 border border-zinc-800 text-white text-[11px] font-black uppercase tracking-widest px-5 py-2.5 rounded-2xl whitespace-nowrap shadow-2xl">
                                    {item.name}
                                  </div>
                                </div>
                              )}
                            </Link>
                          )}

                          <AnimatePresence>
                            {hasSubItems && isExpanded && !isCollapsed && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-16 pr-2 space-y-3 mt-2"
                              >
                                {item.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className={cn(
                                      "block py-2.5 text-[14px] font-bold transition-all",
                                      pathname === sub.href ? "text-emerald-400" : "text-zinc-500 hover:text-zinc-200"
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
            <div className="mt-auto p-8">
              <div className={cn(
                "flex items-center gap-4 transition-all",
                isCollapsed ? "justify-center" : "px-4"
              )}>
                <div className="relative cursor-pointer group/avatar">
                  <img 
                    src="https://ui-avatars.com/api/?name=Ummey+Habiba+Pinky&background=10b981&color=fff" 
                    alt="Profile"
                    className="h-12 w-12 rounded-full border-2 border-zinc-800/50 shadow-2xl transition-transform group-hover/avatar:scale-110"
                  />
                  <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-emerald-500 border-4 border-zinc-950 shadow-2xl" />
                </div>
                {!isCollapsed && (
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-black text-white truncate">U.H. Pinky</p>
                    <p className="text-[11px] font-bold text-zinc-600 truncate mt-0.5 uppercase tracking-wider">Premium Admin</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </motion.aside>
    </>
  )
}
