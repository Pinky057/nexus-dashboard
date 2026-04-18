"use client"

import { StatCard } from "@/components/StatCard"
import { RevenueChart } from "@/components/RevenueChart"
import { RecentTransactions } from "@/components/RecentTransactions"
import { TopUsers } from "@/components/TopUsers"
import { NotificationList } from "@/components/NotificationList"
import { STATS } from "@/data/mock"

export default function Home() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Dashboard Overview</h1>
        <p className="text-sm text-zinc-400 mt-1">Welcome back. Here is what is happening today.</p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <StatCard
            key={stat.title}
            {...stat}
            delay={0.1 * (i + 1)}
          />
        ))}
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
        <RevenueChart />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
        <RecentTransactions />
        <TopUsers />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
        <NotificationList />
      </div>
    </div>
  );
}
