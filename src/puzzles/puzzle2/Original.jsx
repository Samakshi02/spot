export function Puzzle2Original() {
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible flex flex-col max-w-sm mx-auto">
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 text-center">Create account</h2>
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-600">Email</label>
          <input
            type="email"
            readOnly
            value="you@example.com"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-600">Password</label>
          <input
            type="password"
            readOnly
            value="password123"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white"
          />
        </div>
        <button
          type="button"
          className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-black border-2 border-black"
        >
          Sign Up
        </button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs text-slate-500">
            <span className="bg-white px-2">or continue with</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white"
          >
            <span className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center text-xs">G</span>
            Google
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white"
          >
            <span className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center text-xs">⌘</span>
            Apple
          </button>
        </div>
        <p className="text-center text-sm text-slate-600">
          Already have an account? <span className="font-medium text-black">Log in</span>
        </p>
      </div>
    </div>
  )
}
