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
import { Avatar } from "@/components/ui/Avatar"

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
      {/* Premium Search & Actions Pill */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted group-focus-within:text-primary-500 transition-colors" />
          <input 
            type="text"
            className="w-full bg-background/50 border border-border-theme rounded-full pl-12 pr-6 py-3.5 text-sm font-bold text-foreground placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/50 transition-all shadow-flat focus:shadow-hero backdrop-blur-md uppercase tracking-wider"
            placeholder="Search team members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          variant="primary" 
          onClick={addUser} 
          className="w-full md:w-auto gap-3 h-[52px] px-8 rounded-full shadow-hero"
        >
          <UserPlus className="h-5 w-5" />
          <span className="font-black uppercase tracking-widest text-[11px]">Add New Member</span>
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
                <Avatar 
                  src={user.avatar} 
                  alt={user.name} 
                  shape="squircle" 
                  size="lg" 
                  status="online" 
                />
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
                      className="text-muted/60 hover:text-primary-500 p-2.5 rounded-xl transition-all border border-transparent hover:border-primary-500/40 bg-transparent"
                    >
                      <Edit2 className="h-4.5 w-4.5" />
                    </button>
                  )}
                  <button 
                    onClick={() => handleDelete(user.id)}
                    className="text-muted/60 hover:text-rose-500 p-2.5 rounded-xl transition-all border border-transparent hover:border-rose-500/40 bg-transparent"
                  >
                    <Trash2 className="h-4.5 w-4.5" />
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
