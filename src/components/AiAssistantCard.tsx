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
      <Card className="h-full flex flex-col overflow-hidden bg-background/5 backdrop-blur-3xl border-2 border-border-theme rounded-[2.5rem] shadow-premium">
        <CardHeader className="border-b border-border-theme bg-transparent px-8 py-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/10 border border-primary-500/20 shadow-[0_0_15px_var(--brand-glow)]">
              <Sparkles className="h-5 w-5 text-primary-500" />
            </div>
            <div>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-foreground">AI Agent Command</CardTitle>
              <CardDescription className="text-[10px] font-black uppercase tracking-[0.15em] text-muted/60">Natural language analytics & actions</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col gap-6 p-8">
          <div className="flex-1 space-y-5">
            <p className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">Suggested Prompts</p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: Zap, text: "Analyze MRR churn risk" },
                { icon: Target, text: "Generate weekly growth report" },
                { icon: MessageSquare, text: "Summarize user feedback" },
              ].map((prompt, i) => (
                <button 
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-border-theme bg-transparent px-5 py-4 text-left text-[11px] font-black text-foreground uppercase tracking-wider hover:border-primary-500/50 hover:bg-primary-500/5 hover:shadow-premium transition-all group"
                >
                  <prompt.icon className="h-4 w-4 text-muted/40 group-hover:text-primary-500 transition-colors" />
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
