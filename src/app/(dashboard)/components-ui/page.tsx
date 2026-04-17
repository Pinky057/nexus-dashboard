export default function ComponentsPage() {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">UI Components</h1>
        <p className="text-sm text-zinc-400 mt-1">A collection of ready-to-use components for your application.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Buttons Section */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-lg font-medium text-white mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
              Primary Button
            </button>
            <button className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-colors">
              Secondary Button
            </button>
            <button className="rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
              Ghost Button
            </button>
            <button className="rounded-md bg-rose-500/10 px-3.5 py-2.5 text-sm font-semibold text-rose-500 shadow-sm hover:bg-rose-500/20 transition-colors">
              Destructive
            </button>
          </div>
        </div>

        {/* Inputs Section */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-lg font-medium text-white mb-4">Form Inputs</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium leading-6 text-zinc-300">Standard Input</label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border-0 bg-zinc-950 py-1.5 text-white shadow-sm ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                placeholder="Enter some text..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-zinc-300">Select Menu</label>
              <select className="mt-2 block w-full rounded-md border-0 bg-zinc-950 py-1.5 text-white shadow-sm ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 pr-10">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 lg:col-span-2">
          <h2 className="text-lg font-medium text-white mb-4">Badges & Indicators</h2>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center rounded-md bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
              Active
            </span>
            <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
              Processing
            </span>
            <span className="inline-flex items-center rounded-md bg-rose-400/10 px-2 py-1 text-xs font-medium text-rose-400 ring-1 ring-inset ring-rose-400/20">
              Failed
            </span>
            <span className="inline-flex items-center rounded-md bg-amber-400/10 px-2 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-400/20">
              Pending
            </span>
            <span className="inline-flex items-center rounded-md bg-zinc-400/10 px-2 py-1 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-400/20">
              Draft
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
