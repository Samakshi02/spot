export function Puzzle10Original() {
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
          <span className="text-[10px] text-slate-400">3 members</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {columns.map((col) => (
          <div key={col.title} className="space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${col.color}`} />
              <span className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider">{col.title}</span>
              <span className="text-[10px] text-slate-400 ml-auto">{col.count}</span>
            </div>
            <div className="space-y-2">
              {col.cards.map((card) => (
                <div key={card.title} className="rounded-lg border border-slate-200 p-2.5 space-y-2 bg-white">
                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-medium ${card.tagClass}`}>
                      {card.tag}
                    </span>
                    {card.priority && (
                      <span className={`text-[10px] font-bold ${card.priorityClass}`}>{card.priority}</span>
                    )}
                  </div>
                  <div className="text-[11px] font-medium text-slate-800 leading-snug">{card.title}</div>
                  <div className="flex items-center justify-between">
                    <div className={`w-4 h-4 rounded-full ${card.assignee}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
