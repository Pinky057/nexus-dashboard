"use client"

import { motion } from "framer-motion"
import { ChevronUp, ChevronDown, Plus, Search } from "lucide-react"
import { USERS_TABLE_DATA, SIMPLE_REPORTS_DATA } from "@/data/mock"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Input } from "@/components/ui/Input"

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
      >
        <Card className="overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 px-6 py-4 gap-4">
            <div>
              <CardTitle>User Management Table</CardTitle>
              <CardDescription>{USERS_TABLE_DATA.length} users found in your organization.</CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  placeholder="Search users..."
                  className="pl-9 h-9 w-48 bg-zinc-950/50"
                />
              </div>
              <Button size="sm" className="gap-1.5 h-9">
                <Plus className="h-3.5 w-3.5" /> Add User
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-950/50 text-xs uppercase text-zinc-500 border-b border-zinc-800 font-medium">
                <tr>
                  <th className="px-6 py-4 w-10">
                    <input type="checkbox" className="h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-offset-zinc-950" />
                  </th>
                  <th className="px-6 py-4">
                    <button className="flex items-center gap-1 hover:text-zinc-300 transition-colors uppercase tracking-wider">
                      User <ChevronUp className="h-3 w-3" />
                    </button>
                  </th>
                  <th className="px-6 py-4 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4">
                    <button className="flex items-center gap-1 hover:text-zinc-300 transition-colors uppercase tracking-wider">
                      Status <ChevronDown className="h-3 w-3" />
                    </button>
                  </th>
                  <th className="px-6 py-4 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-4 text-right uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {USERS_TABLE_DATA.map((user) => (
                  <tr key={user.id} className="hover:bg-zinc-800/20 transition-colors group">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-offset-zinc-950" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400 text-xs font-bold shrink-0 ring-1 ring-indigo-500/20">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-zinc-200">{user.name}</p>
                          <p className="text-xs text-zinc-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="font-normal">
                        {user.role}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant={
                          user.status === "Active"
                            ? "success"
                            : user.status === "Pending"
                            ? "warning"
                            : "secondary"
                        }
                        className="gap-1.5"
                      >
                        <span className={`h-1 w-1 rounded-full ${user.status === "Active" ? "bg-emerald-400" : user.status === "Pending" ? "bg-amber-400 animate-pulse" : "bg-zinc-400"}`} />
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{user.joined}</td>
                    <td className="px-6 py-4 font-medium text-indigo-400">{user.revenue}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">Edit</Button>
                        <Button variant="danger" size="sm" className="h-7 px-2 text-xs bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 shadow-none border-rose-500/20">Delete</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-4">
            <p className="text-sm text-zinc-500">
              Showing <span className="font-medium text-zinc-300">1–7</span> of <span className="font-medium text-zinc-300">24</span> users
            </p>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm">Previous</Button>
              <Button variant="primary" size="sm" className="h-8 w-8 p-0">1</Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">2</Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">3</Button>
              <Button variant="ghost" size="sm">Next</Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Simple Read-only Table</CardTitle>
            <CardDescription>For displaying static data and reports without complex interactions.</CardDescription>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-950/50 text-xs uppercase text-zinc-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Month</th>
                  <th className="px-6 py-3 font-medium">Revenue</th>
                  <th className="px-6 py-3 font-medium">Orders</th>
                  <th className="px-6 py-3 font-medium">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {SIMPLE_REPORTS_DATA.map((row) => (
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
        </Card>
      </motion.div>
    </div>
  )
}
