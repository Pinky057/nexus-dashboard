import { ProGate } from "@/components/ProGate"
import { Settings } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Settings</h1>
        <p className="text-sm text-zinc-400 mt-1">Configure your workspace, team, and billing preferences.</p>
      </div>
      <ProGate
        title="Advanced Settings Module"
        description="Full workspace settings with team management, billing configuration, and API key management."
        icon={<Settings className="h-7 w-7" />}
        features={[
          "Profile & account settings",
          "Team member management & roles",
          "Billing & subscription management",
          "API key generation & management",
          "Notification preferences & webhooks",
        ]}
      />
    </div>
  )
}
