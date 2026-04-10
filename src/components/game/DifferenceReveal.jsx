export function DifferenceReveal({ state }) {
  const { currentPuzzle, foundDiffIds } = state
  if (!currentPuzzle) return null

  const { OriginalComponent, ModifiedComponent, differences } = currentPuzzle

  return (
    <div className="case-file rounded-2xl p-6 md:p-8 space-y-5 w-full">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="text-[9px] font-mono font-medium uppercase tracking-[0.2em] text-[#6b6456] mb-1">
            Case Evidence
          </div>
          <h3 className="font-serif text-xl font-bold text-[#1a1f2e]">
            The Missing Details
          </h3>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-[#6b6456]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5a7a4a]" />
            <span>Found</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4c19c] border border-[#b8893a]/40" />
            <span>Missed</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="flex-1 min-w-0">
          <div className="mb-2 text-[9px] font-mono font-semibold uppercase tracking-[0.15em] text-[#b8893a]">
            Exhibit A · Original
          </div>
          <div className="bg-[#fdf9ee] border border-[#d4c19c] rounded-xl overflow-visible shadow-[0_2px_8px_rgba(26,31,46,0.06)]">
            <div className="p-4 md:p-6 bg-white min-h-[200px] flex items-center justify-center rounded-[11px] m-1.5">
              <div className="w-full max-w-md">
                <OriginalComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-2 text-[9px] font-mono font-semibold uppercase tracking-[0.15em] text-[#b8893a]">
            Exhibit B · Modified
          </div>
          <div className="bg-[#fdf9ee] border border-[#d4c19c] rounded-xl overflow-visible shadow-[0_2px_8px_rgba(26,31,46,0.06)]">
            <div className="p-4 md:p-6 bg-white min-h-[200px] flex items-center justify-center rounded-[11px] m-1.5">
              <div className="w-full max-w-md">
                <ModifiedComponent
                  onFound={() => {}}
                  foundIds={differences.map((d) => d.id)}
                  hintingId={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ol className="space-y-2.5 text-sm text-[#1a1f2e] w-full pt-2 border-t border-[#1a1f2e]/10">
        {differences.map((diff, index) => {
          const found = foundDiffIds.includes(diff.id)
          return (
            <li key={diff.id} className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-serif font-bold text-xs leading-none border-2 ${
                  found
                    ? 'bg-[#5a7a4a] text-[#f5ecd7] border-[#4a6a3a]'
                    : 'bg-[#ebe0c2] text-[#6b6456] border-[#d4c19c]'
                }`}
              >
                {index + 1}
              </span>
              <span className={found ? 'text-[#1a1f2e]' : 'text-[#6b6456] italic'}>
                {diff.description}
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
