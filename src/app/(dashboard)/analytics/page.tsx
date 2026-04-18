import { ProGate } from "@/components/ProGate"
import { BarChart3 } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Analytics</h1>
        <p className="text-sm text-zinc-400 mt-1">Deep dive into your platform's performance metrics.</p>
      </div>
      <ProGate
        title="Advanced Analytics Module"
        description="Unlock real-time charts, custom date ranges, funnel analysis, and one-click CSV/PDF export."
        icon={<BarChart3 className="h-7 w-7" />}
        features={[
          "Custom date range picker",
          "Traffic source breakdown",
          "Conversion funnel analysis",
          "Revenue forecasting",
          "Export to CSV & PDF",
        ]}
      />
    </div>
  )
}
