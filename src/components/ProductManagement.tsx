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
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-card p-4 border border-border-theme rounded-xl shadow-sm">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input 
            className="w-full bg-background border border-border-theme rounded-lg pl-10 pr-4 py-2 text-foreground text-sm outline-none focus:ring-1 focus:ring-primary/30 transition-all"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={handleAddMockProduct} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-card border border-border-theme p-5 rounded-2xl relative shadow-sm group hover:border-primary/30 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="h-10 w-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <Package className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => handleEditStart(product)}
                    className="p-1.5 rounded bg-muted/50 text-muted hover:bg-primary/10 hover:text-primary transition-all border border-border-theme"
                  >
                    <Edit2 className="h-3 w-3" />
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="p-1.5 rounded bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all border border-rose-500/20"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">{product.category}</p>
                {editingId === product.id ? (
                  <div className="flex gap-2">
                    <input 
                      className="bg-background border border-primary text-foreground text-xs px-2 py-1 rounded w-full outline-none"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      autoFocus
                    />
                    <button onClick={handleEditSave} className="text-emerald-500 hover:text-emerald-600 transition-colors"><Check className="h-4 w-4" /></button>
                  </div>
                ) : (
                  <h3 className="text-foreground font-bold text-sm truncate group-hover:text-primary transition-colors">{product.name}</h3>
                )}
                <p className="text-muted text-[10px] font-medium mt-1 uppercase">{product.id}</p>
              </div>

              <div className="flex justify-between mt-4 pt-4 border-t border-border-theme">
                <span className="text-foreground font-black">{product.price}</span>
                <span className="text-muted text-[10px] font-bold uppercase">{product.stock}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
