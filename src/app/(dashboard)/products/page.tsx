import { ProGate } from "@/components/ProGate"
import { Box } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Products</h1>
        <p className="text-sm text-zinc-400 mt-1">Manage your product catalogue and inventory.</p>
      </div>
      <ProGate
        title="E-Commerce Product Module"
        description="Manage your full product catalogue with categories, inventory tracking, and image uploads."
        icon={<Box className="h-7 w-7" />}
        features={[
          "Product grid & list views",
          "Add / edit product form",
          "Category & tag management",
          "Stock & inventory tracking",
          "Bulk product import via CSV",
        ]}
      />
    </div>
  )
}
