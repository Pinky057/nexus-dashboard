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

      {/* Premium Pill Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
              <Layout className="h-5 w-5 text-primary-500" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase tracking-wider">AI Task Board</h1>
          </div>
          <p className="text-[11px] font-black text-muted uppercase tracking-[0.2em] ml-[52px]">Project management with AI risk engine</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 w-full sm:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted group-focus-within:text-primary-500 transition-colors" />
            <input 
              type="text" 
              placeholder="SEARCH TASKS..." 
              className="h-[52px] w-full rounded-full bg-background/50 border border-border-theme pl-11 pr-4 text-[10px] font-black text-foreground outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/50 transition-all shadow-flat uppercase tracking-widest backdrop-blur-md"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="h-[52px] px-6 rounded-full border-border-theme bg-background/50 backdrop-blur-md hover:border-primary-500/30 gap-2 flex-1 sm:flex-none"
              onClick={() => handleProClick("Advanced Filters")}
            >
              <Filter className="h-4 w-4" />
              <span className="font-black uppercase tracking-widest text-[10px]">Filter</span>
            </Button>
            <Button 
              variant="primary" 
              className="h-[52px] px-8 rounded-full shadow-hero gap-2 flex-1 sm:flex-none"
              onClick={() => handleProClick("Create Task Module")}
            >
              <Plus className="h-5 w-5" />
              <span className="font-black uppercase tracking-widest text-[10px]">New Task</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-6 -mx-4 px-4 custom-scrollbar">
        <div className="inline-flex gap-8 h-full min-w-full">
          {KANBAN_COLUMNS.map((column) => (
            <div key={column.id} className="w-[340px] shrink-0 flex flex-col gap-6">
              {/* Column Header */}
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                  <div className={cn("h-3 w-3 rounded-full shadow-[0_0_10px_currentColor]", column.color.replace('bg-', 'text-'))} />
                  <h3 className="text-[11px] font-black text-foreground uppercase tracking-[0.2em]">{column.title}</h3>
                  <div className="h-5 min-w-[20px] rounded-full bg-muted/10 border border-border-theme flex items-center justify-center px-1.5">
                    <span className="text-[9px] font-black text-muted">
                      {KANBAN_TASKS.filter(t => t.status === column.id).length}
                    </span>
                  </div>
                </div>
                <button className="h-8 w-8 rounded-xl flex items-center justify-center text-muted hover:text-foreground hover:bg-muted/10 transition-all border border-transparent hover:border-border-theme">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>

              {/* Tasks Container - Expanding & Defined */}
              <div 
                className="h-fit rounded-[2.5rem] bg-background/30 border-2 border-border-theme p-5 space-y-5 cursor-pointer shadow-flat backdrop-blur-sm group/column hover:bg-background/40 hover:border-primary-500/20 transition-all duration-500 ring-1 ring-white/5"
                onClick={() => handleProClick("Drag & Drop Management")}
              >
                {KANBAN_TASKS.filter(t => t.status === column.id).map((task) => (
                  <motion.div
                    key={task.id}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="rounded-[2.25rem] border border-border-theme/60 bg-card p-6 shadow-premium hover:shadow-hero hover:border-primary-500/30 transition-all group relative overflow-hidden ring-1 ring-white/10"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles className="h-4 w-4 text-primary-500/50" />
                    </div>
                    
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={cn(
                        "text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border",
                        task.priority === "High" ? "text-rose-500 border-rose-500/20 bg-rose-500/5" :
                        task.priority === "Medium" ? "text-amber-500 border-amber-500/20 bg-amber-500/5" :
                        "text-zinc-500 border-border-theme bg-muted/5"
                      )}>
                        {task.priority} Priority
                      </div>
                      <span className="text-[10px] font-black text-muted/40 uppercase tracking-widest group-hover:text-primary-500 transition-colors">{task.id}</span>
                    </div>

                    <h4 className="text-base font-black text-foreground group-hover:text-primary-500 transition-colors mb-2 tracking-tighter">
                      {task.title}
                    </h4>
                    <p className="text-[11px] font-bold text-muted/80 line-clamp-2 leading-relaxed uppercase tracking-wide">
                      {task.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[9px] font-black text-muted uppercase tracking-widest">
                        <Clock className="h-3.5 w-3.5 text-primary-500" />
                        <span>3 days ago</span>
                      </div>
                      <div className="flex -space-x-3">
                        {[1, 2].map(i => (
                          <div key={i} className="h-8 w-8 rounded-xl border-2 border-card bg-muted/20 flex items-center justify-center text-[10px] font-black text-foreground shadow-sm ring-1 ring-white/10">
                            {i === 1 ? 'PA' : 'MR'}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Insight Badge */}
                    <div className="mt-6 pt-4 border-t border-border-theme/40">
                      <div className="flex items-start gap-3 rounded-2xl bg-primary-500/[0.03] p-4 border border-primary-500/10 group-hover:bg-primary-500/[0.05] transition-all">
                        <Sparkles className="h-4 w-4 text-primary-500 shrink-0 mt-0.5 animate-pulse" />
                        <p className="text-[11px] leading-relaxed text-primary-500 font-bold uppercase tracking-wider">
                          {task.aiInsight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Premium Add Placeholder */}
                <button className="w-full py-10 border-2 border-dashed border-border-theme rounded-[2rem] text-[10px] font-black uppercase tracking-[0.3em] text-muted/60 hover:text-primary-500 hover:border-primary-500/40 hover:bg-background/60 hover:shadow-premium transition-all duration-500 group/add">
                  <div className="flex flex-col items-center gap-2">
                    <Plus className="h-5 w-5 opacity-40 group-hover/add:opacity-100 group-hover/add:scale-110 transition-all" />
                    <span>Add New Task</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
