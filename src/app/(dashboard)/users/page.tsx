import { ProGate } from "@/components/ProGate"
import { Users } from "lucide-react"

export default function UsersPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Users</h1>
        <p className="text-sm text-zinc-400 mt-1">Manage your team, roles, and permissions.</p>
      </div>
      <ProGate
        title="User Management Module"
        description="Full CRUD user management with role-based access control, bulk actions, and audit logs."
        icon={<Users className="h-7 w-7" />}
        features={[
          "Add, edit & delete users",
          "Role-based access control (RBAC)",
          "Bulk invite via CSV",
          "Activity & audit log per user",
          "Account suspension & 2FA management",
        ]}
      />
    </div>
  )
}
