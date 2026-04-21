"use client"

import { motion } from "framer-motion"
import { Download, Trash2, Plus, Loader2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"

export default function ButtonsPage() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Buttons</h1>
        <p className="text-sm text-zinc-400 mt-1">A comprehensive set of button styles using our standardized component.</p>
      </div>

      <div className="grid gap-6">
        {/* Solid Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader>
              <CardTitle>Solid Variants</CardTitle>
              <CardDescription>Primary actions and major call-to-actions.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sizes */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Sizes</CardTitle>
              <CardDescription>standardized sizing for different contexts.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Plus className="h-4 w-4" /></Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* States & Icons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle>States & Icons</CardTitle>
              <CardDescription>Combining icons and handling interaction states.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button className="gap-2">
                <Plus className="h-4 w-4" /> Add New
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
              <Button variant="danger" className="gap-2">
                <Trash2 className="h-4 w-4" /> Delete
              </Button>
              <Button disabled className="gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Processing
              </Button>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
