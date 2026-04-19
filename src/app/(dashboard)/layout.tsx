"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { AiAssistant } from "@/components/AiAssistant"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-full overflow-hidden bg-zinc-950 text-zinc-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8 relative">
          {children}
          <AiAssistant />
        </main>
      </div>
    </div>
  )
}
