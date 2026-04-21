"use client"

import { motion } from "framer-motion"
import { Eye, EyeOff, Search, User, Mail, Lock } from "lucide-react"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"
import { Select } from "@/components/ui/Select"
import { Switch } from "@/components/ui/Switch"

export default function FormsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Forms</h1>
        <p className="text-sm text-muted mt-1 uppercase tracking-widest font-black opacity-60">Pre-built form layouts using our standardized UI library.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Basic Contact Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Basic user input form with labels and validation styles.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Jane" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="jane@company.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Select id="subject">
                  <option>General Inquiry</option>
                  <option>Billing Support</option>
                  <option>Technical Issue</option>
                  <option>Other</option>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="Write your message here..." className="resize-none" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Profile Settings Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Account settings form with avatar upload and toggles.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white text-xl font-bold shrink-0 shadow-lg shadow-primary-500/20">
                  P
                </div>
                <div>
                  <Button variant="secondary" size="sm">Change Photo</Button>
                  <p className="text-xs text-muted mt-1.5 font-bold uppercase tracking-widest opacity-60">JPG or PNG. Max 2MB.</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="display-name">Display Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                  <Input id="display-name" defaultValue="Admin User" className="pl-9" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="profile-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input id="profile-email" type="email" defaultValue="admin@synthex.io" className="pl-9" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="profile-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input id="profile-password" type={showPassword ? "text" : "password"} defaultValue="supersecret123" className="pl-9 pr-10" />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute inset-y-0 right-3 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div>
                  <Label className="text-sm font-medium text-zinc-300">Email Notifications</Label>
                  <p className="text-xs text-zinc-500">Receive weekly digest emails</p>
                </div>
                <Switch 
                  checked={notificationsEnabled} 
                  onCheckedChange={setNotificationsEnabled} 
                />
              </div>
            </CardContent>
            <CardFooter className="gap-3">
              <Button className="flex-1">Save Changes</Button>
              <Button variant="secondary">Cancel</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Input States & Search */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader>
            <CardTitle>Input States & Variants</CardTitle>
            <CardDescription>All input states including error, success, and disabled.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-1.5">
                <Label>Default</Label>
                <Input placeholder="Default input" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-emerald-400">Success</Label>
                <Input defaultValue="Valid value" className="border-emerald-500 focus-visible:ring-emerald-500" />
                <p className="mt-1 text-xs text-emerald-400">Looks good!</p>
              </div>
              <div className="space-y-1.5">
                <Label className="text-rose-400">Error</Label>
                <Input defaultValue="invalid@" className="border-rose-500 focus-visible:ring-rose-500" />
                <p className="mt-1 text-xs text-rose-400">Please enter a valid email.</p>
              </div>
              <div className="space-y-1.5">
                <Label className="text-zinc-500">Disabled</Label>
                <Input disabled defaultValue="Cannot edit" className="bg-zinc-900/50" />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <Label>Search Input</Label>
                <div className="relative">
                  <Search className="absolute inset-y-0 left-3 h-full w-4 text-zinc-500 pointer-events-none" />
                  <Input placeholder="Search users, orders, data..." className="pl-9" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Selection Controls */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
        <Card>
          <CardHeader>
            <CardTitle>Selection Controls</CardTitle>
            <CardDescription>Checkboxes and radio buttons for multi-choice and single-choice inputs.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-medium text-zinc-400">Notification Preferences</p>
              <div className="space-y-3">
                {["Email notifications", "Push notifications", "SMS alerts", "Weekly digest"].map((label, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked={i < 2} className="h-4 w-4 rounded border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-zinc-950 transition-all" />
                    <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium text-zinc-400">Billing Cycle</p>
              <div className="space-y-3">
                {["Monthly - $12/mo", "Quarterly - $30/qtr", "Yearly - $99/yr (Best Value)"].map((label, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="billing-cycle" defaultChecked={i === 2} className="h-4 w-4 border-zinc-700 bg-zinc-950 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-zinc-950 transition-all" />
                    <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
