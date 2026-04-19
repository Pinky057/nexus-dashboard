import * as React from "react"
import { cn } from "@/lib/utils"

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "success" | "warning" | "danger" | "info" | "primary" }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-zinc-800/50 border-zinc-700 text-zinc-300",
    success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    warning: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    danger: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    info: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    primary: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  }

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs opacity-90 leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
