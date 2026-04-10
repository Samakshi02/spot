import { DiffZone } from '../../components/game/DiffZone'

export function Puzzle3Modified({ onFound, foundIds, hintingId }) {
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible flex flex-col max-w-sm mx-auto">
      <div className="p-6 space-y-4">
        <DiffZone id={3} index={3} onFound={onFound} found={foundIds.includes(3)} hinting={hintingId === 3}>
          <div className="text-sm font-medium text-slate-500">San Diego</div>
        </DiffZone>
        <div className="flex items-center justify-between">
          <DiffZone id={1} index={1} onFound={onFound} found={foundIds.includes(1)} hinting={hintingId === 1}>
            <div className="text-4xl font-bold text-slate-900">72°C</div>
          </DiffZone>
          <DiffZone id={2} index={2} onFound={onFound} found={foundIds.includes(2)} hinting={hintingId === 2}>
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-3xl">☁️</div>
          </DiffZone>
        </div>
        <div className="text-sm text-slate-600">Sunny</div>
        <div className="border-t border-slate-200 pt-4">
          <div className="flex justify-between gap-2 text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
              <div key={day} className="flex-1 min-w-0">
                <div className="text-xs font-medium text-slate-500">{day}</div>
                {i === 2 ? (
                  <DiffZone id={4} index={4} onFound={onFound} found={foundIds.includes(4)} hinting={hintingId === 4} className="mx-auto">
                    <div className="my-1 text-lg">❄️</div>
                  </DiffZone>
                ) : (
                  <div className="my-1 text-lg">☀️</div>
                )}
                <div className="text-xs font-semibold text-slate-700">{72 - i}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
