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
      {/* Premium Bell Trigger */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        id="notification-bell"
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="relative h-11 w-11 flex items-center justify-center rounded-2xl bg-muted/5 border border-border-theme hover:border-primary-500/50 hover:bg-primary-500/5 transition-all group shadow-flat hover:shadow-[0_0_15px_var(--brand-glow)]"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5 text-zinc-400 group-hover:text-primary-500 transition-colors" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-black text-white ring-2 ring-background shadow-[0_0_10px_rgba(244,63,94,0.5)] z-10">
            {unreadCount}
          </span>
        )}
      </motion.button>

      {/* Dropdown panel - High Opacity for Legibility */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="notif-panel"
            initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute right-0 top-full mt-4 w-96 rounded-[2.5rem] border border-border-theme bg-card/98 backdrop-blur-2xl shadow-hero z-50 overflow-hidden ring-1 ring-white/10"
          >
            {/* Premium Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-border-theme bg-muted/5">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-black text-foreground uppercase tracking-widest">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary-500 px-2 text-[10px] font-black text-white shadow-[0_0_10px_rgba(99,102,241,0.5)] animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-[10px] text-primary-500 hover:text-primary-400 font-black uppercase tracking-widest transition-all"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-muted/10 transition-all border border-border-theme"
                >
                  <X className="h-4 w-4" />
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
