"use client"

import * as React from "react"
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  Package, 
  Check
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface Product {
  id: string
  name: string
  price: string
  category: string
  stock: string
  status: string
}

const INITIAL_PRODUCTS = [
  { id: "PROD-1", name: "Premium Subscription", price: "$49.00", category: "Software", stock: "Unlimited", status: "Active" },
  { id: "PROD-2", name: "API Access Key", price: "$99.00", category: "Service", stock: "Unlimited", status: "Active" },
  { id: "PROD-3", name: "Custom Training Set", price: "$499.00", category: "Data", stock: "15", status: "Out of Stock" },
  { id: "PROD-4", name: "Business Analytics Pack", price: "$199.00", category: "Software", stock: "Unlimited", status: "Active" },
]

export function ProductManagement() {
  const [products, setProducts] = React.useState<Product[]>(INITIAL_PRODUCTS)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [editName, setEditName] = React.useState("")

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id))
  }

  const handleEditStart = (prod: Product) => {
    setEditingId(prod.id)
    setEditName(prod.name)
  }

  const handleEditSave = () => {
    setProducts(products.map(p => p.id === editingId ? { ...p, name: editName } : p))
    setEditingId(null)
  }

  const handleAddMockProduct = () => {
    const newProd = {
      id: `PROD-${Math.floor(100 + Math.random() * 900)}`,
      name: "New Product",
      price: "$1.00",
      category: "Software",
      stock: "10",
      status: "Active"
    }
    setProducts([newProd, ...products])
  }

  return (
    <div className="space-y-6">
      {/* Premium Pill Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
        <div className="relative flex-1 w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted group-focus-within:text-primary-500 transition-colors" />
          <input 
            className="w-full bg-background/50 border border-border-theme rounded-full pl-12 pr-6 py-3.5 text-sm font-bold text-foreground placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/50 transition-all shadow-flat focus:shadow-hero backdrop-blur-md uppercase tracking-wider"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          variant="primary" 
          onClick={handleAddMockProduct} 
          className="gap-3 h-[52px] px-8 rounded-full shadow-hero"
        >
          <Plus className="h-5 w-5" />
          <span className="font-black uppercase tracking-widest text-[11px]">Add New Product</span>
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-background/5 backdrop-blur-xl border-2 border-border-theme p-6 rounded-[2.5rem] relative shadow-flat hover:shadow-hero hover:border-primary-500/40 transition-all group overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="h-12 w-12 bg-primary-500/10 border border-primary-500/20 rounded-2xl flex items-center justify-center text-primary-500 shadow-[0_0_15px_var(--brand-glow)]">
                  <Package className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleEditStart(product)}
                    className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-primary-500 transition-all border border-transparent hover:border-primary-500/40"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-rose-500 transition-all border border-transparent hover:border-rose-500/40"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] text-primary-500 font-black uppercase tracking-[0.2em] mb-2">{product.category}</p>
                {editingId === product.id ? (
                  <div className="flex gap-2 mb-2">
                    <input 
                      className="bg-background/50 border border-primary-500 text-foreground text-sm px-3 py-1.5 rounded-xl w-full outline-none"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      autoFocus
                    />
                    <button onClick={handleEditSave} className="text-emerald-500 hover:text-emerald-600 transition-colors"><Check className="h-5 w-5" /></button>
                  </div>
                ) : (
                  <h3 className="text-foreground font-black text-lg tracking-tight truncate group-hover:text-primary-500 transition-colors">{product.name}</h3>
                )}
                <p className="text-muted/60 text-[10px] font-black uppercase tracking-widest mt-1">{product.id}</p>
              </div>

              <div className="flex justify-between mt-6 pt-6 border-t border-border-theme relative z-10">
                <span className="text-foreground font-black text-lg tracking-tighter">{product.price}</span>
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                  product.stock === "Out of Stock" 
                    ? "bg-rose-500/10 text-rose-500 border-rose-500/20" 
                    : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                )}>
                  {product.stock}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
