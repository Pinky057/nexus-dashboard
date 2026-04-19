import { ProductManagement } from "@/components/ProductManagement"
import { Box } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Box className="h-5 w-5 text-indigo-400" />
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Product Catalogue</h1>
          </div>
          <p className="text-sm text-zinc-400">Inventory control, pricing management, and digital asset tracking.</p>
        </div>
      </div>

      <ProductManagement />
    </div>
  )
}
