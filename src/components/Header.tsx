"use client"

import { useState, useEffect } from "react"
import { Search, Menu, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { NotificationBell } from "./NotificationBell"
import { ThemeCustomizer } from "./ThemeCustomizer"
import { ProModal } from "./ui/ProModal"

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
            className="group relative flex h-12 w-full max-w-md items-center gap-3 rounded-full bg-background/50 border border-border-theme px-6 transition-all hover:border-primary-500/50 hover:shadow-hero cursor-pointer backdrop-blur-md"
            onClick={handleSearchClick}
          >
            <Search className="h-4 w-4 text-muted group-hover:text-primary-500 transition-colors" />
            <div className="flex-1 text-sm text-muted font-bold uppercase tracking-wider">
              Search <span className="hidden sm:inline">everything</span>...
            </div>
            <div className="hidden sm:flex items-center gap-1.5 rounded-xl bg-muted/10 px-3 py-1.5 text-[10px] font-black text-muted border border-border-theme group-hover:border-primary-500/30 transition-colors">
              <span>{isMac ? '⌘' : 'Ctrl'}</span>
              <span>K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-2 lg:gap-x-5">
          <motion.div 
            whileHover={{ y: -2 }}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500/10 border border-primary-500/20 cursor-pointer hover:bg-primary-500/20 transition-all group/ai shadow-hero ring-1 ring-primary-500/30"
            onClick={() => setIsProModalOpen(true)}
          >
            <Sparkles className="h-4 w-4 text-primary-500 group-hover/ai:animate-pulse" />
            <span className="text-[11px] font-black text-primary-500 uppercase tracking-[0.2em]">AI Hub</span>
          </motion.div>
          
          <div className="flex items-center gap-2">
            <ThemeCustomizer />
            <ThemeToggle />
            <NotificationBell />
          </div>

          <div className="hidden lg:block lg:h-10 lg:w-px lg:bg-border-theme" aria-hidden="true" />

          <div className="flex items-center gap-x-4 group cursor-pointer pl-1">
            <div className="h-11 w-11 rounded-2xl border-2 border-border-theme flex items-center justify-center overflow-hidden transition-all group-hover:border-primary-500/50 group-hover:shadow-[0_0_15px_var(--brand-glow)]">
              <img
                src="https://ui-avatars.com/api/?name=Pinky+Admin&background=6366f1&color=fff"
                alt="User Avatar"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-sm font-black text-foreground group-hover:text-primary-500 transition-colors tracking-tighter">Pinky Admin</span>
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Pro Account</span>
            </div>
          </div>
        </div>
      </div>
      <ProModal isOpen={isProModalOpen} onClose={() => setIsProModalOpen(false)} />
    </header>
  )
}
