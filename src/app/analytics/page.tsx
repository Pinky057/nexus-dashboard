export default function AnalyticsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Analytics</h1>
        <p className="text-sm text-zinc-400 mt-1">Deep dive into your platform's performance metrics.</p>
      </div>
      
      <div className="flex h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/20 p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 mb-4">
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-white">Advanced Analytics Module</h3>
        <p className="mt-2 max-w-sm text-sm text-zinc-400">
          The full analytics suite with custom date ranges and export capabilities is available in the Pro version.
        </p>
        <button className="mt-6 rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 transition-colors">
          Unlock Pro Version
        </button>
      </div>
    </div>
  );
}
