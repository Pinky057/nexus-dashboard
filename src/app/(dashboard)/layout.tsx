import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { AiAssistant } from "@/components/AiAssistant"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full overflow-hidden bg-zinc-950 text-zinc-100">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8 relative">
          {children}
          <AiAssistant />
        </main>
      </div>
    </div>
  )
}
