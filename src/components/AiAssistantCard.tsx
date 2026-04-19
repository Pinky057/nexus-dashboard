"use client"

import { motion } from "framer-motion"
import { Sparkles, Send, Bot, MessageSquare, Zap, Target } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

export function AiAssistantCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800">
        <CardHeader className="border-b border-zinc-800/50 bg-zinc-900/30">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/20">
              <Sparkles className="h-4 w-4 text-indigo-400" />
            </div>
            <div>
              <CardTitle className="text-sm">AI Agent Command</CardTitle>
              <CardDescription className="text-[10px]">Natural language analytics & actions</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col gap-4 p-4">
          <div className="flex-1 space-y-3">
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Suggested Prompts</p>
            <div className="grid grid-cols-1 gap-2">
              {[
                { icon: Zap, text: "Analyze MRR churn risk" },
                { icon: Target, text: "Generate weekly growth report" },
                { icon: MessageSquare, text: "Summarize user feedback" },
              ].map((prompt, i) => (
                <button 
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-2.5 text-left text-xs text-zinc-300 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group"
                >
                  <prompt.icon className="h-3.5 w-3.5 text-zinc-500 group-hover:text-indigo-400" />
                  {prompt.text}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-auto">
            <Input 
              placeholder="Type a command..." 
              className="bg-zinc-950 border-zinc-800 pr-10 text-xs h-10 rounded-xl"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center text-zinc-100 hover:bg-indigo-500 transition-colors">
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
