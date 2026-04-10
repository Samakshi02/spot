import { DiffZone } from '../../components/game/DiffZone'

export function Puzzle4Modified({ onFound, foundIds, hintingId }) {
  const cards = [
    {
      category: 'Science',
      categoryClass: 'bg-purple-100 text-purple-700',
      title: 'The Future of ML',
      author: 'Alex Rivera',
      date: 'Mar 12, 2024',
      liked: false,
      categoryDiff: 1,
      titleDiff: 5,
    },
    {
      category: 'Design',
      categoryClass: 'bg-emerald-100 text-emerald-700',
      title: 'UX Best Practices',
      author: 'Jane Smith',
      date: 'Mar 14, 2024',
      liked: false,
      authorDiff: 2,
    },
    {
      category: 'Dev',
      categoryClass: 'bg-amber-100 text-amber-700',
      title: 'Building with React',
      author: 'Sam Lee',
      date: 'Mar 10, 2024',
      liked: false,
      heartDiff: 3,
    },
    {
      category: 'Business',
      categoryClass: 'bg-slate-100 text-slate-700',
      title: 'Remote Teams',
      author: 'Jordan Kim',
      date: 'Mar 15, 2025',
      liked: false,
      dateDiff: 4,
    },
  ]
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible p-4">
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <article key={idx} className="rounded-xl border border-slate-200 overflow-visible bg-white">
            <div className="h-24 bg-slate-200" />
            <div className="p-3 space-y-1.5">
              {card.categoryDiff ? (
                <DiffZone id={card.categoryDiff} index={card.categoryDiff} onFound={onFound} found={foundIds.includes(card.categoryDiff)} hinting={hintingId === card.categoryDiff}>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${card.categoryClass}`}>
                    {card.category}
                  </span>
                </DiffZone>
              ) : (
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${card.categoryClass}`}>
                  {card.category}
                </span>
              )}
              {card.titleDiff ? (
                <DiffZone id={card.titleDiff} index={card.titleDiff} onFound={onFound} found={foundIds.includes(card.titleDiff)} hinting={hintingId === card.titleDiff}>
                  <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">{card.title}</h3>
                </DiffZone>
              ) : (
                <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">{card.title}</h3>
              )}
              {card.authorDiff ? (
                <DiffZone id={card.authorDiff} index={card.authorDiff} onFound={onFound} found={foundIds.includes(card.authorDiff)} hinting={hintingId === card.authorDiff}>
                  <p className="text-xs text-slate-500">{card.author}</p>
                </DiffZone>
              ) : (
                <p className="text-xs text-slate-500">{card.author}</p>
              )}
              {card.dateDiff ? (
                <DiffZone id={card.dateDiff} index={card.dateDiff} onFound={onFound} found={foundIds.includes(card.dateDiff)} hinting={hintingId === card.dateDiff}>
                  <p className="text-xs text-slate-400">{card.date}</p>
                </DiffZone>
              ) : (
                <p className="text-xs text-slate-400">{card.date}</p>
              )}
              {card.heartDiff ? (
                <DiffZone id={card.heartDiff} index={card.heartDiff} onFound={onFound} found={foundIds.includes(card.heartDiff)} hinting={hintingId === card.heartDiff}>
                  <button type="button" className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <span className="text-slate-300">♡</span>
                    <span>Like</span>
                  </button>
                </DiffZone>
              ) : (
                <button type="button" className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  {card.liked ? <span className="text-red-500">♥</span> : <span className="text-slate-300">♡</span>}
                  <span>Like</span>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
