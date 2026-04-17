"use client"

import { motion } from "framer-motion"
import { Eye, EyeOff, Search } from "lucide-react"
import { useState } from "react"

export default function FormsPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Forms</h1>
        <p className="text-sm text-zinc-400 mt-1">Pre-built form layouts for every data collection need.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Basic Contact Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-5">
          <div>
            <h2 className="text-base font-semibold text-white">Contact Form</h2>
            <p className="text-xs text-zinc-500 mt-1">Basic user input form with labels and validation styles.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">First Name</label>
              <input type="text" placeholder="Jane" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">Last Name</label>
              <input type="text" placeholder="Doe" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email Address</label>
            <input type="email" placeholder="jane@company.com" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Subject</label>
            <select className="block w-full rounded-md border-0 bg-zinc-950 py-2 pl-3 pr-10 text-white ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all">
              <option>General Inquiry</option>
              <option>Billing Support</option>
              <option>Technical Issue</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Message</label>
            <textarea rows={4} placeholder="Write your message here..." className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all resize-none" />
          </div>
          <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">
            Send Message
          </button>
        </motion.div>

        {/* Profile Settings Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-5">
          <div>
            <h2 className="text-base font-semibold text-white">Profile Settings</h2>
            <p className="text-xs text-zinc-500 mt-1">Account settings form with avatar upload and toggles.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold shrink-0">P</div>
            <div>
              <button className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors">Change Photo</button>
              <p className="text-xs text-zinc-500 mt-1">JPG or PNG. Max 2MB.</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Display Name</label>
            <input type="text" defaultValue="Admin User" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email</label>
            <input type="email" defaultValue="admin@synthex.io" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} defaultValue="supersecret123" className="block w-full rounded-md border-0 bg-zinc-950 py-2 pl-3 pr-10 text-white ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none transition-all" />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-zinc-500 hover:text-zinc-300">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-sm font-medium text-zinc-300">Email Notifications</p>
              <p className="text-xs text-zinc-500">Receive weekly digest emails</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none">
              <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white shadow-sm transition-transform" />
            </button>
          </div>
          <div className="flex gap-3 pt-2">
            <button className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">Save Changes</button>
            <button className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 transition-colors">Cancel</button>
          </div>
        </motion.div>
      </div>

      {/* Input States & Search */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-5">
        <div>
          <h2 className="text-base font-semibold text-white">Input States & Variants</h2>
          <p className="text-xs text-zinc-500 mt-1">All input states including error, success, and disabled.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Default</label>
            <input type="text" placeholder="Default input" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-400 mb-1.5">Success</label>
            <input type="text" defaultValue="Valid value" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white ring-1 ring-inset ring-emerald-500 focus:ring-2 focus:ring-emerald-500 sm:text-sm outline-none" />
            <p className="mt-1 text-xs text-emerald-400">Looks good!</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-rose-400 mb-1.5">Error</label>
            <input type="text" defaultValue="invalid@" className="block w-full rounded-md border-0 bg-zinc-950 py-2 px-3 text-white ring-1 ring-inset ring-rose-500 focus:ring-2 focus:ring-rose-500 sm:text-sm outline-none" />
            <p className="mt-1 text-xs text-rose-400">Please enter a valid email.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-500 mb-1.5">Disabled</label>
            <input type="text" disabled defaultValue="Cannot edit" className="block w-full rounded-md border-0 bg-zinc-900 py-2 px-3 text-zinc-600 ring-1 ring-inset ring-zinc-800 sm:text-sm cursor-not-allowed" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Search Input</label>
            <div className="relative">
              <Search className="absolute inset-y-0 left-3 h-full w-4 text-zinc-500 pointer-events-none" />
              <input type="text" placeholder="Search users, orders, data..." className="block w-full rounded-md border-0 bg-zinc-950 py-2 pl-9 pr-3 text-white placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 sm:text-sm outline-none" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Checkbox & Radio */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-5">
        <div>
          <h2 className="text-base font-semibold text-white">Checkboxes & Radio Buttons</h2>
          <p className="text-xs text-zinc-500 mt-1">Selection controls for multi-choice and single-choice inputs.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-medium text-zinc-400">Notification Preferences</p>
            {["Email notifications", "Push notifications", "SMS alerts", "Weekly digest"].map((label, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked={i < 2} className="h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-zinc-950" />
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{label}</span>
              </label>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium text-zinc-400">Billing Cycle</p>
            {["Monthly - $12/mo", "Quarterly - $30/qtr", "Yearly - $99/yr (Best Value)"].map((label, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="billing" defaultChecked={i === 2} className="h-4 w-4 border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-zinc-950" />
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
