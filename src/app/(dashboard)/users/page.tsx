import { UserManagement } from "@/components/UserManagement"
import { Users, UserPlus } from "lucide-react"

export default function UsersPage() {
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-400" />
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">User Management</h1>
          </div>
          <p className="text-sm text-zinc-400">Manage platform members, assign roles, and audit access.</p>
        </div>
      </div>

      <UserManagement />
    </div>
  )
}
