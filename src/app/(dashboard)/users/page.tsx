import { UserManagerV2 } from "@/components/UserManagerV2"

export default function UsersPage() {
  return (
    <div className="space-y-6 pb-8 min-h-screen">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-black tracking-tight text-foreground">Platform Users</h1>
        <p className="text-zinc-400 text-sm">Manage your team members and their access levels.</p>
      </div>

      <UserManagerV2 />
    </div>
  )
}
