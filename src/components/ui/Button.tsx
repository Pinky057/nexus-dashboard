import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "danger" | "success" | "outline" | "ghost" | "link" | "elite"
  size?: "sm" | "md" | "lg" | "xl" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-400 shadow-[0_10px_20px_-10px_rgba(99,102,241,0.5)] border-t border-white/20",
      elite: "bg-background/50 backdrop-blur-md border-2 border-primary-500/30 text-primary-500 hover:border-primary-500/60 hover:shadow-hero shadow-[0_0_15px_rgba(99,102,241,0.1)]",
      secondary: "bg-muted/10 text-foreground hover:bg-muted/20 border border-border-theme",
      danger: "bg-rose-600 text-white hover:bg-rose-500 shadow-[0_10px_20px_-10px_rgba(244,63,94,0.5)] border-t border-white/20",
      success: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] border-t border-white/20",
      outline: "border-2 border-border-theme bg-transparent text-foreground hover:border-primary-500/30 hover:bg-primary-500/5",
      ghost: "bg-transparent text-muted hover:bg-muted/5 hover:text-foreground",
      link: "bg-transparent text-primary-500 hover:underline px-0 py-0",
    }

    const sizes = {
      sm: "h-9 px-4 text-[10px] font-black tracking-widest",
      md: "h-12 px-6 text-[11px] font-black tracking-[0.15em]",
      lg: "h-14 px-8 text-xs font-black tracking-[0.2em]",
      xl: "h-16 px-10 text-sm font-black tracking-[0.25em]",
      icon: "h-12 w-12",
    }

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
