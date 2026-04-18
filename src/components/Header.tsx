"use client"

import { Search, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { NotificationBell } from "@/components/NotificationBell"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-x-4 border-b border-zinc-800 bg-zinc-950 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">

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
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">Search</label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-zinc-500"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-zinc-100 placeholder:text-zinc-500 focus:ring-0 sm:text-sm outline-none"
            placeholder="Search transactions, users, or data..."
            type="search"
            name="search"
          />
        </form>

        <div className="flex items-center gap-x-2 lg:gap-x-3">
          <ThemeToggle />
          <NotificationBell />

          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-800" aria-hidden="true" />

          <div className="flex items-center gap-x-3">
            <div className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff"
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden lg:flex lg:items-center">
              <span className="text-sm font-semibold leading-6 text-zinc-100" aria-hidden="true">
                Admin User
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
