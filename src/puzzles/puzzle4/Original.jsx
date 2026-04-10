export function Puzzle4Original() {
  const cards = [
    { category: 'Technology', categoryClass: 'bg-blue-100 text-blue-700', title: 'The Future of AI', author: 'Alex Rivera', date: 'Mar 12, 2024', liked: false },
    { category: 'Design', categoryClass: 'bg-emerald-100 text-emerald-700', title: 'UX Best Practices', author: 'Jane Cooper', date: 'Mar 14, 2024', liked: false },
    { category: 'Dev', categoryClass: 'bg-amber-100 text-amber-700', title: 'Building with React', author: 'Sam Lee', date: 'Mar 10, 2024', liked: true },
    { category: 'Business', categoryClass: 'bg-slate-100 text-slate-700', title: 'Remote Teams', author: 'Jordan Kim', date: 'Mar 15, 2024', liked: false },
  ]
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible p-4">
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <article key={idx} className="rounded-xl border border-slate-200 overflow-visible bg-white">
            <div className="h-24 bg-slate-200" />
            <div className="p-3 space-y-1.5">
              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${card.categoryClass}`}>
                {card.category}
              </span>
              <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">{card.title}</h3>
              <p className="text-xs text-slate-500">{card.author}</p>
              <p className="text-xs text-slate-400">{card.date}</p>
              <button type="button" className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                {card.liked ? <span className="text-red-500">♥</span> : <span className="text-slate-300">♡</span>}
                <span>Like</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
