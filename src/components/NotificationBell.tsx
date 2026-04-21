"use client"

import { useState, useRef, useEffect } from "react"
import { Bell, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { NOTIFICATIONS } from "@/data/mock"

export function NotificationBell() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(NOTIFICATIONS)
  const ref = useRef<HTMLDivElement>(null)

  const unreadCount = items.filter((n) => n.unread).length

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })))
  }

  return (
    <div className="relative" ref={ref}>
      {/* Bell button */}
      <button
        id="notification-bell"
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="relative -m-2.5 p-2.5 text-muted hover:text-foreground transition-all duration-200"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-black text-white ring-2 ring-background shadow-sm">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="notif-panel"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-3 w-80 sm:w-96 rounded-2xl border border-border-theme bg-card shadow-2xl shadow-black/10 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-theme bg-muted/5">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black text-foreground tracking-tight">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-black text-white">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-[11px] text-primary hover:underline font-bold transition-all"
                  >
                    Mark all read
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-muted/10 transition-all"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* List */}
            <ul className="max-h-80 overflow-y-auto divide-y divide-border-theme/40">
              {items.map((n) => (
                <li
                  key={n.id}
                  className={`flex items-start gap-4 px-5 py-4 hover:bg-muted/10 transition-all cursor-pointer ${
                    n.unread ? "bg-primary/[0.03]" : ""
                  }`}
                >
                  <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border-theme/50 ${n.iconBg}`}>
                    <n.icon className={`h-4.5 w-4.5 ${n.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-foreground truncate">{n.title}</p>
                      <span className="shrink-0 text-[10px] text-muted font-medium">{n.time}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted leading-relaxed line-clamp-2">{n.message}</p>
                  </div>
                  {n.unread && (
                    <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                  )}
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-border-theme px-4 py-3 text-center bg-muted/5">
              <button className="text-xs text-muted hover:text-primary font-bold tracking-tight transition-all">
                View all notifications →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
