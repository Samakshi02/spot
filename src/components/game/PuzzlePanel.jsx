export function PuzzlePanel({
  label,
  children,
  interactive = false,
  shaking = false,
  onBackgroundClick,
}) {
  return (
    <div className="flex-1 min-w-0 flex flex-col">
      <div className="mt-4 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#b8893a]">
            Exhibit
          </span>
          <span className="font-serif italic text-sm text-[#2a3142]">{label}</span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#6b6456]">
          {interactive ? '· investigating ·' : '· reference ·'}
        </span>
      </div>
      <div
        className={`puzzle-panel-card bg-[#fdf9ee] border border-[#d4c19c] rounded-2xl flex-1 shadow-[0_4px_20px_rgba(26,31,46,0.08)] ${
          shaking ? 'animate-[spot-shake_0.4s_ease]' : ''
        }`}
        onClick={interactive ? onBackgroundClick : undefined}
      >
        <div className="puzzle-panel-inner p-4 md:p-6 bg-white flex items-center justify-center rounded-[15px] m-1.5">
          <div className="puzzle-panel-content w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
