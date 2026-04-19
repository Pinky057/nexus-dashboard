"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Plus, 
  Filter, 
  MoreVertical, 
  Clock, 
  Sparkles, 
  AlertCircle, 
  Layout,
  Search
} from "lucide-react"
import { KANBAN_COLUMNS, KANBAN_TASKS } from "@/data/mock"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ProModal } from "@/components/ui/ProModal"
import { cn } from "@/lib/utils"

export default function KanbanPage() {
  const [isProModalOpen, setIsProModalOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState("")

  const handleProClick = (feature: string) => {
    setSelectedFeature(feature)
    setIsProModalOpen(true)
  }

  return (
    <div className="space-y-6 pb-8 h-full flex flex-col">
      <ProModal 
        isOpen={isProModalOpen} 
        onClose={() => setIsProModalOpen(false)} 
        featureName={selectedFeature}
      />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Layout className="h-5 w-5 text-indigo-400" />
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">AI Task Board</h1>
          </div>
          <p className="text-sm text-zinc-400">Intelligent project management with AI-suggested risk levels.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative mr-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              className="h-9 w-48 rounded-md bg-zinc-900 border-zinc-800 pl-9 pr-3 text-xs text-zinc-100 outline-none focus:ring-1 focus:ring-indigo-500/50"
            />
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 gap-2 border-zinc-800"
            onClick={() => handleProClick("Advanced Filters")}
          >
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button 
            variant="primary" 
            size="sm" 
            className="h-9 gap-2"
            onClick={() => handleProClick("Create Task Module")}
          >
            <Plus className="h-4 w-4" />
            New Task
          </Button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-4">
        <div className="inline-flex gap-6 h-full min-w-full">
          {KANBAN_COLUMNS.map((column) => (
            <div key={column.id} className="w-80 shrink-0 flex flex-col gap-4">
              {/* Column Header */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <div className={cn("h-2 w-2 rounded-full", column.color)} />
                  <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">{column.title}</h3>
                  <Badge variant="outline" className="text-[10px] py-0 px-1.5 border-zinc-800 text-zinc-500 bg-transparent">
                    {KANBAN_TASKS.filter(t => t.status === column.id).length}
                  </Badge>
                </div>
                <button className="text-zinc-600 hover:text-zinc-400">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>

              {/* Tasks Container */}
              <div 
                className="flex-1 rounded-xl bg-zinc-950/40 border border-zinc-800/50 p-2 space-y-3 cursor-pointer"
                onClick={() => handleProClick("Drag & Drop Management")}
              >
                {KANBAN_TASKS.filter(t => t.status === column.id).map((task) => (
                  <motion.div
                    key={task.id}
                    whileHover={{ y: -2 }}
                    className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 shadow-sm hover:border-zinc-700 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "text-[10px] py-0 px-1.5 uppercase tracking-tighter",
                          task.priority === "High" ? "text-rose-400 border-rose-500/20 bg-rose-500/5" :
                          task.priority === "Medium" ? "text-amber-400 border-amber-500/20 bg-amber-500/5" :
                          "text-zinc-400 border-zinc-800"
                        )}
                      >
                        {task.priority}
                      </Badge>
                      <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-500">{task.id}</span>
                    </div>

                    <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-indigo-400 transition-colors mb-1">
                      {task.title}
                    </h4>
                    <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                      {task.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                        <Clock className="h-3 w-3" />
                        <span>3 days ago</span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1, 2].map(i => (
                          <div key={i} className="h-6 w-6 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                            {i === 1 ? 'A' : 'M'}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Insight Badge */}
                    <div className="mt-4 pt-3 border-t border-zinc-800/50">
                      <div className="flex items-start gap-2 rounded-md bg-indigo-500/5 p-2 ring-1 ring-indigo-500/10">
                        <Sparkles className="h-3 w-3 text-indigo-400 shrink-0 mt-0.5" />
                        <p className="text-[10px] leading-tight text-indigo-300 italic">
                          {task.aiInsight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Empty State / Add Placeholder */}
                <button className="w-full py-3 border border-dashed border-zinc-800 rounded-lg text-zinc-600 hover:text-zinc-400 hover:border-zinc-700 transition-all text-xs font-medium">
                  + Add Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
