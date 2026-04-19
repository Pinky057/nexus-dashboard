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

      <motion.aside
        initial={false}
        animate={{ 
          width: isCollapsed ? 90 : 280,
          x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -300 : 0)
        }}
        transition={{ type: "spring", stiffness: 250, damping: 32 }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col p-4 lg:static lg:translate-x-0 h-full scrollbar-hide",
          !isOpen && "max-lg:-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col relative scrollbar-hide">
          
          {/* Outward Toggle Tab */}
          <button 
            onClick={toggleCollapse}
            className={cn(
              "absolute top-8 hidden lg:flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all z-[60] shadow-2xl",
              isCollapsed ? "-right-4" : "right-4"
            )}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>

          {/* Sidebar Panel */}
          <div className="flex h-full flex-col rounded-[2.5rem] border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-visible scrollbar-hide">
            
            {/* Logo Section (More Compact) */}
            <div className={cn(
              "flex flex-col items-center py-10 transition-all",
              isCollapsed ? "px-0" : "px-8"
            )}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl font-black text-white tracking-tighter mt-3"
                >
                  Synthex
                </motion.span>
              )}
            </div>

            {/* Navigation (Reduced Spacing) */}
            <div className="flex-1 overflow-y-auto px-3 space-y-8 scrollbar-hide">
              {navigationGroups.map((group) => (
                <div key={group.title} className="space-y-4">
                  {!isCollapsed && (
                    <p className="px-5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500/20">
                      {group.title}
                    </p>
                  )}
                  <div className="space-y-2">
                    {group.items.map((item) => {
                      const hasSubItems = item.subItems && item.subItems.length > 0
                      const isExpanded = expandedMenus.includes(item.name)
                      const isActive = pathname === item.href || (item.subItems?.some(s => s.href === pathname))
                      
                      return (
                        <div key={item.name} className="relative group/item px-1">
                          {hasSubItems ? (
                            <div className="relative">
                              <button
                                onClick={() => toggleMenu(item.name)}
                                className={cn(
                                  "w-full flex items-center gap-3 rounded-2xl py-3.5 transition-all duration-300",
                                  isCollapsed ? "justify-center" : "px-4",
                                  isActive && !isExpanded 
                                    ? "bg-indigo-600/10 text-indigo-400" 
                                    : "text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/40"
                                )}
                              >
                                <item.icon className={cn("h-5 w-5 shrink-0 transition-all", isActive ? "text-indigo-400" : "text-zinc-500 group-hover/item:text-indigo-400")} />
                                {!isCollapsed && (
                                  <>
                                    <span className="flex-1 text-left text-sm font-semibold">{item.name}</span>
                                    <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", isExpanded && "rotate-180")} />
                                  </>
                                )}
                              </button>

                              {/* Flyout */}
                              {isCollapsed && (
                                <div className="absolute left-[calc(100%+1.5rem)] top-0 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-300 z-[100] translate-x-2 group-hover/item:translate-x-0">
                                  <div className="bg-zinc-900 border border-zinc-800 backdrop-blur-2xl rounded-2xl p-2 w-48 shadow-2xl">
                                    <div className="px-3 py-2 text-[10px] font-black tracking-widest text-zinc-500 uppercase">
                                      {item.name}
                                    </div>
                                    <div className="space-y-1">
                                      {item.subItems.map((sub) => (
                                        <Link
                                          key={sub.name}
                                          href={sub.href}
                                          className={cn(
                                            "block px-4 py-2 rounded-xl text-xs font-bold transition-all",
                                            pathname === sub.href 
                                              ? "bg-indigo-600 text-white shadow-lg" 
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
                                "group/link flex items-center gap-3 rounded-2xl py-3.5 transition-all duration-300 relative",
                                isCollapsed ? "justify-center" : "px-4",
                                isActive 
                                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                                  : "text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/40"
                              )}
                            >
                              <item.icon className={cn("h-5 w-5 shrink-0 transition-all", isActive ? "text-white" : "text-zinc-500 group-hover/link:text-indigo-400")} />
                              {!isCollapsed && <span className="text-sm font-bold">{item.name}</span>}
                              
                              {/* Tooltip */}
                              {isCollapsed && (
                                <div className="absolute left-[calc(100%+1.5rem)] invisible opacity-0 group-hover/link:visible group-hover/link:opacity-100 transition-all duration-300 z-[100] translate-x-2 group-hover/link:translate-x-0">
                                  <div className="bg-zinc-900 border border-zinc-800 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl">
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
                                className="overflow-hidden pl-12 pr-2 space-y-2 mt-1"
                              >
                                {item.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className={cn(
                                      "block py-2 text-[13px] font-bold transition-all",
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

            {/* Profile Section (More Compact) */}
            <div className="mt-auto p-6">
              <div className={cn(
                "flex items-center gap-3 transition-all",
                isCollapsed ? "justify-center" : "px-2"
              )}>
                <div className="relative group/avatar cursor-pointer">
                  <img 
                    src="https://ui-avatars.com/api/?name=Ummey+Habiba+Pinky&background=6366f1&color=fff" 
                    alt="Profile"
                    className="h-10 w-10 rounded-full border-2 border-zinc-800/50 shrink-0 transition-transform group-hover/avatar:scale-110"
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-zinc-950" />
                </div>
                {!isCollapsed && (
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-black text-white truncate">Pinky UI</p>
                    <p className="text-[10px] font-bold text-zinc-600 truncate uppercase tracking-widest">Admin</p>
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
