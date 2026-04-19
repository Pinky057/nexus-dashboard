"use client"

import * as React from "react"
import { 
  MoreHorizontal, 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  Mail, 
  Shield, 
  Circle,
  Filter,
  ArrowUpDown
} from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { USERS_TABLE_DATA as INITIAL_USERS } from "@/data/mock"
import { cn } from "@/lib/utils"

export function UserManagement() {
  const [users, setUsers] = React.useState(INITIAL_USERS)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isAddingUser, setIsAddingUser] = React.useState(false)

  // Filter users based on search
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id))
    }
  }

  const handleAddMockUser = () => {
    const newUser = {
      id: `USR-${Math.floor(Math.random() * 1000)}`,
      name: "New User",
      email: "new@example.com",
      role: "Member",
      status: "Active",
      avatar: "https://ui-avatars.com/api/?name=New+User",
      joined: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      revenue: "$0"
    }
    setUsers([newUser, ...users])
  }

  const handleToggleStatus = (id: string) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
      }
      return u
    }))
  }

  return (
    <div className="space-y-4">
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 text-sm text-zinc-100 outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-10 gap-2 border-zinc-800">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button variant="primary" size="sm" className="h-10 gap-2" onClick={handleAddMockUser}>
            <Plus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950/50">
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                <div className="flex items-center gap-2 cursor-pointer hover:text-zinc-300">
                  User
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">Role</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                <div className="flex items-center gap-2 group cursor-pointer hover:text-zinc-300 transition-colors">
                  Status
                  <Filter className="h-3 w-3 text-zinc-600 group-hover:text-indigo-400" />
                </div>
              </th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-zinc-500 text-sm italic">
                  No users found matching your criteria.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="group hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-zinc-800 ring-1 ring-zinc-700 overflow-hidden flex-shrink-0">
                        <img src={user.avatar} alt="" className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-100">{user.name}</p>
                        <p className="text-xs text-zinc-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Shield className={cn(
                        "h-3.5 w-3.5",
                        user.role === "Admin" ? "text-indigo-400" : "text-zinc-500"
                      )} />
                      <span className="text-xs font-medium">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleToggleStatus(user.id)}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all",
                        user.status === "Active" 
                          ? "bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20" 
                          : "bg-rose-500/10 text-rose-500 ring-1 ring-rose-500/20"
                      )}
                    >
                      <Circle className={cn("h-1.5 w-1.5 fill-current")} />
                      {user.status}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg text-zinc-400 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="p-2 rounded-lg text-zinc-400 hover:text-rose-500 hover:bg-rose-500/10 transition-all"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Mock */}
      <div className="flex items-center justify-between px-2 pt-2">
        <p className="text-xs text-zinc-500">
          Showing <span className="font-bold text-zinc-300">{filteredUsers.length}</span> of <span className="font-bold text-zinc-300">{users.length}</span> users
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 border-zinc-800 opacity-50 cursor-not-allowed">Previous</Button>
          <Button variant="outline" size="sm" className="h-8 border-zinc-800 opacity-50 cursor-not-allowed">Next</Button>
        </div>
      </div>
    </div>
  )
}
