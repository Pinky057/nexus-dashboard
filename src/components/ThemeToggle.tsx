"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-10 w-10" />

  const isDark = theme === "dark"

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-11 w-11 flex items-center justify-center rounded-2xl bg-muted/5 border border-border-theme hover:border-primary-500/50 hover:bg-primary-500/5 transition-all group overflow-hidden shadow-flat hover:shadow-[0_0_15px_var(--brand-glow)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2, ease: "circOut" }}
          >
            <Moon className="h-5 w-5 text-primary-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2, ease: "circOut" }}
          >
            <Sun className="h-5 w-5 text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
