"use client"

import { motion } from "framer-motion"
import { Bell } from "lucide-react"
import { NOTIFICATIONS } from "@/data/mock"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

interface NotificationListProps {
  limit?: number
}

export function NotificationList({ limit = 5 }: NotificationListProps) {
  const displayNotifications = NOTIFICATIONS.slice(0, limit)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="lg:col-span-2"
    >
      <Card className="overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <Bell className="h-4 w-4 text-indigo-400" />
            <h2 className="text-base font-semibold text-zinc-100">Notifications</h2>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-[10px] font-bold text-zinc-100">
              {NOTIFICATIONS.filter(n => n.unread).length}
            </span>
          </div>
          <Button variant="link" size="sm" className="text-xs">
            Mark all read
          </Button>
        </div>

        {/* List */}
        <ul className="divide-y divide-zinc-800/60">
          {displayNotifications.map((n, i) => (
            <motion.li
              key={n.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              className={`flex items-start gap-3.5 px-5 py-3.5 hover:bg-zinc-800/30 transition-colors cursor-pointer ${
                n.unread ? "bg-indigo-600/[0.04]" : ""
              }`}
            >
              {/* Icon */}
              <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${n.iconBg}`}>
                <n.icon className={`h-4 w-4 ${n.iconColor}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-zinc-100 truncate">{n.title}</p>
                  <span className="shrink-0 text-[11px] text-zinc-500">{n.time}</span>
                </div>
                <p className="mt-0.5 text-xs text-zinc-400 leading-relaxed line-clamp-1">{n.message}</p>
              </div>

              {/* Unread dot */}
              {n.unread && (
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-zinc-800 text-center">
          <Button variant="ghost" size="sm" className="w-full text-xs text-zinc-500 hover:text-indigo-400">
            View all notifications →
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
