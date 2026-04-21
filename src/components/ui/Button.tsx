import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "danger" | "success" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary-600 text-white hover:bg-primary-500 shadow-xl shadow-primary-500/10",
      secondary: "bg-muted/10 text-foreground hover:bg-muted/20 border border-border-theme",
      danger: "bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-500/10",
      success: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-500/10",
      outline: "border border-border-theme bg-transparent text-foreground hover:bg-muted/5",
      ghost: "bg-transparent text-muted hover:bg-muted/5 hover:text-foreground",
      link: "bg-transparent text-primary-500 hover:underline px-0 py-0",
    }

    const sizes = {
      sm: "h-9 px-4 text-xs font-bold",
      md: "h-11 px-5 py-2 text-sm font-black",
      lg: "h-13 px-8 text-base font-black",
      icon: "h-11 w-11",
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
