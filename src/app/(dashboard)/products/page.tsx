export default function ProductsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Products</h1>
        <p className="text-sm text-zinc-400 mt-1">Manage your inventory, pricing, and product details.</p>
      </div>
      
      <div className="flex h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/20 p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 mb-4">
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-white">E-Commerce Module</h3>
        <p className="mt-2 max-w-sm text-sm text-zinc-400">
          The full inventory management system, including variations and SKU tracking, is available in the Pro version.
        </p>
        <button className="mt-6 rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 transition-colors">
          Unlock Pro Version
        </button>
      </div>
    </div>
  );
}
