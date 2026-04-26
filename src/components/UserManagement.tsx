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
import { Avatar } from "@/components/ui/Avatar"
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
      {/* Premium Pill Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
        <div className="relative flex-1 w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted group-focus-within:text-primary-500 transition-colors" />
          <input 
            className="w-full bg-background/50 border border-border-theme rounded-full pl-12 pr-6 py-3.5 text-sm font-bold text-foreground placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/50 transition-all shadow-flat focus:shadow-hero backdrop-blur-md uppercase tracking-wider"
            placeholder="Search team members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          variant="primary" 
          onClick={handleAddMockUser} 
          className="gap-3 h-[52px] px-8 rounded-full shadow-hero"
        >
          <Plus className="h-5 w-5" />
          <span className="font-black uppercase tracking-widest text-[11px]">Add New User</span>
        </Button>
      </div>

      {/* Table Container */}
      <div className="bg-background/5 border border-border-theme rounded-[2.5rem] overflow-hidden shadow-premium backdrop-blur-xl group/card hover:border-primary-500/30 transition-all duration-700">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted/5 border-b border-border-theme">
              <tr>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">User Details</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Role & Status</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Metrics</th>
                <th className="px-8 py-6 text-right text-[10px] font-black text-muted uppercase tracking-[0.25em]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-theme/40">
              <AnimatePresence mode="popLayout">
                {filteredUsers.map((user) => (
                  <motion.tr 
                    key={user.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group hover:bg-primary-500/[0.02] transition-colors cursor-pointer"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <Avatar 
                          src={user.avatar} 
                          alt={user.name} 
                          size="md" 
                          status="online" 
                        />
                        <div className="flex flex-col">
                          {editingId === user.id ? (
                            <div className="flex items-center gap-2">
                              <input 
                                className="bg-background/80 border-2 border-primary-500/50 text-foreground text-xs px-3 py-1.5 rounded-xl font-bold outline-none ring-4 ring-primary-500/5 transition-all"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
                                autoFocus
                              />
                              <button onClick={handleEditSave} className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                                <Check className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          ) : (
                            <span className="text-sm font-black text-foreground group-hover:text-primary-500 transition-colors uppercase tracking-tight">{user.name}</span>
                          )}
                          <span className="text-[10px] font-bold text-muted uppercase tracking-wider">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-black text-foreground uppercase tracking-widest">{user.role}</span>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[8px] font-black uppercase tracking-widest w-fit">
                          <div className="h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_currentColor]" />
                          {user.status}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-foreground tracking-tighter">{user.revenue}</span>
                        <span className="text-[9px] font-bold text-muted uppercase tracking-tight">Lifetime Value</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
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
      </div>
    </div>
  )
}
