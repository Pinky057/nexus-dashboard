"use client"

import * as React from "react"
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  Package, 
  Check,
  X
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
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-zinc-900 p-4 border border-zinc-800 rounded-xl">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input 
            className="w-full bg-black border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-white text-sm"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={handleAddMockProduct}>Add Product</Button>
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
              className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="h-10 w-10 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-500">
                  <Package className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2">
                  {/* HIGH CONTRAST BUTTONS */}
                  <button 
                    onClick={() => handleEditStart(product)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-2 py-1 rounded text-[10px] font-bold border border-zinc-700"
                  >
                    EDIT
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="bg-rose-600 hover:bg-rose-500 text-white px-2 py-1 rounded text-[10px] font-bold border border-rose-500"
                  >
                    DELETE
                  </button>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-indigo-400 font-bold uppercase mb-1">{product.category}</p>
                {editingId === product.id ? (
                  <div className="flex gap-2">
                    <input 
                      className="bg-black border border-indigo-500 text-white text-xs px-1 w-full"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <button onClick={handleEditSave} className="text-green-500"><Check className="h-4 w-4" /></button>
                  </div>
                ) : (
                  <h3 className="text-white font-bold text-sm truncate">{product.name}</h3>
                )}
                <p className="text-zinc-500 text-[10px] mt-1">{product.id}</p>
              </div>

              <div className="flex justify-between mt-4 pt-4 border-t border-zinc-800">
                <span className="text-white font-bold">{product.price}</span>
                <span className="text-zinc-500 text-[10px] font-bold uppercase">{product.stock}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
