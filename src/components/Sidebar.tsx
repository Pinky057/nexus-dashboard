"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Settings, BarChart3, CreditCard, Box, Palette, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Users", href: "/users", icon: Users },
  { name: "Products", href: "/products", icon: Box },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "UI Components", href: "/components-ui", icon: Palette },
  { name: "Login Page", href: "/login", icon: LogIn },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r border-zinc-800 bg-zinc-950 px-3 py-4">
      <div className="mb-8 flex items-center px-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">
          S
        </div>
        <span className="ml-3 text-lg font-semibold text-zinc-100 tracking-tight">Synthex UI</span>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-indigo-600/10 text-indigo-500" 
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                  isActive ? "text-indigo-500" : "text-zinc-500 group-hover:text-zinc-300"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
      
      <div className="mt-auto px-3 py-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-sm font-medium text-zinc-100">Upgrade to Pro</p>
          <p className="mt-1 text-xs text-zinc-400">Get access to all premium features.</p>
          <button className="mt-3 w-full rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  )
}
