"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  User, 
  Users, 
  CreditCard, 
  Shield, 
  Bell, 
  Settings as SettingsIcon,
  Cloud,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { ProGate } from "@/components/ProGate"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: Shield },
  { id: "team", label: "Team", icon: Users, pro: true },
  { id: "billing", label: "Billing", icon: CreditCard, pro: true },
  { id: "api", label: "API Keys", icon: Cloud, pro: true },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState("profile")

  return (
    <div className="space-y-8 pb-12">
      {/* Premium Pill Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
              <SettingsIcon className="h-5 w-5 text-primary-500" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase tracking-wider">System Settings</h1>
          </div>
          <p className="text-[11px] font-black text-muted uppercase tracking-[0.2em] ml-[52px]">Workspace configuration and global account management</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 p-1.5 bg-background/50 backdrop-blur-md border border-border-theme rounded-[2rem] w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all relative group",
              activeTab === tab.id ? "text-white" : "text-muted hover:text-foreground"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-primary-500 rounded-full shadow-hero z-[-1]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <tab.icon className={cn("h-4 w-4", activeTab === tab.id ? "text-white" : "text-muted group-hover:text-primary-500")} />
            {tab.label}
            {tab.pro && (
              <span className={cn(
                "ml-1 text-[8px] px-1 py-0.5 rounded border transition-colors",
                activeTab === tab.id ? "bg-white/20 border-white/30 text-white" : "bg-primary-500/10 border-primary-500/20 text-primary-500"
              )}>PRO</span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "profile" && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 space-y-6">
              <Card variant="glass" className="p-8">
                <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-6">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted uppercase tracking-widest">Full Name</label>
                    <Input defaultValue="Guest User" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted uppercase tracking-widest">Email Address</label>
                    <Input defaultValue="guest@synthex.ai" disabled />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-muted uppercase tracking-widest">Bio</label>
                    <Input defaultValue="Exploring the Nexus of AI and Design." />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button variant="primary" className="h-12 px-8 rounded-2xl">Save Changes</Button>
                </div>
              </Card>

              <Card variant="glass" className="p-8 border-rose-500/20">
                <h3 className="text-xl font-black text-rose-500 uppercase tracking-tight mb-2">Danger Zone</h3>
                <p className="text-sm text-muted mb-6">Permanently delete your account and all associated data.</p>
                <Button variant="outline" className="border-rose-500/30 text-rose-500 hover:bg-rose-500/10">Delete Account</Button>
              </Card>
            </div>

            <div className="space-y-6">
              <Card variant="glass" className="p-8 flex flex-col items-center text-center">
                <div className="h-24 w-24 rounded-[32%] bg-primary-500/10 border-2 border-primary-500/20 flex items-center justify-center mb-6 relative group overflow-hidden">
                   <User className="h-10 w-10 text-primary-500 group-hover:scale-110 transition-transform" />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                     <span className="text-[9px] font-black text-white uppercase tracking-widest">Change</span>
                   </div>
                </div>
                <h4 className="text-lg font-black text-foreground uppercase tracking-tight">Guest User</h4>
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">Free Tier License</p>
                <Button variant="outline" className="mt-6 w-full rounded-xl gap-2" onClick={() => window.dispatchEvent(new CustomEvent('open-pro-modal'))}>
                  <CreditCard className="h-4 w-4" />
                  Manage Plan
                </Button>
              </Card>
            </div>
          </motion.div>
        )}

        {activeTab === "security" && (
          <motion.div
            key="security"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="max-w-3xl"
          >
            <Card variant="glass" className="p-8">
              <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-6">Security Settings</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-background/40 border border-border-theme">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <Shield className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-foreground uppercase tracking-tight">Two-Factor Authentication</p>
                      <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Add an extra layer of security</p>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-xl h-10 px-4 text-[10px] font-black uppercase tracking-widest">Enable</Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-background/40 border border-border-theme opacity-50">
                   <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                      <Bell className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-foreground uppercase tracking-tight">Security Alerts</p>
                      <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Get notified of suspicious activity</p>
                    </div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {["team", "billing", "api"].includes(activeTab) && (
          <motion.div
            key="pro-gate"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <ProGate 
              title={tabs.find(t => t.id === activeTab)?.label + " Module"}
              description={`Unlock ${tabs.find(t => t.id === activeTab)?.label} to manage your team, billing, and API integration with enterprise-grade controls.`}
              icon={React.createElement(tabs.find(t => t.id === activeTab)?.icon || SettingsIcon, { className: "h-7 w-7" })}
              features={[
                "Advanced role-based access control",
                "Full billing history and PDF invoices",
                "Priority developer API endpoints",
                "SLA-backed uptime guarantees",
                "Direct technical support channel"
              ]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
