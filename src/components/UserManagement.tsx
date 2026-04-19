"use client"

import * as React from "react"
import { 
  MoreHorizontal, 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  Shield, 
  Circle,
  Filter,
  ArrowUpDown,
  X,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { USERS_TABLE_DATA as INITIAL_USERS } from "@/data/mock"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function UserManagement() {
  const [users, setUsers] = React.useState(INITIAL_USERS)
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

  const handleAddMockUser = () => {
    const newUser = {
      id: `#USR-${Math.floor(100 + Math.random() * 900)}`,
      name: "New Team Member",
      email: "new.member@company.com",
      role: "Member",
      status: "Active",
      joined: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      revenue: "$0",
      avatar: `https://ui-avatars.com/api/?name=New+Member&background=6366f1&color=fff`
    }
    setUsers([newUser, ...users])
  }

  const handleToggleStatus = (id: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u))
  }

  return (
    <div className="space-y-4">
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 shadow-xl">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search users..." 
            className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 text-sm text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="primary" className="h-11 gap-2 shadow-[0_0_20px_rgba(79,70,229,0.2)]" onClick={handleAddMockUser}>
          <Plus className="h-4 w-4" />
          Add User
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950/50">
              <th className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest">User Details</th>
              <th className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest">Role</th>
              <th className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  Status <Filter className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            <AnimatePresence initial={false}>
              {filteredUsers.map((user) => (
                <motion.tr 
                  key={user.id}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group hover:bg-zinc-800/20 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt="" className="h-10 w-10 rounded-xl border border-zinc-700 shadow-sm" />
                      <div>
                        {editingId === user.id ? (
                          <div className="flex items-center gap-2">
                            <input 
                              autoFocus
                              className="bg-zinc-950 border border-indigo-500/50 rounded px-2 py-1 text-sm text-zinc-100 outline-none"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
                            />
                            <button onClick={handleEditSave} className="p-1 text-emerald-500 hover:bg-emerald-500/10 rounded">
                              <Check className="h-4 w-4" />
                            </button>
                            <button onClick={() => setEditingId(null)} className="p-1 text-zinc-500 hover:bg-zinc-800 rounded">
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <p className="text-sm font-bold text-zinc-100">{user.name}</p>
                        )}
                        <p className="text-[11px] text-zinc-500 font-medium">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                      <Shield className="h-3.5 w-3.5 text-zinc-600" />
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleToggleStatus(user.id)}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all",
                        user.status === "Active" 
                          ? "bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20" 
                          : "bg-rose-500/10 text-rose-500 ring-1 ring-rose-500/20"
                      )}
                    >
                      <Circle className="h-1.5 w-1.5 fill-current" />
                      {user.status}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleEditStart(user)}
                        className="flex items-center justify-center h-8 w-8 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
                        title="Edit User"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="flex items-center justify-center h-8 w-8 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-rose-400 hover:border-rose-500/30 transition-all"
                        title="Delete User"
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
    </div>
  )
}
