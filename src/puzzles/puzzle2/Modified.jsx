import { DiffZone } from '../../components/game/DiffZone'

export function Puzzle2Modified({ onFound, foundIds, hintingId }) {
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
          <DiffZone
            id={4}
            index={4}
            onFound={onFound}
            found={foundIds.includes(4)}
            hinting={hintingId === 4}
            className="w-full"
          >
            <input
              type="text"
              readOnly
              value="password123"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white"
            />
          </DiffZone>
        </div>
        <DiffZone
          id={1}
          index={1}
          onFound={onFound}
          found={foundIds.includes(1)}
          hinting={hintingId === 1}
          className="w-full"
        >
          <button
            type="button"
            className="w-full py-2.5 rounded-lg text-sm font-medium text-black bg-white border-2 border-black"
          >
            Sign Up
          </button>
        </DiffZone>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs text-slate-500">
            <span className="bg-white px-2">or continue with</span>
          </div>
        </div>
        <div className="flex gap-3">
          <DiffZone
            id={2}
            index={2}
            onFound={onFound}
            found={foundIds.includes(2)}
            hinting={hintingId === 2}
            className="flex-1"
          >
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2.5 border border-transparent rounded-lg text-sm font-medium text-transparent bg-white pointer-events-none select-none"
              aria-hidden
              tabIndex={-1}
            >
              <span className="w-5 h-5">&#8203;</span>
              Google
            </button>
          </DiffZone>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white"
          >
            <span className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center text-xs">⌘</span>
            Apple
          </button>
        </div>
        <DiffZone
          id={3}
          index={3}
          onFound={onFound}
          found={foundIds.includes(3)}
          hinting={hintingId === 3}
          className="w-full"
        >
          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}<span className="font-medium text-black">Sign in</span>
          </p>
        </DiffZone>
      </div>
    </div>
  )
}
