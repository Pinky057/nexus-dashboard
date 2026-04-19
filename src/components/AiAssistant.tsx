"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, X, Send, Sparkles, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-zinc-100 shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 z-50",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <Bot className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Card className="flex h-[500px] w-[380px] flex-col overflow-hidden bg-zinc-950 border-zinc-800 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10">
                    <Sparkles className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100">Synthex AI</h3>
                    <p className="text-xs text-zinc-400">Secure Admin Assistant</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-zinc-400"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Chat Body (Mocked Conversation) */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-sm bg-indigo-600 px-4 py-2 text-sm text-zinc-100 max-w-[85%]">
                    Can you delete all user accounts that haven&apos;t logged in for 90 days?
                  </div>
                </div>

                {/* AI Response showing Human-in-the-Loop Security */}
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-sm bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-zinc-300 max-w-[90%]">
                    <p>I have scanned the database and found <strong>12 inactive accounts</strong> matching your criteria.</p>
                    
                    <div className="mt-3 rounded-lg border border-rose-500/30 bg-rose-500/5 p-3">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-rose-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-rose-200">Action Required</p>
                          <p className="text-xs text-zinc-400 mt-1">Please confirm this destructive action. This cannot be undone.</p>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="danger" size="sm" className="flex-1 text-[11px] h-8 bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 shadow-none border border-rose-500/30">
                          Confirm Deletion
                        </Button>
                        <Button variant="secondary" size="sm" className="flex-1 text-[11px] h-8">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="border-t border-zinc-800 bg-zinc-900/50 p-3">
                <form className="flex items-center gap-2">
                  <Input 
                    placeholder="Ask the AI assistant..." 
                    className="flex-1 rounded-full h-9 bg-zinc-950"
                  />
                  <Button size="icon" className="h-9 w-9 rounded-full shrink-0">
                    <Send className="h-4 w-4 ml-0.5" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
