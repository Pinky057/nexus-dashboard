"use client"

import { motion } from "framer-motion"
import { Bell, ShieldAlert, UserPlus, CreditCard, Star, CheckCheck } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "alert",
    icon: ShieldAlert,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    title: "Security Alert",
    message: "Unusual login detected from IP 192.168.1.42",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "user",
    icon: UserPlus,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    title: "New User Registered",
    message: "Sarah Connor just signed up for a Pro account",
    time: "14 min ago",
    unread: true,
  },
  {
    id: 3,
    type: "payment",
    icon: CreditCard,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    title: "Payment Received",
    message: "Invoice #1042 for $249.00 was paid successfully",
    time: "1 hr ago",
    unread: true,
  },
  {
    id: 4,
    type: "review",
    icon: Star,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    title: "New 5-Star Review",
    message: "James K. left a review: \"Absolutely love this dashboard!\"",
    time: "3 hr ago",
    unread: false,
  },
  {
    id: 5,
    type: "system",
    icon: CheckCheck,
    iconColor: "text-zinc-400",
    iconBg: "bg-zinc-500/10",
    title: "Backup Completed",
    message: "Scheduled database backup finished successfully",
    time: "6 hr ago",
    unread: false,
  },
]

export function NotificationList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="lg:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
        <div className="flex items-center gap-2.5">
          <Bell className="h-4 w-4 text-indigo-400" />
          <h2 className="text-base font-semibold text-zinc-100">Notifications</h2>
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-[10px] font-bold text-zinc-100">
            3
          </span>
        </div>
        <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
          Mark all read
        </button>
      </div>

      {/* List */}
      <ul className="divide-y divide-zinc-800/60">
        {notifications.map((n, i) => (
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
        <button className="text-xs text-zinc-500 hover:text-indigo-400 transition-colors font-medium">
          View all notifications →
        </button>
      </div>
    </motion.div>
  )
}
