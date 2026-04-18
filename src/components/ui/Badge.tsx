import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "danger" | "warning" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-indigo-600/10 text-indigo-400 border-indigo-500/20",
    secondary: "bg-zinc-800 text-zinc-300 border-zinc-700",
    success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    danger: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    warning: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    outline: "bg-transparent text-zinc-400 border-zinc-700",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
