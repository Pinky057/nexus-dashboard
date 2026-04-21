"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-24 bg-zinc-950 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glowing 404 */}
        <p className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 select-none">
          404
        </p>
        <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

        <h1 className="mt-6 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-sm text-base text-zinc-400">
          The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-zinc-100 hover:bg-indigo-500 transition-colors"
          >
            <Home className="h-4 w-4" />
            Go to Dashboard
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-md bg-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-100 hover:bg-zinc-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}
