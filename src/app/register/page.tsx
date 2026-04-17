"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Bot } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-sm"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
          <Bot className="h-8 w-8 text-white" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-400">
          Start your 14-day free trial. No credit card required.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"
      >
        <div className="bg-zinc-900/50 border border-zinc-800 px-6 py-10 shadow-sm sm:rounded-xl sm:px-12">
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">First name</label>
                <input type="text" placeholder="Jane" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Last name</label>
                <input type="text" placeholder="Doe" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email address</label>
              <input type="email" placeholder="jane@company.com" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Password</label>
              <input type="password" placeholder="Min. 8 characters" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Confirm password</label>
              <input type="password" placeholder="Repeat your password" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input type="checkbox" id="terms" className="mt-0.5 h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-zinc-950" />
              <label htmlFor="terms" className="text-sm text-zinc-400">
                I agree to the{" "}
                <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">Privacy Policy</a>.
              </label>
            </div>

            <Link href="/">
              <button type="button" className="mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">
                Create account
              </button>
            </Link>
          </form>

          <p className="mt-8 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-indigo-500 hover:text-indigo-400">Sign in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
