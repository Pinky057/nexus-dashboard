"use client"

import * as React from "react"
import { AnimatePresence } from "framer-motion"
import { 
  Search, 
  Plus, 
  FolderTree, 
  Edit2, 
  Trash2,
  Tag,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  { id: "CAT-001", name: "Electronics", items: 42, growth: "+12%", color: "bg-blue-500" },
  { id: "CAT-002", name: "Fashion", items: 128, growth: "+24%", color: "bg-rose-500" },
  { id: "CAT-003", name: "Home & Living", items: 85, growth: "+5%", color: "bg-amber-500" },
  { id: "CAT-004", name: "Accessories", items: 64, growth: "+18%", color: "bg-indigo-500" },
  { id: "CAT-005", name: "Gaming", items: 32, growth: "+31%", color: "bg-emerald-500" },
]

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [categories, setCategories] = React.useState(CATEGORIES)
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [editName, setEditName] = React.useState("")

  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (id: string) => {
    setCategories(prev => prev.filter(cat => cat.id !== id))
  }

  const handleEditStart = (cat: typeof CATEGORIES[0]) => {
    setEditingId(cat.id)
    setEditName(cat.name)
  }

  const handleEditSave = () => {
    setCategories(prev => prev.map(cat => 
      cat.id === editingId ? { ...cat, name: editName } : cat
    ))
    setEditingId(null)
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Premium Pill Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
              <FolderTree className="h-5 w-5 text-primary-500" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase tracking-wider">Categories</h1>
          </div>
          <p className="text-[11px] font-black text-muted uppercase tracking-[0.2em] ml-[52px]">Manage product groupings and taxonomy</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 w-full sm:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted group-focus-within:text-primary-500 transition-colors z-10" />
            <Input 
              className="pl-12 pr-6 h-12"
              placeholder="SEARCH CATEGORIES..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
             <Button 
               variant="outline" 
               className="h-12 px-6 gap-3 group/nudge"
               onClick={() => window.dispatchEvent(new CustomEvent('open-pro-modal', { detail: { feature: 'AI Taxonomy' } }))}
             >
               <Sparkles className="h-4 w-4 text-primary-500 group-hover/nudge:animate-pulse" />
               <span className="hidden sm:inline">AI Taxonomy</span>
             </Button>
             <Button 
               variant="primary" 
               className="h-12 px-6 gap-2"
               onClick={() => {
                 const newId = `CAT-00${categories.length + 1}`
                 setCategories([{ id: newId, name: "New Category", items: 0, growth: "0%", color: "bg-primary-500/20" }, ...categories])
               }}
             >
               <Plus className="h-4 w-4" />
               <span>Add Category</span>
             </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat, i) => (
            <Card
              key={cat.id}
              variant="glass"
              transition={{ delay: i * 0.05 }}
              className="p-8 group relative overflow-hidden flex flex-col h-full"
              whileHover={editingId ? {} : { y: -5 }}
              onClick={() => !editingId && console.log('View collection')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className={cn("h-14 w-14 rounded-3xl flex items-center justify-center border-2 border-white/10 shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3", cat.color)}>
                  <Tag className="h-7 w-7 text-white" />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleEditStart(cat); }}
                    className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-primary-500 transition-all border border-transparent hover:border-primary-500/40"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDelete(cat.id); }}
                    className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-rose-500 transition-all border border-transparent hover:border-rose-500/40"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-black text-muted uppercase tracking-[0.3em] mb-1">{cat.id}</p>
                
                {editingId === cat.id ? (
                  <div className="flex flex-col gap-3">
                    <Input 
                      className="h-12 text-lg"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleEditSave()}
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <Button size="sm" className="rounded-xl h-8 text-[10px] uppercase font-black tracking-widest" onClick={handleEditSave}>Save Changes</Button>
                      <Button size="sm" variant="outline" className="rounded-xl h-8 text-[10px] uppercase font-black tracking-widest" onClick={() => setEditingId(null)}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-primary-500 transition-colors">{cat.name}</h3>
                )}
                
                <div className="mt-6 flex items-center justify-between p-4 rounded-2xl bg-background/50 border border-border-theme group-hover:border-primary-500/20 transition-all">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-muted uppercase tracking-widest">Live Products</span>
                    <span className="text-xl font-black text-foreground">{cat.items}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-muted uppercase tracking-widest">Growth</span>
                    <span className="text-sm font-black text-emerald-500 tracking-tighter">{cat.growth}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest">View Collection</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </Card>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
