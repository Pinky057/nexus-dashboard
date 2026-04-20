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
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"

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
  const [expandedMenu, setExpandedMenu] = React.useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = (name: string) => {
    if (isCollapsed) return
    setExpandedMenu(prev => prev === name ? null : name)
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
    setExpandedMenu(null)
  }

  const sidebarTransition = {
    type: "spring",
    stiffness: 220,
    damping: 32,
    mass: 0.8,
    restDelta: 0.001
  } as const

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ 
          width: isCollapsed ? 100 : 280,
          x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -300 : 0)
        }}
        transition={sidebarTransition}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col p-4 lg:p-6 lg:static lg:translate-x-0 h-full scrollbar-hide will-change-[width]",
          !isOpen && "max-lg:-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col relative scrollbar-hide">
          
          {/* Outward Toggle Tab */}
          <button 
            onClick={toggleCollapse}
            className={cn(
              "absolute top-28 hidden lg:flex h-9 w-9 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-2xl z-[70] transition-all hover:scale-110",
              isCollapsed ? "-right-4.5" : "right-4"
            )}
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>

          {/* Sidebar Panel */}
          <div className="flex h-full flex-col rounded-[2.5rem] lg:rounded-[3rem] border border-zinc-200/60 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/40 backdrop-blur-3xl shadow-[0_10px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-visible scrollbar-hide transition-all duration-500">
            
            {/* Logo Section */}
            <motion.div 
              layout
              className={cn(
                "flex items-center",
                isCollapsed ? "justify-center py-10" : "px-8 py-12 gap-3"
              )}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 shadow-[0_8px_20px_rgba(79,70,229,0.4)]">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xl font-black text-zinc-950 dark:text-white tracking-tight"
                >
                  Synthex
                </motion.span>
              )}
            </motion.div>

            {/* Navigation */}
            <LayoutGroup>
              <div className={cn(
                "flex-1 px-4 space-y-8 scrollbar-hide",
                isCollapsed ? "overflow-visible" : "overflow-y-auto"
              )}>
                {navigationGroups.map((group) => (
                  <motion.div layout key={group.title} className="space-y-5">
                    {!isCollapsed && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="px-5 text-[11px] font-black uppercase tracking-[0.25em] text-zinc-900/30 dark:text-zinc-500/30"
                      >
                        {group.title}
                      </motion.p>
                    )}
                    <div className="space-y-2.5">
                      {group.items.map((item) => {
                        const hasSubItems = item.subItems && item.subItems.length > 0
                        const isExpanded = expandedMenu === item.name
                        const isActive = pathname === item.href || (item.subItems?.some(s => s.href === pathname))
                        
                        return (
                          <motion.div layout key={item.name} className="relative group/item px-1">
                            {hasSubItems ? (
                              <div className="relative">
                                <button
                                  onClick={() => toggleMenu(item.name)}
                                  className={cn(
                                    "w-full flex items-center gap-3.5 rounded-2xl py-4 transition-all duration-200",
                                    isCollapsed ? "justify-center px-0 h-16" : "px-5",
                                    isActive 
                                      ? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/40" 
                                      : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 hover:text-zinc-950 dark:hover:text-zinc-100"
                                  )}
                                >
                                  <item.icon className={cn("h-5 w-5 shrink-0 transition-transform group-hover/item:scale-110", isActive ? "text-white" : "text-zinc-400 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400")} />
                                  {!isCollapsed && (
                                    <>
                                      <span className="flex-1 text-left text-[14px] font-bold tracking-tight">{item.name}</span>
                                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300 opacity-60", isExpanded && "rotate-180")} />
                                    </>
                                  )}
                                </button>

                                {/* Flyout */}
                                {isCollapsed && (
                                  <div className="absolute left-[calc(100%+0.75rem)] top-0 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-300 z-[100] translate-x-3 group-hover/item:translate-x-0">
                                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-3xl rounded-[2.5rem] p-3 w-60 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                                      <div className={cn(
                                        "flex items-center gap-3 px-5 py-4 rounded-2xl mb-3",
                                        isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "bg-zinc-50 dark:bg-zinc-800/50 text-zinc-950 dark:text-zinc-100"
                                      )}>
                                        <item.icon className="h-5 w-5 shrink-0" />
                                        <span className="text-sm font-black">{item.name}</span>
                                      </div>
                                      <div className="space-y-1.5">
                                        {item.subItems.map((sub) => {
                                          const isSubActive = pathname === sub.href
                                          return (
                                            <Link
                                              key={sub.name}
                                              href={sub.href}
                                              className={cn(
                                                "flex items-center px-5 py-3.5 rounded-xl text-[13px] font-bold transition-all duration-200",
                                                isSubActive 
                                                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-400/5" 
                                                  : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-950 dark:hover:text-white"
                                              )}
                                            >
                                              {sub.name}
                                            </Link>
                                          )
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={item.href || "#"}
                                className={cn(
                                  "group/link flex items-center gap-3.5 rounded-2xl py-4 transition-all duration-200 relative",
                                  isCollapsed ? "justify-center px-0 h-16" : "px-5",
                                  isActive 
                                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/40" 
                                    : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 hover:text-zinc-950 dark:hover:text-zinc-100"
                                )}
                              >
                                <item.icon className={cn("h-5 w-5 shrink-0 transition-transform group-hover/link:scale-110", isActive ? "text-white" : "text-zinc-400 group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-400")} />
                                {!isCollapsed && <span className="text-[14px] font-bold tracking-tight">{item.name}</span>}
                                
                                {isCollapsed && (
                                  <div className="absolute left-[calc(100%+0.75rem)] invisible opacity-0 group-hover/link:visible group-hover/link:opacity-100 transition-all duration-300 z-[100] translate-x-3 group-hover/link:translate-x-0">
                                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 text-zinc-950 dark:text-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-xl whitespace-nowrap shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
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
                                  className="overflow-hidden relative ml-8 pl-7 space-y-1.5 mt-2"
                                >
                                  <div className="absolute left-0 top-0 bottom-3 w-0.5 bg-zinc-200 dark:bg-zinc-800/60 rounded-full" />
                                  {item.subItems.map((sub) => {
                                    const isSubActive = pathname === sub.href
                                    return (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className={cn(
                                          "block py-3 px-5 rounded-xl text-[13px] font-bold transition-all duration-200 relative group/sub",
                                          isSubActive 
                                            ? "bg-indigo-50 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400" 
                                            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                                        )}
                                      >
                                        <div className={cn(
                                          "absolute -left-7 top-1/2 -translate-y-1/2 h-0.5 w-4 transition-colors rounded-full",
                                          isSubActive ? "bg-indigo-600 dark:bg-indigo-500" : "bg-zinc-200 dark:bg-zinc-800/60 group-hover/sub:bg-zinc-400 dark:group-hover/sub:bg-zinc-700"
                                        )} />
                                        {sub.name}
                                      </Link>
                                    )
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </LayoutGroup>

            {/* Profile Section */}
            <motion.div 
              layout
              className={cn("mt-auto", isCollapsed ? "p-0 py-10" : "p-8")}
            >
              <div className={cn(
                "flex items-center gap-3.5",
                isCollapsed ? "justify-center" : "px-2"
              )}>
                <div className="relative group/avatar cursor-pointer">
                  <img 
                    src="https://ui-avatars.com/api/?name=Ummey+Habiba+Pinky+UI&background=6366f1&color=fff" 
                    alt="Profile"
                    className="h-11 w-11 rounded-full border-2 border-zinc-200/60 dark:border-zinc-800/50 shrink-0 group-hover/avatar:scale-110 transition-transform shadow-lg"
                  />
                  <div className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950 shadow-sm" />
                </div>
                {!isCollapsed && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="min-w-0 flex-1"
                  >
                    <p className="text-[14px] font-black text-zinc-950 dark:text-white truncate">Pinky UI</p>
                    <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-600 truncate uppercase tracking-widest">Administrator</p>
                  </motion.div>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.aside>
    </>
  )
}
