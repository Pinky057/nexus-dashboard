"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Plus,
  Box, 
  AlertTriangle, 
  History,
  RotateCcw,
  Edit2,
  Trash2
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const INVENTORY = [
  { id: "SKU-9012", name: "Nebula Pro Mouse", stock: 12, minStock: 20, status: "Low Stock", price: "$89.00", category: "Electronics" },
  { id: "SKU-9013", name: "Quantum Keyboard", stock: 45, minStock: 15, status: "In Stock", price: "$159.00", category: "Electronics" },
  { id: "SKU-9014", name: "Titan Gaming Chair", stock: 8, minStock: 10, status: "Low Stock", price: "$399.00", category: "Furniture" },
  { id: "SKU-9015", name: "Prism Desk Mat", stock: 120, minStock: 30, status: "In Stock", price: "$29.00", category: "Accessories" },
  { id: "SKU-9016", name: "Zenith Webcam", stock: 0, minStock: 5, status: "Out of Stock", price: "$129.00", category: "Electronics" },
]

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [inventory, setInventory] = React.useState(INVENTORY)
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [editItem, setEditItem] = React.useState<typeof INVENTORY[0] | null>(null)

  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (id: string) => {
    setInventory(prev => prev.filter(item => item.id !== id))
  }

  const handleEditStart = (item: typeof INVENTORY[0]) => {
    setEditingId(item.id)
    setEditItem({ ...item })
  }

  const handleEditSave = () => {
    if (!editItem) return
    setInventory(prev => prev.map(item => 
      item.id === editingId ? editItem : item
    ))
    setEditingId(null)
    setEditItem(null)
  }

  const adjustStock = (id: string, amount: number) => {
    setInventory(prev => prev.map(item => {
      if (item.id === id) {
        const newStock = Math.max(0, item.stock + amount)
        let newStatus = "In Stock"
        if (newStock === 0) newStatus = "Out of Stock"
        else if (newStock <= item.minStock) newStatus = "Low Stock"
        return { ...item, stock: newStock, status: newStatus }
      }
      return item
    }))
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Premium Pill Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
              <Box className="h-5 w-5 text-primary-500" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase tracking-wider">Inventory</h1>
          </div>
          <p className="text-[11px] font-black text-muted uppercase tracking-[0.2em] ml-[52px]">Real-time stock tracking and supply chain management</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 w-full sm:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted group-focus-within:text-primary-500 transition-colors" />
            <input 
              className="w-full bg-background/50 border border-border-theme rounded-full pl-12 pr-6 py-3.5 text-sm font-bold text-foreground placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/50 transition-all shadow-flat focus:shadow-hero backdrop-blur-md uppercase tracking-wider"
              placeholder="Search SKU or Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            className="h-[52px] px-6 rounded-full border-border-theme bg-background/50 backdrop-blur-md hover:border-primary-500/30 gap-3 transition-all"
            onClick={() => {
              setInventory(INVENTORY) // Simple reset for demo
            }}
          >
            <History className="h-4 w-4" />
            <span className="font-black uppercase tracking-widest text-[10px]">Reset Mock</span>
          </Button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-background/5 backdrop-blur-xl border-2 border-border-theme rounded-[2.5rem] overflow-hidden shadow-flat"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted/5 border-b border-border-theme">
              <tr>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">SKU / Item</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Category</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Stock Level</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Unit Price</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Status</th>
                <th className="px-8 py-6 text-right text-[10px] font-black text-muted uppercase tracking-[0.25em]">Quick Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-theme/40">
              <AnimatePresence mode="popLayout">
                {filteredInventory.map((item, i) => (
                  <motion.tr 
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group hover:bg-primary-500/[0.02] transition-colors cursor-pointer"
                  >
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-primary-500 uppercase tracking-widest">{item.id}</span>
                        {editingId === item.id ? (
                          <input 
                            className="bg-background/50 border border-primary-500 rounded-lg px-2 py-1 text-sm font-black text-foreground uppercase tracking-tight outline-none mt-1"
                            value={editItem?.name || ""}
                            onChange={(e) => setEditItem(prev => prev ? { ...prev, name: e.target.value } : null)}
                          />
                        ) : (
                          <span className="text-sm font-black text-foreground uppercase tracking-tight group-hover:text-primary-500 transition-colors">{item.name}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-[11px] font-bold text-muted uppercase tracking-wide">{item.category}</span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <span className={cn(
                          "text-base font-black tracking-tighter",
                          item.stock <= item.minStock ? "text-rose-500" : "text-foreground"
                        )}>{item.stock}</span>
                        <div className="flex items-center gap-1">
                          <button 
                            onClick={(e) => { e.stopPropagation(); adjustStock(item.id, 1); }}
                            className="h-6 w-6 rounded-lg bg-muted/10 border border-border-theme flex items-center justify-center hover:bg-primary-500/10 hover:border-primary-500/30 transition-all"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); adjustStock(item.id, -1); }}
                            className="h-6 w-6 rounded-lg bg-muted/10 border border-border-theme flex items-center justify-center hover:bg-primary-500/10 hover:border-primary-500/30 transition-all"
                          >
                            <RotateCcw className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm font-black text-foreground tracking-tighter">{item.price}</span>
                    </td>
                    <td className="px-8 py-5">
                      <div className={cn(
                        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest",
                        item.status === "In Stock" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]" :
                        item.status === "Low Stock" ? "bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]" :
                        "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
                      )}>
                        {item.status === "Low Stock" && <AlertTriangle className="h-2.5 w-2.5 animate-pulse" />}
                        {item.status}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {editingId === item.id ? (
                          <div className="flex gap-1">
                            <button onClick={handleEditSave} className="p-2 text-emerald-500 hover:scale-110 transition-transform"><Plus className="h-4 w-4" /></button>
                            <button onClick={() => setEditingId(null)} className="p-2 text-muted hover:scale-110 transition-transform"><RotateCcw className="h-4 w-4" /></button>
                          </div>
                        ) : (
                          <>
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleEditStart(item); }}
                              className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-primary-500 transition-all border border-transparent hover:border-primary-500/40"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                              className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-rose-500 transition-all border border-transparent hover:border-rose-500/40"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
