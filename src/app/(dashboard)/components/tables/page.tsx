"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, Plus, Search, Edit2, Trash2, Check, X } from "lucide-react"
import { USERS_TABLE_DATA as INITIAL_DATA, SIMPLE_REPORTS_DATA, type User } from "@/data/mock"
import { Card, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Input } from "@/components/ui/Input"
import { Avatar } from "@/components/ui/Avatar"
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

  const handleEditStart = (user: User) => {
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
      avatar: `https://ui-avatars.com/api/?name=New+User&background=6366f1&color=fff`,
    }
    setUsers([newUser, ...users])
  }

  return (
    <div className="space-y-8 pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-foreground">Tables</h1>
          <p className="text-sm text-muted mt-1 font-medium italic">Premium data components with functional CRUD logic.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card variant="glass" className="overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-theme/30 px-8 py-6 gap-4">
            <div>
              <CardTitle className="text-lg font-black tracking-tight text-foreground">User Management Table</CardTitle>
              <CardDescription className="font-bold text-muted">{users.length} active users in the system.</CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                <Input
                  placeholder="Search database..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-11 w-56 bg-background border-border-theme font-medium text-sm"
                />
              </div>
              <Button size="sm" onClick={handleAddUser} className="gap-2 h-11 px-5 font-black shadow-lg shadow-primary/10">
                <Plus className="h-4.5 w-4.5" /> Add New
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="text-[10px] uppercase text-muted border-b border-border-theme/30 font-black tracking-widest">
                <tr>
                  <th className="px-6 py-5">User Details</th>
                  <th className="px-6 py-5">Role</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Joined</th>
                  <th className="px-6 py-5">Revenue</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme/40">
                <AnimatePresence initial={false}>
                  {filteredUsers.map((user) => (
                    <motion.tr 
                      key={user.id} 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="hover:bg-primary/[0.02] transition-all group"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <Avatar 
                            src={user.avatar} 
                            alt={user.name} 
                            shape="squircle" 
                            size="md" 
                            status="online" 
                          />
                          <div className="min-w-0">
                            {editingId === user.id ? (
                              <div className="flex items-center gap-2">
                                <input 
                                  className="bg-background border-2 border-primary/50 text-foreground px-3 py-1.5 text-xs rounded-lg font-bold outline-none ring-4 ring-primary/5"
                                  value={editName}
                                  onChange={(e) => setEditName(e.target.value)}
                                  autoFocus
                                />
                                <button onClick={handleEditSave} className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"><Check className="h-4 w-4" /></button>
                                <button onClick={() => setEditingId(null)} className="p-1.5 rounded-lg bg-muted/20 text-muted"><X className="h-4 w-4" /></button>
                              </div>
                            ) : (
                              <p className="font-black text-foreground group-hover:text-primary transition-colors truncate">{user.name}</p>
                            )}
                            <p className="text-[11px] text-muted font-medium truncate mt-0.5">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <Badge variant="outline" className="font-black text-[10px] uppercase tracking-widest border-border-theme">
                          {user.role}
                        </Badge>
                      </td>
                      <td className="px-6 py-5">
                        <Badge
                          variant={user.status === "Active" ? "success" : user.status === "Pending" ? "warning" : "secondary"}
                          className="gap-2 text-[10px] font-black uppercase tracking-tighter"
                        >
                          <span className={cn(
                            "h-2 w-2 rounded-full",
                            user.status === "Active" ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" : user.status === "Pending" ? "bg-amber-400 animate-pulse" : "bg-muted"
                          )} />
                          {user.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-5 text-muted text-xs font-bold uppercase tracking-tighter">{user.joined}</td>
                      <td className="px-6 py-5 font-black text-primary text-base">{user.revenue}</td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleEditStart(user)}
                            className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-primary-500 transition-all border border-transparent hover:border-primary-500/40"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(user.id)}
                            className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-rose-500 transition-all border border-transparent hover:border-rose-500/40"
                          >
                            <Trash2 className="h-4 w-4" />
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
        <Card variant="glass" className="overflow-hidden">
          <div className="border-b border-border-theme/30 px-8 py-6">
            <CardTitle className="text-lg font-black tracking-tight text-foreground">Simple Read-only Table</CardTitle>
            <CardDescription className="font-bold text-muted">For displaying static data and reports without complex interactions.</CardDescription>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-[10px] uppercase text-muted font-black tracking-widest border-b border-border-theme/30">
                <tr>
                  <th className="px-6 py-5">Month</th>
                  <th className="px-6 py-5">Revenue</th>
                  <th className="px-6 py-5">Orders</th>
                  <th className="px-6 py-5">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme/40">
                {SIMPLE_REPORTS_DATA.map((row) => (
                  <tr key={row.month} className="hover:bg-primary/[0.01] transition-all">
                    <td className="px-6 py-5 font-black text-foreground tracking-tight">{row.month}</td>
                    <td className="px-6 py-5 text-muted font-black text-sm">{row.revenue}</td>
                    <td className="px-6 py-5 text-muted font-bold">{row.orders}</td>
                    <td className={`px-6 py-5 font-black text-sm ${row.positive ? "text-emerald-500" : "text-rose-500"}`}>
                      <span className="flex items-center gap-1.5">
                        {row.positive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
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
