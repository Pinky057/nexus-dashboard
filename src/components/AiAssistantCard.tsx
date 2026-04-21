"use client"

import { motion } from "framer-motion"
import { Sparkles, Send, Zap, Target, MessageSquare } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"

export function AiAssistantCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-gradient-to-br from-background to-muted/5 border-border-theme">
        <CardHeader className="border-b border-border-theme bg-muted/5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <Sparkles className="h-4 w-4 text-indigo-500" />
            </div>
            <div>
              <CardTitle className="text-sm font-bold">AI Agent Command</CardTitle>
              <CardDescription className="text-[10px] font-medium">Natural language analytics & actions</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col gap-4 p-4">
          <div className="flex-1 space-y-4">
            <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Suggested Prompts</p>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { icon: Zap, text: "Analyze MRR churn risk" },
                { icon: Target, text: "Generate weekly growth report" },
                { icon: MessageSquare, text: "Summarize user feedback" },
              ].map((prompt, i) => (
                <button 
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border-theme bg-background p-3 text-left text-[11px] font-bold text-foreground hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group shadow-sm"
                >
                  <prompt.icon className="h-3.5 w-3.5 text-muted group-hover:text-indigo-500" />
                  {prompt.text}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-auto">
            <Input 
              placeholder="Ask anything..." 
              className="bg-background border-border-theme pr-12 text-xs h-11 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500/20"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-500 transition-all shadow-md active:scale-95">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
