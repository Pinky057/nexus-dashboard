"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Plus, 
  Filter, 
  MoreVertical, 
  Clock, 
  Sparkles, 
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
            <Layout className="h-5 w-5 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground">AI Task Board</h1>
          </div>
          <p className="text-sm text-muted">Intelligent project management with AI-suggested risk levels.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative mr-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted" />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              className="h-9 w-48 rounded-md bg-background border border-border-theme pl-9 pr-3 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 gap-2 border-border-theme"
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
                  <div className={cn("h-2 w-2 rounded-full shadow-sm", column.color)} />
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">{column.title}</h3>
                  <Badge variant="outline" className="text-[10px] py-0 px-1.5 border-border-theme text-muted bg-background/50">
                    {KANBAN_TASKS.filter(t => t.status === column.id).length}
                  </Badge>
                </div>
                <button className="text-muted hover:text-foreground">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>

              {/* Tasks Container */}
              <div 
                className="flex-1 rounded-2xl bg-muted/20 border border-border-theme p-2 space-y-3 cursor-pointer min-h-[500px]"
                onClick={() => handleProClick("Drag & Drop Management")}
              >
                {KANBAN_TASKS.filter(t => t.status === column.id).map((task) => (
                  <motion.div
                    key={task.id}
                    whileHover={{ y: -2 }}
                    className="rounded-xl border border-border-theme bg-card p-4 shadow-sm hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "text-[10px] py-0 px-1.5 uppercase tracking-tighter",
                          task.priority === "High" ? "text-rose-500 border-rose-500/20 bg-rose-500/5" :
                          task.priority === "Medium" ? "text-amber-500 border-amber-500/20 bg-amber-500/5" :
                          "text-muted border-border-theme"
                        )}
                      >
                        {task.priority}
                      </Badge>
                      <span className="text-[10px] font-mono text-muted group-hover:text-primary">{task.id}</span>
                    </div>

                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {task.title}
                    </h4>
                    <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                      {task.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] text-muted">
                        <Clock className="h-3 w-3" />
                        <span>3 days ago</span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1, 2].map(i => (
                          <div key={i} className="h-6 w-6 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] font-bold text-muted">
                            {i === 1 ? 'A' : 'M'}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Insight Badge */}
                    <div className="mt-4 pt-3 border-t border-border-theme">
                      <div className="flex items-start gap-2 rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
                        <Sparkles className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                        <p className="text-[10px] leading-tight text-primary font-medium italic">
                          {task.aiInsight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Empty State / Add Placeholder */}
                <button className="w-full py-4 border border-dashed border-border-theme rounded-xl text-muted hover:text-foreground hover:bg-background/50 transition-all text-xs font-semibold">
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
