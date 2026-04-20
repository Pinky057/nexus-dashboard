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

  // Ultra-Smooth Spring Config
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
        transition={sidebarTransition}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col p-4 lg:static lg:translate-x-0 h-full scrollbar-hide will-change-[width]",
          !isOpen && "max-lg:-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col relative scrollbar-hide">
          
          {/* Outward Toggle Tab */}
          <button 
            onClick={toggleCollapse}
            className={cn(
              "absolute top-28 hidden lg:flex h-8 w-8 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 z-[70] shadow-2xl transition-all",
              isCollapsed ? "-right-4" : "right-4"
            )}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>

          {/* Sidebar Panel (3D Card Style) */}
          <div className={cn(
            "flex h-full flex-col rounded-[2.5rem] overflow-visible scrollbar-hide transition-all duration-500",
            "bg-white/80 dark:bg-zinc-900/40 backdrop-blur-3xl",
            "border border-white dark:border-zinc-800/50",
            "shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)]",
            "ring-1 ring-black/[0.05] dark:ring-white/[0.05]"
          )}>
            
            {/* Logo Section */}
            <motion.div 
              layout
              className={cn(
                "flex items-center",
                isCollapsed ? "justify-center py-8" : "px-8 py-10 gap-3"
              )}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 shadow-[0_10px_20px_rgba(79,70,229,0.3)] border-b-2 border-indigo-800">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-lg font-black text-zinc-900 dark:text-white tracking-tight"
                >
                  Synthex
                </motion.span>
              )}
            </motion.div>

            {/* Navigation */}
            <LayoutGroup>
              <div className={cn(
                "flex-1 px-3 space-y-8 scrollbar-hide",
                isCollapsed ? "overflow-visible" : "overflow-y-auto"
              )}>
                {navigationGroups.map((group) => (
                  <motion.div layout key={group.title} className="space-y-4">
                    {!isCollapsed && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="px-5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500/40"
                      >
                        {group.title}
                      </motion.p>
                    )}
                    <div className="space-y-2">
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
                                    "w-full flex items-center gap-3 rounded-2xl py-3.5 transition-all duration-300",
                                    isCollapsed ? "justify-center px-0 h-14" : "px-4",
                                    isActive 
                                      ? "bg-indigo-600 text-white shadow-[0_10px_25px_rgba(79,70,229,0.4)] border-b-4 border-indigo-800" 
                                      : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 hover:text-zinc-900 dark:hover:text-zinc-100"
                                  )}
                                >
                                  <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "text-zinc-400 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400")} />
                                  {!isCollapsed && (
                                    <>
                                      <span className="flex-1 text-left text-sm font-bold">{item.name}</span>
                                      <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", isExpanded && "rotate-180")} />
                                    </>
                                  )}
                                </button>

                                {/* Flyout */}
                                {isCollapsed && (
                                  <div className="absolute left-[calc(100%+0.5rem)] top-0 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-300 z-[100] translate-x-2 group-hover/item:translate-x-0">
                                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 backdrop-blur-3xl rounded-[2rem] p-2 w-56 shadow-[0_30px_70px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
                                      <div className={cn(
                                        "flex items-center gap-3 px-4 py-3.5 rounded-2xl mb-2",
                                        isActive ? "bg-indigo-600 text-white shadow-lg border-b-4 border-indigo-800" : "bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100"
                                      )}>
                                        <item.icon className="h-5 w-5 shrink-0" />
                                        <span className="text-sm font-bold">{item.name}</span>
                                      </div>
                                      <div className="space-y-1">
                                        {item.subItems.map((sub) => {
                                          const isSubActive = pathname === sub.href
                                          return (
                                            <Link
                                              key={sub.name}
                                              href={sub.href}
                                              className={cn(
                                                "flex items-center px-4 py-3 rounded-xl text-[13px] font-bold transition-all",
                                                isSubActive 
                                                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-400/5" 
                                                  : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-white"
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
                                  "group/link flex items-center gap-3 rounded-2xl py-3.5 transition-all duration-300 relative",
                                  isCollapsed ? "justify-center px-0 h-14" : "px-4",
                                  isActive 
                                    ? "bg-indigo-600 text-white shadow-[0_10px_25px_rgba(79,70,229,0.4)] border-b-4 border-indigo-800" 
                                    : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/40 hover:text-zinc-900 dark:hover:text-zinc-100"
                                )}
                              >
                                <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "text-zinc-400 group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-400")} />
                                {!isCollapsed && <span className="text-sm font-bold">{item.name}</span>}
                                
                                {isCollapsed && (
                                  <div className="absolute left-[calc(100%+0.5rem)] invisible opacity-0 group-hover/link:visible group-hover/link:opacity-100 transition-all duration-300 z-[100] translate-x-2 group-hover/link:translate-x-0">
                                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 text-zinc-900 dark:text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl whitespace-nowrap shadow-2xl">
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
                                  className="overflow-hidden relative ml-7 pl-6 space-y-1 mt-1"
                                >
                                  <div className="absolute left-0 top-0 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800/60" />
                                  {item.subItems.map((sub) => {
                                    const isSubActive = pathname === sub.href
                                    return (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className={cn(
                                          "block py-2.5 px-4 rounded-xl text-[13px] font-bold transition-all relative group/sub",
                                          isSubActive 
                                            ? "bg-indigo-50 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400" 
                                            : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                                        )}
                                      >
                                        <div className={cn(
                                          "absolute -left-6 top-1/2 -translate-y-1/2 h-px w-3 transition-colors",
                                          isSubActive ? "bg-indigo-500" : "bg-zinc-200 dark:bg-zinc-800/60 group-hover/sub:bg-zinc-300 dark:group-hover/sub:bg-zinc-700"
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
              className={cn("mt-auto", isCollapsed ? "p-0 py-8" : "p-6")}
            >
              <div className={cn(
                "flex items-center gap-3",
                isCollapsed ? "justify-center" : "px-2"
              )}>
                <div className="relative group/avatar cursor-pointer">
                  <img 
                    src="https://ui-avatars.com/api/?name=Ummey+Habiba+Pinky+UI&background=6366f1&color=fff" 
                    alt="Profile"
                    className="h-10 w-10 rounded-full border-2 border-zinc-200 dark:border-zinc-800/50 shrink-0 group-hover/avatar:scale-110 transition-transform"
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950" />
                </div>
                {!isCollapsed && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="min-w-0 flex-1"
                  >
                    <p className="text-[13px] font-black text-zinc-900 dark:text-white truncate">Pinky UI</p>
                    <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 truncate uppercase tracking-widest">Admin</p>
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
