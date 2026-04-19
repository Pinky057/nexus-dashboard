import { UserManagerV2 } from "@/components/UserManagerV2"
import { Users } from "lucide-react"

export default function UsersPage() {
  return (
    <div className="space-y-6 pb-8 min-h-screen">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-indigo-400" />
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">User Control Center</h1>
        </div>
        <p className="text-zinc-400 font-medium">Manage members, edit details, and delete accounts instantly.</p>
      </div>

      <UserManagerV2 />
    </div>
  )
}
