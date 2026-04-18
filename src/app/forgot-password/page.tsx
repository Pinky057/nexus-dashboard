"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Bot, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-sm"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
          <Bot className="h-8 w-8 text-zinc-100" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-100">
          Forgot your password?
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-400">
          No worries. Enter your email and we'll send you reset instructions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"
      >
        <div className="bg-zinc-900/50 border border-zinc-800 px-6 py-10 shadow-sm sm:rounded-xl sm:px-12">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="Enter your registered email"
                className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-zinc-100 placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all"
              />
            </div>

            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-zinc-100 hover:bg-indigo-500 transition-colors"
            >
              Send reset instructions
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-zinc-100 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to sign in
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
