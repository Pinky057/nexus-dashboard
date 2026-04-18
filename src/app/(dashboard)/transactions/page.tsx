import { ProGate } from "@/components/ProGate"
import { CreditCard } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Transactions</h1>
        <p className="text-sm text-zinc-400 mt-1">Full payment history, invoices, and refund management.</p>
      </div>
      <ProGate
        title="Transactions & Billing Module"
        description="Complete payment history with filters, invoice generation, and Stripe/PayPal integration."
        icon={<CreditCard className="h-7 w-7" />}
        features={[
          "Full transaction history with filters",
          "Invoice generation & PDF download",
          "Refund & dispute management",
          "Stripe & PayPal integration ready",
          "Revenue breakdown by date & product",
        ]}
      />
    </div>
  )
}
