export function Puzzle3Original() {
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible flex flex-col max-w-sm mx-auto">
      <div className="p-6 space-y-4">
        <div className="text-sm font-medium text-slate-500">San Francisco</div>
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold text-slate-900">72°F</div>
          <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-3xl">☀️</div>
        </div>
        <div className="text-sm text-slate-600">Sunny</div>
        <div className="border-t border-slate-200 pt-4">
          <div className="flex justify-between gap-2 text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
              <div key={day} className="flex-1 min-w-0">
                <div className="text-xs font-medium text-slate-500">{day}</div>
                <div className="my-1 text-lg">{i === 2 ? '🌧️' : '☀️'}</div>
                <div className="text-xs font-semibold text-slate-700">{72 - i}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
