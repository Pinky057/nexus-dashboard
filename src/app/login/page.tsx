"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Bot } from "lucide-react"

export default function LoginPage() {
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
          Sign in to your account
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"
      >
        <div className="bg-zinc-900/50 border border-zinc-800 px-6 py-12 shadow-sm sm:rounded-xl sm:px-12">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-300">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 bg-zinc-950 py-1.5 text-white shadow-sm ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-300">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 bg-zinc-950 py-1.5 text-white shadow-sm ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div>
              <Link href="/">
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-zinc-400">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-500 hover:text-indigo-400">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
