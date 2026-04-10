import { DiffZone } from '../../components/game/DiffZone'

export function Puzzle10Modified({ onFound, foundIds, hintingId }) {
  const columns = [
    {
      title: 'To Do',
      count: 3,
      color: 'bg-slate-400',
      cards: [
        { title: 'Update user onboarding flow', tag: 'Feature', tagClass: 'bg-blue-100 text-blue-700', assignee: 'bg-pink-200', priority: '!', priorityClass: 'text-amber-500' },
        { title: 'Fix pagination bug on mobile', tag: 'Bug', tagClass: 'bg-red-100 text-red-600', assignee: 'bg-emerald-200', priority: '!!', priorityClass: 'text-red-500' },
        { title: 'Write API documentation', tag: 'Docs', tagClass: 'bg-purple-100 text-purple-600', assignee: 'bg-sky-200', priority: null },
      ],
    },
    {
      title: 'In Progress',
      count: 2,
      color: 'bg-blue-500',
      cards: [
        { title: 'Redesign settings page', tag: 'Design', tagClass: 'bg-emerald-100 text-emerald-700', assignee: 'bg-amber-200', priority: '!', priorityClass: 'text-amber-500' },
        { title: 'Migrate to new auth provider', tag: 'Backend', tagClass: 'bg-orange-100 text-orange-600', assignee: 'bg-pink-200', priority: '!!', priorityClass: 'text-red-500' },
      ],
    },
    {
      title: 'Done',
      count: 2,
      color: 'bg-emerald-500',
      cards: [
        { title: 'Set up CI/CD pipeline', tag: 'DevOps', tagClass: 'bg-slate-100 text-slate-600', assignee: 'bg-violet-200', priority: null },
        { title: 'Launch landing page v2', tag: 'Feature', tagClass: 'bg-blue-100 text-blue-700', assignee: 'bg-emerald-200', priority: null },
      ],
    },
  ]

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Project Board</h2>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-pink-200 border-2 border-white" />
            <div className="w-5 h-5 rounded-full bg-emerald-200 border-2 border-white" />
            <div className="w-5 h-5 rounded-full bg-sky-200 border-2 border-white" />
          </div>
          {/* Diff 7: "3 members" changed to "4 members" (subtle) */}
          <DiffZone id={7} index={7} onFound={onFound} found={foundIds.includes(7)} hinting={hintingId === 7}>
            <span className="text-[10px] text-slate-400">4 members</span>
          </DiffZone>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {columns.map((col, colIdx) => (
          <div key={col.title} className="space-y-2">
            <div className="flex items-center gap-2">
              {/* Diff 6: "Done" column dot changed from green to blue (subtle) */}
              {colIdx === 2 ? (
                <DiffZone id={6} index={6} onFound={onFound} found={foundIds.includes(6)} hinting={hintingId === 6}>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </DiffZone>
              ) : (
                <div className={`w-2 h-2 rounded-full ${col.color}`} />
              )}
              <span className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider">{col.title}</span>
              <span className="text-[10px] text-slate-400 ml-auto">{col.count}</span>
            </div>
            <div className="space-y-2">
              {col.cards.map((card, cardIdx) => {
                // Diff 1: First card tag "Feature" changed to "Enhancement"
                const isDiff1 = colIdx === 0 && cardIdx === 0
                // Diff 2: Bug card priority "!!" changed to "!"
                const isDiff2 = colIdx === 0 && cardIdx === 1
                // Diff 3: "Redesign settings page" changed to "Redesign settings panel"
                const isDiff3 = colIdx === 1 && cardIdx === 0
                // Diff 4: Backend card assignee color changed from pink to violet (subtle)
                const isDiff4 = colIdx === 1 && cardIdx === 1
                // Diff 5: "Launch landing page v2" changed to "Launch landing page v3"
                const isDiff5 = colIdx === 2 && cardIdx === 1

                return (
                  <div key={card.title} className="rounded-lg border border-slate-200 p-2.5 space-y-2 bg-white">
                    <div className="flex items-center justify-between">
                      {isDiff1 ? (
                        <DiffZone id={1} index={1} onFound={onFound} found={foundIds.includes(1)} hinting={hintingId === 1}>
                          <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-medium ${card.tagClass}`}>
                            Enhancement
                          </span>
                        </DiffZone>
                      ) : (
                        <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-medium ${card.tagClass}`}>
                          {card.tag}
                        </span>
                      )}
                      {isDiff2 ? (
                        <DiffZone id={2} index={2} onFound={onFound} found={foundIds.includes(2)} hinting={hintingId === 2} className="-m-2 p-2">
                          <span data-spot-target className={`text-[10px] font-bold ${card.priorityClass}`}>!</span>
                        </DiffZone>
                      ) : (
                        card.priority && (
                          <span className={`text-[10px] font-bold ${card.priorityClass}`}>{card.priority}</span>
                        )
                      )}
                    </div>
                    {isDiff3 ? (
                      <DiffZone id={3} index={3} onFound={onFound} found={foundIds.includes(3)} hinting={hintingId === 3}>
                        <div className="text-[11px] font-medium text-slate-800 leading-snug">Redesign settings panel</div>
                      </DiffZone>
                    ) : isDiff5 ? (
                      <DiffZone id={5} index={5} onFound={onFound} found={foundIds.includes(5)} hinting={hintingId === 5}>
                        <div className="text-[11px] font-medium text-slate-800 leading-snug">Launch landing page v3</div>
                      </DiffZone>
                    ) : (
                      <div className="text-[11px] font-medium text-slate-800 leading-snug">{card.title}</div>
                    )}
                    <div className="flex items-center justify-between">
                      {isDiff4 ? (
                        <DiffZone id={4} index={4} onFound={onFound} found={foundIds.includes(4)} hinting={hintingId === 4}>
                          <div className="w-4 h-4 rounded-full bg-violet-200" />
                        </DiffZone>
                      ) : (
                        <div className={`w-4 h-4 rounded-full ${card.assignee}`} />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
