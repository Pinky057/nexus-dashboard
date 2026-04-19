"use client"

import * as React from "react"
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  Shield, 
  Check,
  X
} from "lucide-react"
import { USERS_TABLE_DATA as INITIAL_USERS } from "@/data/mock"
import { motion, AnimatePresence } from "framer-motion"

export function UserManagerV2() {
  const [users, setUsers] = React.useState(INITIAL_USERS)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [editName, setEditName] = React.useState("")

  // DELETE FUNCTION
  const handleDelete = (id: string) => {
    setUsers(prev => prev.filter(u => u.id !== id))
  }

  // EDIT FUNCTIONS
  const startEdit = (user: any) => {
    setEditingId(user.id)
    setEditName(user.name)
  }

  const saveEdit = () => {
    setUsers(prev => prev.map(u => u.id === editingId ? { ...u, name: editName } : u))
    setEditingId(null)
  }

  // CREATE FUNCTION
  const addUser = () => {
    const newUser = {
      id: `NEW-${Math.floor(Math.random() * 1000)}`,
      name: "BRAND NEW USER",
      email: "test@example.com",
      role: "Member",
      status: "Active",
      joined: "Today",
      revenue: "$0",
      avatar: "https://ui-avatars.com/api/?name=New+User"
    }
    setUsers([newUser, ...users])
  }

  return (
    <div className="p-8 bg-zinc-950 border-4 border-indigo-500 rounded-3xl shadow-[0_0_50px_rgba(79,70,229,0.3)]">
      <div className="flex justify-between items-center mb-8 bg-indigo-600/10 p-6 rounded-2xl border border-indigo-500/20">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">FORCE UPDATED MODULE V2</h2>
          <p className="text-indigo-400 font-medium">If you see this blue border, the update is WORKING.</p>
        </div>
        <button 
          onClick={addUser}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-black shadow-2xl flex items-center gap-2 transition-all active:scale-95"
        >
          <Plus className="h-6 w-6" />
          ADD NEW USER
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {users.filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase())).map((user) => (
            <motion.div 
              key={user.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="flex items-center justify-between bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-indigo-500/50 transition-all shadow-xl"
            >
              <div className="flex items-center gap-4">
                <img src={user.avatar} className="h-14 w-14 rounded-2xl border-2 border-zinc-800" />
                <div>
                  {editingId === user.id ? (
                    <div className="flex items-center gap-2">
                      <input 
                        className="bg-black border-2 border-indigo-500 text-white px-4 py-2 rounded-lg font-bold"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                      <button onClick={saveEdit} className="bg-emerald-600 p-2 rounded-lg text-white"><Check /></button>
                      <button onClick={() => setEditingId(null)} className="bg-zinc-700 p-2 rounded-lg text-white"><X /></button>
                    </div>
                  ) : (
                    <h3 className="text-xl font-bold text-white">{user.name}</h3>
                  )}
                  <p className="text-zinc-500 font-medium">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => startEdit(user)}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl font-bold border border-zinc-700 transition-all flex items-center gap-2"
                >
                  <Edit2 className="h-4 w-4" />
                  EDIT
                </button>
                <button 
                  onClick={() => handleDelete(user.id)}
                  className="bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-xl font-bold border border-rose-500 shadow-lg shadow-rose-900/20 transition-all flex items-center gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  DELETE
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
