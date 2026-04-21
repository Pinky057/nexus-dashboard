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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800 backdrop-blur-sm">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input 
            type="text"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm text-zinc-100 outline-none focus:ring-1 focus:ring-indigo-500/50"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={addUser} className="w-full sm:w-auto gap-2">
          <UserPlus className="h-4 w-4" />
          Add User
        </Button>
      </div>

      {/* Grid View (Better for 'Un-zoomed' feel) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredUsers.map((user) => (
            <motion.div 
              key={user.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl hover:border-indigo-500/30 transition-all flex flex-col group relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-lg border border-zinc-700 shadow-sm" />
                <div className="min-w-0 flex-1">
                  {editingId === user.id ? (
                    <div className="flex items-center gap-1">
                      <input 
                        autoFocus
                        className="w-full bg-black border border-indigo-500 text-white text-xs px-2 py-1 rounded"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                      />
                    </div>
                  ) : (
                    <h3 className="text-sm font-bold text-zinc-100 truncate">{user.name}</h3>
                  )}
                  <p className="text-[10px] text-zinc-500 truncate flex items-center gap-1">
                    <Mail className="h-2.5 w-2.5" />
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-800/50">
                <span className="text-[10px] font-bold text-indigo-400/80 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10 uppercase tracking-widest">
                  {user.role}
                </span>
                <div className="flex items-center gap-1.5">
                  {editingId === user.id ? (
                    <button onClick={saveEdit} className="text-emerald-500 hover:bg-emerald-500/10 p-1 rounded transition-colors">
                      <Check className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <button 
                      onClick={() => startEdit(user)}
                      className="text-zinc-500 hover:text-indigo-400 p-1 rounded transition-colors"
                    >
                      <Edit2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                  <button 
                    onClick={() => handleDelete(user.id)}
                    className="text-zinc-500 hover:text-rose-500 p-1 rounded transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
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
