"use client"

import { motion } from "framer-motion"
import { Check, ChevronUp, ChevronDown } from "lucide-react"

const users = [
  { id: "#USR-001", name: "Ummey Habiba Pinky", email: "pinky@synthex.io", role: "Admin", status: "Active", joined: "Jan 12, 2025", revenue: "$4,500" },
  { id: "#USR-002", name: "John Doe", email: "john@acme.com", role: "Developer", status: "Active", joined: "Feb 3, 2025", revenue: "$2,100" },
  { id: "#USR-003", name: "Sarah Smith", email: "sarah@design.co", role: "Designer", status: "Pending", joined: "Mar 18, 2025", revenue: "$1,850" },
  { id: "#USR-004", name: "Alex Johnson", email: "alex@startup.io", role: "Manager", status: "Active", joined: "Apr 1, 2025", revenue: "$3,200" },
  { id: "#USR-005", name: "Emma Williams", email: "emma@gmail.com", role: "Developer", status: "Inactive", joined: "Apr 10, 2025", revenue: "$980" },
  { id: "#USR-006", name: "Carlos Rivera", email: "carlos@corp.com", role: "Manager", status: "Active", joined: "May 5, 2025", revenue: "$5,100" },
  { id: "#USR-007", name: "Aisha Patel", email: "aisha@venture.io", role: "Designer", status: "Pending", joined: "Jun 22, 2025", revenue: "$760" },
]

const statusStyle: Record<string, string> = {
  Active: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
  Pending: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
  Inactive: "bg-zinc-500/10 text-zinc-400 ring-zinc-500/20",
}

const roleStyle: Record<string, string> = {
  Admin: "bg-indigo-600 text-zinc-100",
  Developer: "bg-blue-600 text-zinc-100",
  Designer: "bg-purple-600 text-zinc-100",
  Manager: "bg-teal-600 text-zinc-100",
}

export default function TablesPage() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Tables</h1>
        <p className="text-sm text-zinc-400 mt-1">Data table components with sorting, filtering, and selection.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50"
      >
        {/* Table Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div>
            <h2 className="text-base font-semibold text-zinc-100">User Management Table</h2>
            <p className="text-xs text-zinc-500 mt-0.5">{users.length} users found</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search users..."
              className="rounded-md border-0 bg-zinc-950 py-1.5 px-3 text-sm text-zinc-100 placeholder-zinc-600 ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-indigo-600 outline-none transition-all w-48"
            />
            <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-zinc-100 hover:bg-indigo-500 transition-colors">
              + Add User
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-950/50 text-xs uppercase text-zinc-500 border-b border-zinc-800">
              <tr>
                <th className="px-6 py-4 w-10">
                  <input type="checkbox" className="h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-indigo-600" />
                </th>
                <th className="px-6 py-4">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-zinc-300 transition-colors">
                    User <ChevronUp className="h-3 w-3" />
                  </div>
                </th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-zinc-300 transition-colors">
                    Status <ChevronDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4">Revenue</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-zinc-800/20 transition-colors group">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-indigo-600" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400 text-xs font-bold shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-zinc-200">{user.name}</p>
                        <p className="text-xs text-zinc-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded px-2 py-0.5 text-xs font-medium ${roleStyle[user.role]}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyle[user.status]}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-400" : user.status === "Pending" ? "bg-amber-400 animate-pulse" : "bg-zinc-400"}`} />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-400">{user.joined}</td>
                  <td className="px-6 py-4 font-medium text-indigo-400">{user.revenue}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="rounded bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300 hover:bg-zinc-700 transition-colors">Edit</button>
                      <button className="rounded bg-rose-500/10 px-2.5 py-1 text-xs text-rose-400 hover:bg-rose-500/20 transition-colors">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-4">
          <p className="text-sm text-zinc-500">Showing <span className="font-medium text-zinc-300">1–7</span> of <span className="font-medium text-zinc-300">24</span> users</p>
          <div className="flex items-center gap-1">
            <button className="rounded px-3 py-1.5 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors">Previous</button>
            <button className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-zinc-100">1</button>
            <button className="rounded px-3 py-1.5 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors">2</button>
            <button className="rounded px-3 py-1.5 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors">3</button>
            <button className="rounded px-3 py-1.5 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors">Next</button>
          </div>
        </div>
      </motion.div>

      {/* Simple Read-only Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border border-zinc-800 bg-zinc-900/50"
      >
        <div className="border-b border-zinc-800 px-6 py-4">
          <h2 className="text-base font-semibold text-zinc-100">Simple Read-only Table</h2>
          <p className="text-xs text-zinc-500 mt-0.5">For displaying static data and reports.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-950/50 text-xs uppercase text-zinc-500">
              <tr>
                <th className="px-6 py-3">Month</th>
                <th className="px-6 py-3">Revenue</th>
                <th className="px-6 py-3">Orders</th>
                <th className="px-6 py-3">Growth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {[
                { month: "January", revenue: "$12,000", orders: 142, growth: "+12%", positive: true },
                { month: "February", revenue: "$18,500", orders: 198, growth: "+54%", positive: true },
                { month: "March", revenue: "$15,200", orders: 165, growth: "-18%", positive: false },
                { month: "April", revenue: "$22,800", orders: 241, growth: "+50%", positive: true },
              ].map((row) => (
                <tr key={row.month} className="hover:bg-zinc-800/20 transition-colors">
                  <td className="px-6 py-3 font-medium text-zinc-200">{row.month}</td>
                  <td className="px-6 py-3 text-zinc-300">{row.revenue}</td>
                  <td className="px-6 py-3 text-zinc-300">{row.orders}</td>
                  <td className={`px-6 py-3 font-medium ${row.positive ? "text-emerald-400" : "text-rose-400"}`}>
                    <span className="flex items-center gap-1">
                      {row.positive ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                      {row.growth}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
