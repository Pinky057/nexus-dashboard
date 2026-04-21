"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Filter, 
  CreditCard,
  ArrowUpRight,
  Eye,
  FileText
} from "lucide-react"
import { TRANSACTIONS } from "@/data/mock"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredTransactions = TRANSACTIONS.filter(tx => 
    tx.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8 pb-12">
      {/* Premium Pill Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
              <CreditCard className="h-5 w-5 text-primary-500" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase tracking-wider">Transactions</h1>
          </div>
          <p className="text-[11px] font-black text-muted uppercase tracking-[0.2em] ml-[52px]">Global payment history and billing management</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 w-full sm:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted group-focus-within:text-primary-500 transition-colors" />
            <input 
              className="w-full bg-background/50 border border-border-theme rounded-full pl-12 pr-6 py-3.5 text-sm font-bold text-foreground placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/50 transition-all shadow-flat focus:shadow-hero backdrop-blur-md uppercase tracking-wider"
              placeholder="Search history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            className="h-[52px] px-6 rounded-full border-border-theme bg-background/50 backdrop-blur-md hover:border-primary-500/30 gap-3 transition-all"
          >
            <Filter className="h-4 w-4" />
            <span className="font-black uppercase tracking-widest text-[10px]">Filter</span>
          </Button>
        </div>
      </div>

      {/* Transactions Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-background/5 backdrop-blur-xl border-2 border-border-theme rounded-[2.5rem] overflow-hidden shadow-flat"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted/5 border-b border-border-theme">
              <tr>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Transaction ID</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Customer</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Date & Time</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Amount</th>
                <th className="px-8 py-6 text-[10px] font-black text-muted uppercase tracking-[0.25em]">Status</th>
                <th className="px-8 py-6 text-right text-[10px] font-black text-muted uppercase tracking-[0.25em]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-theme/40">
              <AnimatePresence mode="popLayout">
                {filteredTransactions.map((tx, i) => (
                  <motion.tr 
                    key={tx.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group hover:bg-primary-500/[0.02] transition-colors cursor-pointer"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-xl bg-muted/5 border border-border-theme flex items-center justify-center group-hover:border-primary-500/30 transition-all">
                          <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-primary-500" />
                        </div>
                        <span className="text-xs font-black text-foreground group-hover:text-primary-500 transition-colors uppercase tracking-widest">{tx.id}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-foreground uppercase tracking-tight">{tx.user}</span>
                        <span className="text-[10px] font-bold text-muted uppercase tracking-wider">{tx.email}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-[11px] font-bold text-muted uppercase tracking-wide">{tx.date}</span>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-base font-black text-foreground tracking-tighter">{tx.amount}</span>
                    </td>
                    <td className="px-8 py-5">
                      <div className={cn(
                        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-widest",
                        tx.status === "Completed" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]" :
                        tx.status === "Pending" ? "bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]" :
                        "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
                      )}>
                        <div className={cn(
                          "h-1.5 w-1.5 rounded-full shadow-[0_0_8px_currentColor]",
                          tx.status === "Completed" ? "bg-emerald-500" :
                          tx.status === "Pending" ? "bg-amber-500 animate-pulse" :
                          "bg-rose-500"
                        )} />
                        {tx.status}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-primary-500 transition-all border border-transparent hover:border-primary-500/40">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2.5 rounded-xl bg-transparent text-muted/60 hover:text-primary-500 transition-all border border-transparent hover:border-primary-500/40">
                          <FileText className="h-4 w-4" />
                        </button>
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
