export function Puzzle7Original() {
  const stats = [
    { label: 'Total Revenue', value: '$48,352', change: '+12.5%', up: true },
    { label: 'Active Users', value: '2,847', change: '+8.2%', up: true },
    { label: 'Conversion Rate', value: '3.24%', change: '-0.4%', up: false },
    { label: 'Avg. Session', value: '4m 32s', change: '+1.1%', up: true },
  ]

  const chartBars = [38, 52, 45, 60, 55, 70, 65]
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const topPages = [
    { page: '/home', views: '12,847', pct: 82 },
    { page: '/pricing', views: '8,341', pct: 53 },
    { page: '/docs', views: '6,120', pct: 39 },
    { page: '/blog', views: '4,280', pct: 27 },
  ]

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Dashboard Overview</h2>
        <span className="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-500 font-medium">Last 7 days</span>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-slate-200 p-2.5 space-y-1">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider">{s.label}</div>
            <div className="text-base font-bold text-slate-900">{s.value}</div>
            <div className={`text-[10px] font-medium ${s.up ? 'text-emerald-600' : 'text-red-500'}`}>
              {s.change}
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="rounded-lg border border-slate-200 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-700">Weekly Traffic</span>
          <span className="text-[10px] text-slate-400">Visitors</span>
        </div>
        <div className="flex items-end gap-2" style={{ height: 80 }}>
          {chartBars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <div
                className="w-full bg-indigo-500 rounded-sm"
                style={{ height: `${h * 0.8}px` }}
              />
              <span className="text-[9px] text-slate-400 shrink-0">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Pages */}
      <div className="rounded-lg border border-slate-200 p-3 space-y-2">
        <span className="text-xs font-medium text-slate-700">Top Pages</span>
        <div className="space-y-2">
          {topPages.map((p) => (
            <div key={p.page} className="flex items-center gap-2">
              <span className="text-[11px] text-slate-600 w-16 shrink-0 font-mono">{p.page}</span>
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${p.pct}%` }} />
              </div>
              <span className="text-[10px] text-slate-500 w-12 text-right">{p.views}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
