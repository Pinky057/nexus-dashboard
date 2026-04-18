import { Lock, Zap } from "lucide-react"

interface ProGateProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

export function ProGate({ title, description, icon, features }: ProGateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[480px] rounded-2xl border border-dashed border-zinc-800 bg-gradient-to-b from-zinc-900/40 to-zinc-950 p-10 text-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-indigo-600/5 rounded-2xl pointer-events-none" />
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

      {/* Icon */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600/10 ring-1 ring-inset ring-indigo-500/20 mb-6">
        <div className="text-indigo-400">{icon}</div>
        <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 ring-2 ring-zinc-950">
          <Lock className="h-2.5 w-2.5 text-white" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="mt-2 max-w-sm text-sm text-zinc-400 leading-relaxed">{description}</p>

      {/* Feature list */}
      <ul className="mt-6 space-y-2 text-left w-full max-w-xs">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-400">
            <Zap className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        <a
          href="https://buymeacoffee.com/ishratjahag"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
        >
          <Zap className="h-4 w-4" /> Unlock Pro Version
        </a>
        <span className="text-xs text-zinc-500">One-time purchase · Instant access</span>
      </div>
    </div>
  )
}
