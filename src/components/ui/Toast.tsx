"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, AlertCircle, Info, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export type ToastType = "success" | "error" | "info" | "loading"

export interface Toast {
  id: string
  title: string
  description?: string
  type?: ToastType
}

interface ToastContextType {
  toasts: Toast[]
  toast: (props: Omit<Toast, "id">) => void
  dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = React.useCallback(({ title, description, type = "info" }: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, title, description, type }])
    
    if (type !== "loading") {
      setTimeout(() => {
        dismiss(id)
      }, 5000)
    }
  }, [dismiss])

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

function ToastContainer({ toasts, dismiss }: { toasts: Toast[], dismiss: (id: string) => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="pointer-events-auto"
          >
            <div className={cn(
              "relative flex w-full flex-col gap-1 rounded-2xl border p-4 shadow-2xl backdrop-blur-xl",
              toast.type === "success" && "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
              toast.type === "error" && "bg-rose-500/10 border-rose-500/20 text-rose-500",
              toast.type === "loading" && "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
              (toast.type === "info" || !toast.type) && "bg-zinc-900/90 border-zinc-800 text-zinc-100"
            )}>
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {toast.type === "success" && <CheckCircle2 className="h-5 w-5" />}
                  {toast.type === "error" && <AlertCircle className="h-5 w-5" />}
                  {toast.type === "loading" && <Loader2 className="h-5 w-5 animate-spin" />}
                  {(toast.type === "info" || !toast.type) && <Info className="h-5 w-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold tracking-tight">{toast.title}</h3>
                  {toast.description && (
                    <p className="mt-1 text-xs opacity-80 leading-relaxed">{toast.description}</p>
                  )}
                </div>
                <button 
                  onClick={() => dismiss(toast.id)}
                  className="mt-0.5 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
