"use client"

import { useState, useEffect } from "react"
import { Search, Menu, Command, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { NotificationBell } from "@/components/NotificationBell"
import { ProModal } from "@/components/ui/ProModal"
import { cn } from "@/lib/utils"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [isMac, setIsMac] = useState(false)
  const [isProModalOpen, setIsProModalOpen] = useState(false)

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
  }, [])

  const handleSearchClick = () => {
    window.dispatchEvent(new CustomEvent("toggle-command-palette"))
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-x-4 border-b border-zinc-800 bg-zinc-950 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 sticky top-0 z-40">
      <ProModal 
        isOpen={isProModalOpen} 
        onClose={() => setIsProModalOpen(false)} 
        featureName="AI Command Center Pro"
      />

      {/* Hamburger — only visible on mobile */}
      <button
        type="button"
        onClick={onMenuClick}
        className="lg:hidden -m-2.5 p-2.5 text-zinc-400 hover:text-zinc-100 transition-colors"
        aria-label="Open sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Divider */}
      <div className="lg:hidden h-6 w-px bg-zinc-800" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="relative flex flex-1 items-center">
          <div 
            className="group relative flex h-9 w-full max-w-md items-center gap-2 rounded-lg bg-zinc-900 px-3 ring-1 ring-zinc-800 transition-all hover:ring-indigo-500/50 cursor-pointer"
            onClick={handleSearchClick}
          >
            <Search className="h-4 w-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
            <div className="flex-1 text-sm text-zinc-500">Type <span className="font-mono text-[10px] bg-zinc-800 px-1 rounded">{isMac ? '⌘' : 'Ctrl'}K</span> to search...</div>
            <div className="hidden sm:flex items-center gap-1 rounded bg-zinc-950 px-1.5 py-0.5 text-[10px] font-bold text-zinc-500 border border-zinc-800 group-hover:border-indigo-500/30 transition-colors">
              <span className="text-[12px]">{isMac ? '⌘' : 'Ctrl'}</span>
              <span>K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-2 lg:gap-x-3">
          <div 
            className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mr-2 cursor-pointer hover:bg-indigo-500/20 transition-all"
            onClick={() => setIsProModalOpen(true)}
          >
            <Sparkles className="h-3 w-3 text-indigo-400" />
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">AI Live</span>
          </div>
          
          <ThemeToggle />
          <NotificationBell />

          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-800" aria-hidden="true" />

          <div className="flex items-center gap-x-3 group cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden ring-0 ring-indigo-500/0 transition-all group-hover:ring-2 group-hover:ring-indigo-500/50">
              <img
                src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff"
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden lg:flex lg:items-center">
              <span className="text-sm font-semibold leading-6 text-zinc-100 group-hover:text-indigo-300 transition-colors" aria-hidden="true">
                Admin User
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
