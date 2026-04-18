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
        className="relative -m-2.5 p-2.5 text-zinc-400 hover:text-zinc-300 transition-colors"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-[9px] font-bold text-zinc-100 ring-2 ring-zinc-950">
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
            className="absolute right-0 top-full mt-3 w-80 sm:w-96 rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/40 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-zinc-100">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-[10px] font-bold text-zinc-100">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    Mark all read
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* List */}
            <ul className="max-h-80 overflow-y-auto divide-y divide-zinc-800/60">
              {items.map((n) => (
                <li
                  key={n.id}
                  className={`flex items-start gap-3 px-4 py-3 hover:bg-zinc-800/40 transition-colors cursor-pointer ${
                    n.unread ? "bg-indigo-600/[0.05]" : ""
                  }`}
                >
                  <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${n.iconBg}`}>
                    <n.icon className={`h-4 w-4 ${n.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-zinc-100 truncate">{n.title}</p>
                      <span className="shrink-0 text-[10px] text-zinc-500">{n.time}</span>
                    </div>
                    <p className="mt-0.5 text-[11px] text-zinc-400 leading-relaxed line-clamp-2">{n.message}</p>
                  </div>
                  {n.unread && (
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  )}
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="border-t border-zinc-800 px-4 py-2.5 text-center">
              <button className="text-xs text-zinc-500 hover:text-indigo-400 font-medium transition-colors">
                View all notifications →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
