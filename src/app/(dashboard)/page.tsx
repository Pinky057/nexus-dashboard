"use client"

import { DollarSign, Users, CreditCard, Activity } from "lucide-react"
import { StatCard } from "@/components/StatCard"
import { RevenueChart } from "@/components/RevenueChart"
import { RecentTransactions } from "@/components/RecentTransactions"
import { TopUsers } from "@/components/TopUsers"
import { NotificationList } from "@/components/NotificationList"

export default function Home() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Dashboard Overview</h1>
        <p className="text-sm text-zinc-400 mt-1">Welcome back. Here is what is happening today.</p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          trend="+20.1%"
          isPositive={true}
          icon={DollarSign}
          delay={0.1}
        />
        <StatCard
          title="Active Users"
          value="+2350"
          trend="+180.1%"
          isPositive={true}
          icon={Users}
          delay={0.2}
        />
        <StatCard
          title="Sales"
          value="+12,234"
          trend="+19%"
          isPositive={true}
          icon={CreditCard}
          delay={0.3}
        />
        <StatCard
          title="Active Now"
          value="+573"
          trend="-201"
          isPositive={false}
          icon={Activity}
          delay={0.4}
        />
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
