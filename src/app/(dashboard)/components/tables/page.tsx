"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, Plus, Search, Edit2, Trash2, Check, X } from "lucide-react"
import { USERS_TABLE_DATA as INITIAL_DATA, SIMPLE_REPORTS_DATA } from "@/data/mock"
import { Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Input } from "@/components/ui/Input"
import { cn } from "@/lib/utils"

export default function TablesPage() {
  const [users, setUsers] = React.useState(INITIAL_DATA)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [editName, setEditName] = React.useState("")

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (id: string) => {
    setUsers(users.filter(u => u.id !== id))
  }

  const handleEditStart = (user: any) => {
    setEditingId(user.id)
    setEditName(user.name)
  }

  const handleEditSave = () => {
    setUsers(users.map(u => u.id === editingId ? { ...u, name: editName } : u))
    setEditingId(null)
  }

  const handleAddUser = () => {
    const newUser = {
      id: `#USR-${Math.floor(100 + Math.random() * 900)}`,
      name: "New User",
      email: "new@example.com",
      role: "Member",
      status: "Active",
      joined: "Apr 20, 2025",
      revenue: "$0",
    }
    setUsers([newUser, ...users])
  }

  return (
    <div className="space-y-8 pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Tables</h1>
          <p className="text-sm text-zinc-400 mt-1">Data table components with functional CRUD logic.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="overflow-hidden bg-zinc-900/50 border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 px-6 py-4 gap-4 bg-zinc-950/20">
            <div>
              <CardTitle className="text-lg">User Management Table</CardTitle>
              <CardDescription>{users.length} users in the database.</CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-10 w-48 bg-zinc-950 border-zinc-800"
                />
              </div>
              <Button size="sm" onClick={handleAddUser} className="gap-1.5 h-10 px-4 font-bold shadow-indigo-500/10">
                <Plus className="h-4 w-4" /> Add User
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-zinc-950/80 text-[10px] uppercase text-zinc-500 border-b border-zinc-800 font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-4">User Details</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Joined</th>
                  <th className="px-6 py-4">Revenue</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                <AnimatePresence initial={false}>
                  {filteredUsers.map((user) => (
                    <motion.tr 
                      key={user.id} 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="hover:bg-zinc-800/30 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 text-xs font-bold ring-1 ring-indigo-500/20">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            {editingId === user.id ? (
                              <div className="flex items-center gap-2">
                                <input 
                                  className="bg-black border border-indigo-500 text-white px-2 py-0.5 text-xs rounded"
                                  value={editName}
                                  onChange={(e) => setEditName(e.target.value)}
                                  autoFocus
                                />
                                <button onClick={handleEditSave} className="text-emerald-500"><Check className="h-4 w-4" /></button>
                                <button onClick={() => setEditingId(null)} className="text-zinc-500"><X className="h-4 w-4" /></button>
                              </div>
                            ) : (
                              <p className="font-bold text-zinc-200">{user.name}</p>
                            )}
                            <p className="text-xs text-zinc-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary" className="font-bold text-[10px] uppercase tracking-tighter">
                          {user.role}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={user.status === "Active" ? "success" : user.status === "Pending" ? "warning" : "secondary"}
                          className="gap-1.5 text-[10px] font-bold"
                        >
                          <span className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            user.status === "Active" ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" : user.status === "Pending" ? "bg-amber-400 animate-pulse" : "bg-zinc-400"
                          )} />
                          {user.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-zinc-400 text-xs">{user.joined}</td>
                      <td className="px-6 py-4 font-bold text-indigo-400">{user.revenue}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {/* VISIBLE BUTTONS WITH LABELS FOR UI KIT */}
                          <button 
                            onClick={() => handleEditStart(user)}
                            className="bg-zinc-800 hover:bg-zinc-700 text-white px-2.5 py-1.5 rounded-md border border-zinc-700 text-[10px] font-black uppercase flex items-center gap-1.5 transition-all"
                          >
                            <Edit2 className="h-3 w-3" /> Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(user.id)}
                            className="bg-rose-600/10 hover:bg-rose-600 text-rose-500 hover:text-white px-2.5 py-1.5 rounded-md border border-rose-500/20 hover:border-rose-500 text-[10px] font-black uppercase flex items-center gap-1.5 transition-all"
                          >
                            <Trash2 className="h-3 w-3" /> Del
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-lg text-zinc-100">Simple Read-only Table</CardTitle>
            <CardDescription>For displaying static data and reports without complex interactions.</CardDescription>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-950/50 text-[10px] uppercase text-zinc-500 font-bold tracking-widest border-b border-zinc-800">
                <tr>
                  <th className="px-6 py-4">Month</th>
                  <th className="px-6 py-4">Revenue</th>
                  <th className="px-6 py-4">Orders</th>
                  <th className="px-6 py-4">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {SIMPLE_REPORTS_DATA.map((row) => (
                  <tr key={row.month} className="hover:bg-zinc-800/20 transition-colors">
                    <td className="px-6 py-4 font-bold text-zinc-200">{row.month}</td>
                    <td className="px-6 py-4 text-zinc-300 font-medium">{row.revenue}</td>
                    <td className="px-6 py-4 text-zinc-300 font-medium">{row.orders}</td>
                    <td className={`px-6 py-4 font-bold ${row.positive ? "text-emerald-400" : "text-rose-400"}`}>
                      <span className="flex items-center gap-1">
                        {row.positive ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
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
