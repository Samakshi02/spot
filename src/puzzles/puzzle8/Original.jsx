export function Puzzle8Original() {
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible max-w-sm mx-auto">
      {/* Profile Header */}
      <div className="p-4 flex items-center gap-3 border-b border-slate-100">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
        <div className="flex-1">
          <div className="text-xs font-semibold text-slate-900">sarah_designs</div>
          <div className="text-[10px] text-slate-400">San Francisco, CA</div>
        </div>
        <button type="button" className="text-slate-400 text-sm">...</button>
      </div>

      {/* Image */}
      <div className="w-full aspect-[4/3] bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 flex items-center justify-center">
        <div className="w-16 h-16 rounded-xl bg-white/50 backdrop-blur border border-white/60" />
      </div>

      {/* Actions */}
      <div className="p-3 space-y-2">
        <div className="flex items-center gap-3">
          <button type="button" className="text-red-500 text-lg">♥</button>
          <button type="button" className="text-slate-600 text-lg">💬</button>
          <button type="button" className="text-slate-600 text-lg">↗</button>
          <div className="flex-1" />
          <button type="button" className="text-slate-600 text-lg">🔖</button>
        </div>
        <div className="text-xs font-semibold text-slate-900">2,847 likes</div>
        <div className="text-xs text-slate-700">
          <span className="font-semibold">sarah_designs</span>{' '}
          Exploring new color palettes for the upcoming project ✨ #design #creative
        </div>
        <div className="text-[10px] text-slate-400">View all 84 comments</div>

        {/* Comment */}
        <div className="flex items-start gap-2 pt-1">
          <div className="w-5 h-5 rounded-full bg-emerald-200 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700">
            <span className="font-semibold">mike_dev</span>{' '}
            Love the vibes! 🔥
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 rounded-full bg-amber-200 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700">
            <span className="font-semibold">jess.photo</span>{' '}
            This is stunning 😍
          </div>
        </div>

        <div className="text-[10px] text-slate-400 uppercase tracking-wider pt-1">2 hours ago</div>
      </div>
    </div>
  )
}
