"use client"

import { motion } from "framer-motion"
import { TRANSACTIONS } from "@/data/mock"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Avatar } from "@/components/ui/Avatar"

export function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="h-full"
    >
      <Card variant="glass" className="h-full flex flex-col group/card">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div className="space-y-1">
            <CardTitle className="uppercase tracking-[0.05em]">Recent Transactions</CardTitle>
            <CardDescription className="text-[10px] font-black text-muted uppercase tracking-widest">Global payment stream</CardDescription>
          </div>
          <Link href="/transactions">
            <Button variant="outline" size="sm" className="h-8 px-3 gap-2 group/btn">
              <span className="text-[9px] font-black uppercase tracking-widest">View All</span>
              <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-hidden p-0">
          <div className="overflow-x-auto h-full">
            <table className="w-full text-left border-collapse">
              <thead className="bg-muted/5 text-[9px] uppercase font-black tracking-[0.2em] text-muted/60 sticky top-0 z-10 border-b border-border-theme">
                <tr>
                  <th scope="col" className="px-7 py-4">Transaction</th>
                  <th scope="col" className="px-7 py-4">Customer</th>
                  <th scope="col" className="px-7 py-4 text-right">Amount</th>
                  <th scope="col" className="px-7 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-theme/30">
                {TRANSACTIONS.slice(0, 5).map((tx) => (
                  <tr key={tx.id} className="hover:bg-primary-500/[0.03] transition-colors group cursor-pointer">
                    <td className="whitespace-nowrap px-7 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-xl bg-muted/5 border border-border-theme flex items-center justify-center group-hover:border-primary-500/30 transition-all">
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted group-hover:text-primary-500" />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-foreground group-hover:text-primary-500 transition-colors uppercase tracking-widest">{tx.id}</div>
                          <div className="text-[9px] text-muted font-bold uppercase tracking-tight">{tx.date}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-7 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar 
                          src={`https://ui-avatars.com/api/?name=${tx.user}&background=6366f1&color=fff`}
                          alt={tx.user}
                          size="xs"
                          status="online"
                        />
                        <div className="flex flex-col">
                          <span className="text-[11px] font-black text-foreground uppercase tracking-tight">{tx.user}</span>
                          <span className="text-[9px] font-bold text-muted uppercase tracking-wider">{tx.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-7 py-4 font-black text-foreground text-right text-xs tracking-tighter">
                      {tx.amount}
                    </td>
                    <td className="whitespace-nowrap px-7 py-4 text-center">
                      <Badge
                        variant={
                          tx.status === "Completed"
                            ? "success"
                            : tx.status === "Pending"
                            ? "warning"
                            : "danger"
                        }
                        className="text-[8px] px-2 py-0.5 rounded-full uppercase tracking-widest font-black"
                      >
                        {tx.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
