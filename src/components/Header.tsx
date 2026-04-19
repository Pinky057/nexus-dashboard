"use client"

import { Search, Menu, Command, Sparkles, Plus } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { NotificationBell } from "@/components/NotificationBell"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex h-20 shrink-0 items-center px-4 lg:px-8 bg-transparent pointer-events-none sticky top-0 z-30">
      <div className="flex flex-1 items-center justify-between bg-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl h-14 px-4 shadow-xl shadow-black/20 pointer-events-auto">
        
        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden -ml-1 p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* AI Command Bar (The "WOW" Factor) */}
        <div className="flex-1 flex justify-center max-w-xl mx-auto px-4 group">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Command className="h-4 w-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Ask Nexus AI... (Cmd + K)"
              className="w-full bg-zinc-900/50 border border-zinc-800/50 rounded-xl py-2 pl-10 pr-12 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all group-hover:border-zinc-700"
            />
            <div className="absolute inset-y-0 right-3 flex items-center gap-1.5 pointer-events-none">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
              <span className="hidden sm:inline-block text-[10px] font-bold text-zinc-600 bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">K</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-x-2 lg:gap-x-4">
          <div className="hidden md:flex items-center gap-2 mr-2">
            <Button variant="secondary" size="sm" className="h-9 px-3 gap-2 bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">New Action</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-1 bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-1">
            <ThemeToggle />
            <NotificationBell />
          </div>
        </div>
      </div>
    </header>
  )
}
