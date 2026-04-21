"use client"

import * as React from "react"
import { 
  Search, 
  Trash2, 
  Edit2, 
  Check,
  UserPlus,
  Mail
} from "lucide-react"
import { USERS_TABLE_DATA as INITIAL_USERS, type User } from "@/data/mock"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"

export function UserManagerV2() {
  const [users, setUsers] = React.useState(INITIAL_USERS)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [editName, setEditName] = React.useState("")

  const handleDelete = (id: string) => {
    setUsers(prev => prev.filter(u => u.id !== id))
  }

  const startEdit = (user: User) => {
    setEditingId(user.id)
    setEditName(user.name)
  }

  const saveEdit = () => {
    setUsers(prev => prev.map(u => u.id === editingId ? { ...u, name: editName } : u))
    setEditingId(null)
  }

  const addUser = () => {
    const newUser = {
      id: `NEW-${Math.floor(Math.random() * 1000)}`,
      name: "New Team Member",
      email: "test@example.com",
      role: "Member",
      status: "Active",
      joined: "Today",
      revenue: "$0",
      avatar: "https://ui-avatars.com/api/?name=New+User&background=6366f1&color=fff"
    }
    setUsers([newUser, ...users])
  }

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4">
      {/* Search & Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/40 p-5 rounded-2xl border border-border-theme backdrop-blur-sm shadow-sm">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input 
            type="text"
            className="w-full bg-background border border-border-theme rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={addUser} className="w-full sm:w-auto gap-2 h-11 px-6 shadow-lg shadow-primary/10">
          <UserPlus className="h-4.5 w-4.5" />
          Add New Member
        </Button>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredUsers.map((user) => (
            <motion.div 
              key={user.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-card border border-border-theme p-5 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:bg-primary/[0.02] transition-all flex flex-col group relative"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <img src={user.avatar} alt={user.name} className="h-12 w-12 rounded-xl border border-border-theme shadow-sm object-cover" />
                  <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-card shadow-sm" />
                </div>
                <div className="min-w-0 flex-1">
                  {editingId === user.id ? (
                    <div className="flex items-center gap-1">
                      <input 
                        autoFocus
                        className="w-full bg-background border-2 border-primary/50 text-foreground text-xs px-3 py-1.5 rounded-lg font-bold outline-none ring-4 ring-primary/5"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                      />
                    </div>
                  ) : (
                    <h3 className="text-sm font-black text-foreground truncate group-hover:text-primary transition-colors tracking-tight">{user.name}</h3>
                  )}
                  <p className="text-[11px] text-muted truncate flex items-center gap-1.5 font-medium mt-0.5">
                    <Mail className="h-3 w-3" />
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-theme/60">
                <span className="text-[10px] font-black text-primary bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/10 uppercase tracking-widest">
                  {user.role}
                </span>
                <div className="flex items-center gap-2">
                  {editingId === user.id ? (
                    <button onClick={saveEdit} className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-xl transition-all border border-emerald-100 shadow-sm">
                      <Check className="h-4 w-4" />
                    </button>
                  ) : (
                    <button 
                      onClick={() => startEdit(user)}
                      className="text-muted hover:text-primary hover:bg-primary/5 p-2 rounded-xl transition-all border border-transparent hover:border-primary/10"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                  )}
                  <button 
                    onClick={() => handleDelete(user.id)}
                    className="text-muted hover:text-rose-600 hover:bg-rose-50 p-2 rounded-xl transition-all border border-transparent hover:border-rose-100"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
