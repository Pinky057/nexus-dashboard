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
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden py-4 pr-4 lg:py-6 lg:pr-6">
        {/* Main Content Area as a Premium 3D Elevated Card */}
        <div className="flex flex-col flex-1 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)] backdrop-blur-3xl overflow-hidden relative">
          
          {/* Internal Header */}
          <Header onMenuClick={() => setSidebarOpen(true)} />
          
          {/* Page Content */}
          <main className="flex-1 overflow-y-auto px-6 lg:px-10 pb-10 scrollbar-hide relative">
            <div className="max-w-7xl mx-auto w-full pt-6">
              {children}
            </div>
            <AiAssistant />
          </main>
          
        </div>
      </div>
    </div>
  )
}
