"use client"

import * as React from "react"
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  Shield, 
  Circle,
  Filter,
  X,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { USERS_TABLE_DATA as INITIAL_USERS, type User } from "@/data/mock"
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
    // Immediate state update
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
    console.log("Deleted user:", id);
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
      <div className="flex items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input 
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-white"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={handleAddMockUser}>Add User</Button>
      </div>

      {/* Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto">
        <table className="w-full">
          <thead className="bg-zinc-950 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-zinc-500 uppercase">User</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-zinc-500 uppercase">Status</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-zinc-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            <AnimatePresence>
              {filteredUsers.map((user) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hover:bg-zinc-800/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full" />
                      <div>
                        {editingId === user.id ? (
                          <div className="flex items-center gap-2">
                            <input 
                              className="bg-black border border-indigo-500 text-white px-2 py-1 text-sm"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                            />
                            <button onClick={handleEditSave} className="text-green-500 font-bold underline">Save</button>
                            <button onClick={() => setEditingId(null)} className="text-red-500 underline ml-2">Cancel</button>
                          </div>
                        ) : (
                          <div className="text-sm font-bold text-white">{user.name}</div>
                        )}
                        <div className="text-xs text-zinc-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded text-[10px] font-bold uppercase border border-indigo-500/20">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      {/* BUTTONS ARE NOW LARGE AND CLEAR */}
                      <button 
                        onClick={() => handleEditStart(user)}
                        className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-md border border-zinc-700 text-xs font-bold flex items-center gap-2"
                      >
                        <Edit2 className="h-3 w-3" />
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded-md border border-rose-500 text-xs font-bold flex items-center gap-2"
                      >
                        <Trash2 className="h-3 w-3" />
                        Delete
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
