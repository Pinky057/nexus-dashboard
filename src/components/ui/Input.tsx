import * as React from "react"
import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border border-border-theme bg-background/50 px-4 py-2 text-sm text-foreground ring-offset-background backdrop-blur-md file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/20 focus-visible:border-primary-500/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all font-bold uppercase tracking-wider",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
