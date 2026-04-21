"use client"

import * as React from "react"
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  X,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { USERS_TABLE_DATA as INITIAL_USERS, type User } from "@/data/mock"
import { motion, AnimatePresence } from "framer-motion"

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
    // Immediate state update
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
  }

  const handleEditStart = (user: User) => {
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
      joined: new Date().toLocaleDateString(),
      revenue: "$0",
      avatar: `https://ui-avatars.com/api/?name=New+Member&background=6366f1&color=fff`
    }
    setUsers([newUser, ...users])
  }

  return (
    <div className="space-y-4">
      {/* Search & Add */}
      <div className="flex items-center justify-between gap-4 bg-card border border-border-theme p-4 rounded-xl shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input 
            className="w-full bg-background border border-border-theme rounded-lg pl-10 pr-4 py-2 text-foreground placeholder:text-muted outline-none focus:ring-1 focus:ring-primary/30 transition-all"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={handleAddMockUser} className="gap-2">
          <Plus className="h-4 w-4" />
          Add User
        </Button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border-theme rounded-xl overflow-x-auto shadow-sm">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border-theme">
            <tr>
              <th className="px-6 py-4 text-left text-[10px] font-bold text-muted uppercase tracking-widest">User Details</th>
              <th className="px-6 py-4 text-left text-[10px] font-bold text-muted uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-right text-[10px] font-bold text-muted uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-theme">
            <AnimatePresence>
              {filteredUsers.map((user) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hover:bg-muted/20 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full border border-border-theme" />
                        <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-card" />
                      </div>
                      <div>
                        {editingId === user.id ? (
                          <div className="flex items-center gap-2">
                            <input 
                              className="bg-background border border-primary text-foreground px-2 py-1 text-sm rounded outline-none"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              autoFocus
                            />
                            <button onClick={handleEditSave} className="text-emerald-500 hover:text-emerald-600 transition-colors">
                              <Check className="h-4 w-4" />
                            </button>
                            <button onClick={() => setEditingId(null)} className="text-rose-500 hover:text-rose-600 transition-colors">
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{user.name}</div>
                        )}
                        <div className="text-xs text-muted font-medium">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border border-primary/20 tracking-tighter">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleEditStart(user)}
                        className="p-2 rounded-lg bg-muted/50 text-muted hover:bg-primary/10 hover:text-primary transition-all border border-border-theme"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="p-2 rounded-lg bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all border border-rose-500/20"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
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
