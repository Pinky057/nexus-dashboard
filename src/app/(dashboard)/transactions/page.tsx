export default function TransactionsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Transactions</h1>
        <p className="text-sm text-zinc-400 mt-1">View payment history and manage refunds.</p>
      </div>
      
      <div className="flex h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/20 p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 mb-4">
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-white">Advanced Billing Module</h3>
        <p className="mt-2 max-w-sm text-sm text-zinc-400">
          Exportable invoices, detailed payment logs, and Stripe integration are included in the Pro version.
        </p>
        <button className="mt-6 rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 transition-colors">
          Unlock Pro Version
        </button>
      </div>
    </div>
  );
}
