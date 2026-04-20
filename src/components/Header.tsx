"use client"

import { useState, useEffect } from "react"
import { Search, Menu, Sparkles } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { NotificationBell } from "./NotificationBell"
import { ProModal } from "./ui/ProModal"
import { cn } from "@/lib/utils"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [isMac, setIsMac] = useState(false)
  const [isProModalOpen, setIsProModalOpen] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
  }, [])

  const handleSearchClick = () => {
    window.dispatchEvent(new CustomEvent('toggle-command-palette'))
  }

  return (
    <header className="sticky top-0 z-30 flex h-24 w-full shrink-0 items-center transition-all px-4 sm:px-6 lg:px-8">
      <div className="flex w-full items-center justify-between px-6 py-3 rounded-none bg-background/60 backdrop-blur-3xl border border-border-theme shadow-sm mt-4">
        <div className="flex flex-1 items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden -ml-1 p-2 rounded-full text-muted hover:text-foreground hover:bg-muted/10 transition-all"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          {/* Professional Pill Search */}
          <div 
            className="group relative flex h-11 w-full max-w-md items-center gap-3 rounded-full bg-background border border-border-theme px-5 transition-all hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 cursor-pointer"
            onClick={handleSearchClick}
          >
            <Search className="h-4 w-4 text-muted group-hover:text-indigo-500 transition-colors" />
            <div className="flex-1 text-sm text-muted font-medium">
              Search <span className="hidden sm:inline">everything</span>...
            </div>
            <div className="hidden sm:flex items-center gap-1.5 rounded-lg bg-muted/10 px-2 py-1 text-[10px] font-black text-muted border border-border-theme group-hover:border-indigo-500/30 transition-colors">
              <span>{isMac ? '⌘' : 'Ctrl'}</span>
              <span>K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-2 lg:gap-x-5">
          <div 
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 cursor-pointer hover:bg-indigo-500/20 transition-all group/ai"
            onClick={() => setIsProModalOpen(true)}
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-500 group-hover/ai:animate-pulse" />
            <span className="text-[11px] font-black text-indigo-500 uppercase tracking-widest">AI Hub</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <NotificationBell />
          </div>

          <div className="hidden lg:block lg:h-8 lg:w-px lg:bg-border-theme" aria-hidden="true" />

          <div className="flex items-center gap-x-3 group cursor-pointer pl-1">
            <div className="h-9 w-9 rounded-full border-2 border-border-theme flex items-center justify-center overflow-hidden transition-all group-hover:border-indigo-500/50 shadow-sm">
              <img
                src="https://ui-avatars.com/api/?name=Pinky+Admin&background=6366f1&color=fff"
                alt="User Avatar"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-xs font-black text-foreground group-hover:text-indigo-500 transition-colors">Pinky Admin</span>
              <span className="text-[10px] font-bold text-muted uppercase tracking-tighter">Pro Account</span>
            </div>
          </div>
        </div>
      </div>
      <ProModal isOpen={isProModalOpen} onClose={() => setIsProModalOpen(false)} />
    </header>
  )
}
