"use client"

import * as React from "react"
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit2, 
  Box, 
  Filter,
  Package,
  DollarSign,
  Tag
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const INITIAL_PRODUCTS = [
  { id: "PROD-1", name: "Premium Subscription", price: "$49.00", category: "Software", stock: "Unlimited", status: "Active" },
  { id: "PROD-2", name: "API Access Key", price: "$99.00", category: "Service", stock: "Unlimited", status: "Active" },
  { id: "PROD-3", name: "Custom Training Set", price: "$499.00", category: "Data", stock: "15", status: "Out of Stock" },
  { id: "PROD-4", name: "Business Analytics Pack", price: "$199.00", category: "Software", stock: "Unlimited", status: "Active" },
]

export function ProductManagement() {
  const [products, setProducts] = React.useState(INITIAL_PRODUCTS)
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDelete = (id: string) => {
    if (confirm("Delete this product from catalog?")) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  const handleAddMockProduct = () => {
    const newProd = {
      id: `PROD-${Math.floor(Math.random() * 1000)}`,
      name: "New AI Module",
      price: "$29.00",
      category: "Software",
      stock: "100",
      status: "Active"
    }
    setProducts([newProd, ...products])
  }

  return (
    <div className="space-y-4">
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 text-sm text-zinc-100 outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-10 gap-2 border-zinc-800">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button variant="primary" size="sm" className="h-10 gap-2" onClick={handleAddMockProduct}>
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-indigo-500/50 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-indigo-400">
                <Package className="h-6 w-6" />
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-indigo-400 transition-colors">
                  <Edit2 className="h-3.5 w-3.5" />
                </button>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-rose-400 transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">{product.category}</p>
              <h3 className="text-sm font-bold text-zinc-100 mb-1">{product.name}</h3>
              <p className="text-xs text-zinc-500 mb-4">{product.id}</p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Price</p>
                <p className="text-sm font-bold text-zinc-100">{product.price}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Stock</p>
                <p className={cn(
                  "text-[10px] font-bold uppercase",
                  product.status === "Active" ? "text-emerald-500" : "text-rose-500"
                )}>
                  {product.stock}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
