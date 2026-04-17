export default function UsersPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">User Management</h1>
        <p className="text-sm text-zinc-400 mt-1">Manage roles, permissions, and account settings.</p>
      </div>
      
      <div className="flex h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/20 p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 mb-4">
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-white">Complete CRM Module</h3>
        <p className="mt-2 max-w-sm text-sm text-zinc-400">
          Advanced user filtering, bulk actions, and detailed user profiles are included in the Pro version.
        </p>
        <button className="mt-6 rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 transition-colors">
          Unlock Pro Version
        </button>
      </div>
    </div>
  );
}
