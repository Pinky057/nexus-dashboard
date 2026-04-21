"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  shape?: "circle" | "rounded" | "squircle"
  status?: "online" | "offline" | "away" | "busy"
  isGlow?: boolean
}

const sizeClasses = {
  xs: "h-6 w-6 text-[8px]",
  sm: "h-8 w-8 text-[10px]",
  md: "h-10 w-10 text-xs",
  lg: "h-12 w-12 text-sm",
  xl: "h-16 w-16 text-base",
  "2xl": "h-24 w-24 text-xl",
}

const statusColors = {
  online: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
  offline: "bg-zinc-500 shadow-none",
  away: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]",
  busy: "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]",
}

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  shape = "circle",
  status,
  isGlow = false,
  className,
  ...props
}: AvatarProps) {
  const [isError, setIsError] = React.useState(false)

  return (
    <div className="relative inline-block shrink-0">
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-muted/10 border border-border-theme transition-all duration-300",
          sizeClasses[size],
          shape === "circle" ? "rounded-full" : 
          shape === "rounded" ? "rounded-xl" : 
          "rounded-[32%]", // Signature Squircle
          isGlow && "ring-2 ring-primary-500/20 ring-offset-2 ring-offset-background",
          className
        )}
        {...props}
      >
        <AnimatePresence mode="wait">
          {src && !isError ? (
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={src}
              alt={alt}
              onError={() => setIsError(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-primary-600/10 font-black uppercase tracking-widest text-primary-500"
            >
              {fallback || alt?.charAt(0) || "U"}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-background ring-offset-background",
            statusColors[status],
            size === "xs" ? "h-1.5 w-1.5" : 
            size === "sm" ? "h-2 w-2" : 
            size === "md" ? "h-2.5 w-2.5" : 
            size === "lg" ? "h-3 w-3" : 
            "h-4 w-4"
          )}
        />
      )}
    </div>
  )
}
