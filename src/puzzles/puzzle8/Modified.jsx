import { DiffZone } from '../../components/game/DiffZone'

export function Puzzle8Modified({ onFound, foundIds, hintingId }) {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible max-w-sm mx-auto">
      {/* Profile Header */}
      <div className="p-4 flex items-center gap-3 border-b border-slate-100">
        {/* Diff 4: Avatar gradient direction reversed (subtle) */}
        <DiffZone id={4} index={4} onFound={onFound} found={foundIds.includes(4)} hinting={hintingId === 4}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tl from-pink-400 to-purple-500" />
        </DiffZone>
        {/* Diff 5: Location changed from CA to NY (subtle) */}
        <DiffZone id={5} index={5} onFound={onFound} found={foundIds.includes(5)} hinting={hintingId === 5} className="flex-1">
          <div>
            <div className="text-xs font-semibold text-slate-900">sarah_designs</div>
            <div data-spot-target className="text-[10px] text-slate-400 inline-block">San Francisco, NY</div>
          </div>
        </DiffZone>
        <button type="button" className="text-slate-400 text-sm">...</button>
      </div>

      {/* Image */}
      <div className="w-full aspect-[4/3] bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 flex items-center justify-center">
        <div className="w-16 h-16 rounded-xl bg-white/50 backdrop-blur border border-white/60" />
      </div>

      {/* Actions */}
      <div className="p-3 space-y-2">
        <div className="flex items-center gap-3">
          {/* Diff 1: Heart changed from filled red to outlined */}
          <DiffZone id={1} index={1} onFound={onFound} found={foundIds.includes(1)} hinting={hintingId === 1}>
            <button type="button" className="text-slate-400 text-lg">♡</button>
          </DiffZone>
          <button type="button" className="text-slate-600 text-lg">💬</button>
          <button type="button" className="text-slate-600 text-lg">↗</button>
          <div className="flex-1" />
          <button type="button" className="text-slate-600 text-lg">🔖</button>
        </div>
        {/* Diff 2: Like count changed from 2,847 to 2,347 */}
        <DiffZone id={2} index={2} onFound={onFound} found={foundIds.includes(2)} hinting={hintingId === 2}>
          <div className="text-xs font-semibold text-slate-900">2,347 likes</div>
        </DiffZone>
        <div className="text-xs text-slate-700">
          <span className="font-semibold">sarah_designs</span>{' '}
          Exploring new color palettes for the upcoming project ✨ #design #creative
        </div>
        <div className="text-[10px] text-slate-400">View all 84 comments</div>

        {/* Comment - Diff 3: Username changed from mike_dev to mike.dev */}
        <DiffZone id={3} index={3} onFound={onFound} found={foundIds.includes(3)} hinting={hintingId === 3}>
          <div className="flex items-start gap-2 pt-1">
            <div className="w-5 h-5 rounded-full bg-emerald-200 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700">
              <span className="font-semibold">mike.dev</span>{' '}
              Love the vibes! 🔥
            </div>
          </div>
        </DiffZone>
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 rounded-full bg-amber-200 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700">
            <span className="font-semibold">jess.photo</span>{' '}
            This is stunning 😍
          </div>
        </div>

        {/* Diff 6: Time changed from "2 hours ago" to "3 hours ago" (subtle) */}
        <DiffZone id={6} index={6} onFound={onFound} found={foundIds.includes(6)} hinting={hintingId === 6}>
          <div className="text-[10px] text-slate-400 uppercase tracking-wider pt-1">3 hours ago</div>
        </DiffZone>
      </div>
    </div>
  )
}
