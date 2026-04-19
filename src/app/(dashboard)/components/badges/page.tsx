"use client"

import { motion } from "framer-motion"
import { Check, X, Clock, AlertTriangle, Info, Zap, Star, Shield, Bell, Lock, Wifi, Flame } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/Alert"

export default function BadgesPage() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Badges & Indicators</h1>
        <p className="text-sm text-zinc-400 mt-1">A full collection of status indicators, labels, and tags using standardized components.</p>
      </div>

      <div className="grid gap-8">
        {/* Status Badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader>
              <CardTitle>Status Badges</CardTitle>
              <CardDescription>Use in tables and lists to indicate record status.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Badge variant="success" className="gap-1.5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Active
              </Badge>
              <Badge variant="danger" className="gap-1.5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> Inactive
              </Badge>
              <Badge variant="warning" className="gap-1.5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" /> Pending
              </Badge>
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 gap-1.5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" /> Processing
              </Badge>
              <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> Draft
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 gap-1.5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> Scheduled
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        {/* Icon Badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <Card>
            <CardHeader>
              <CardTitle>Icon Badges</CardTitle>
              <CardDescription>Badges with leading icons for contextual meaning.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Badge variant="success" className="gap-1.5">
                <Check className="h-3.5 w-3.5" /> Completed
              </Badge>
              <Badge variant="danger" className="gap-1.5">
                <X className="h-3.5 w-3.5" /> Rejected
              </Badge>
              <Badge variant="warning" className="gap-1.5">
                <Clock className="h-3.5 w-3.5" /> Awaiting
              </Badge>
              <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" /> Warning
              </Badge>
              <Badge className="bg-sky-500/10 text-sky-400 border-sky-500/20 gap-1.5">
                <Info className="h-3.5 w-3.5" /> Info
              </Badge>
              <Badge variant="default" className="gap-1.5">
                <Zap className="h-3.5 w-3.5" /> Pro
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notification Dots */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Notification Dots</CardTitle>
              <CardDescription>Count indicators and notification dots for icons and avatars.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-8">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 ring-1 ring-zinc-700">
                  <Bell className="h-5 w-5" />
                </div>
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-zinc-100 ring-2 ring-zinc-950">3</span>
              </div>
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 ring-1 ring-zinc-700">
                  <Lock className="h-5 w-5" />
                </div>
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber-400 ring-2 ring-zinc-950" />
              </div>
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 ring-1 ring-zinc-700">
                  <Wifi className="h-5 w-5" />
                </div>
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-zinc-950 animate-pulse" />
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm text-zinc-300">Live — System Operational</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Alert Banners */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle>Alert Banners</CardTitle>
              <CardDescription>Inline alerts for system messages and user feedback using the Alert component.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant="success">
                <Check className="h-4 w-4" />
                <AlertTitle>Successfully saved!</AlertTitle>
                <AlertDescription>Your changes have been saved to the cloud database.</AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Review required</AlertTitle>
                <AlertDescription>Your subscription will expire in 3 days. Please renew to avoid service interruption.</AlertDescription>
              </Alert>
              <Alert variant="danger">
                <X className="h-4 w-4" />
                <AlertTitle>Action failed</AlertTitle>
                <AlertDescription>We could not process your request at this time. Our engineers are investigating.</AlertDescription>
              </Alert>
              <Alert variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle>New feature available</AlertTitle>
                <AlertDescription>The AI Assistant panel is now live on your dashboard for Pro users.</AlertDescription>
              </Alert>
              <Alert variant="primary">
                <Flame className="h-4 w-4" />
                <AlertTitle>Upgrade to unlock more</AlertTitle>
                <AlertDescription>Get access to advanced analytics, exports, and more in Pro plan.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
