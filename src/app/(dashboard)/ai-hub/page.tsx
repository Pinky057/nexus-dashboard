"use client"

import * as React from "react"
import { Brain } from "lucide-react"
import { ProGate } from "@/components/ProGate"

export default function AIHubPage() {
  return (
    <div className="pb-12">
      <ProGate 
        title="AI Intelligence Hub"
        description="Leverage the power of advanced neural networks to analyze your business data. Automate insights, generate predictive forecasts, and interact with your personal AI assistant."
        icon={<Brain className="h-10 w-10 text-primary-500" />}
        features={[
          "Predictive Revenue Forecasting",
          "Automated Data Storytelling",
          "AI-Powered Chat Assistant",
          "Smart anomaly detection",
          "Sentiment analysis for support",
          "Generative reporting suite"
        ]}
      />
    </div>
  )
}
