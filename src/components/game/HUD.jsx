const difficultyColors = {
  easy: 'bg-[#5a7a4a]/15 text-[#5a7a4a] border-[#5a7a4a]/30',
  medium: 'bg-[#b8893a]/15 text-[#8a6526] border-[#b8893a]/30',
  hard: 'bg-[#8b3a3a]/15 text-[#8b3a3a] border-[#8b3a3a]/30',
  final: 'bg-[#1a1f2e]/15 text-[#1a1f2e] border-[#1a1f2e]/30',
}

const difficultyLabels = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
  final: 'Final',
}

function Stat({ label, children }) {
  return (
    <div className="flex flex-col items-start leading-none">
      <span className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-[#6b6456] mb-1.5">
        {label}
      </span>
      <div className="flex items-center h-5">{children}</div>
    </div>
  )
}

function Hearts({ livesRemaining, size = 'sm' }) {
  return (
    <div className="flex items-center gap-0.5" title={`${livesRemaining} lives remaining`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`${size === 'sm' ? 'text-sm' : 'text-xs'} leading-none transition-colors duration-200 ${
            i < livesRemaining ? 'text-[#8b3a3a]' : 'text-[#d4c19c]'
          }`}
        >
          {i < livesRemaining ? '♥' : '♡'}
        </span>
      ))}
    </div>
  )
}

export function HUD({
  puzzleIndex,
  puzzle,
  foundCount,
  livesRemaining,
  hintsRemaining,
  totalScore,
  soundEnabled,
  onHint,
  onToggleSound,
  onExit,
}) {
  const total = puzzle.totalDifferences
  const progressPct = (foundCount / total) * 100
  const difficultyChip = (
    <span
      className={`shrink-0 text-[9px] font-mono font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded border leading-none ${difficultyColors[puzzle.difficulty] ?? difficultyColors.easy}`}
    >
      {difficultyLabels[puzzle.difficulty] ?? puzzle.difficulty}
    </span>
  )

  const clueButton = (
    <button
      type="button"
      disabled={hintsRemaining === 0}
      onClick={onHint}
      className="relative flex items-center gap-1.5 px-2.5 sm:px-3 h-9 text-xs font-medium rounded-full border border-[#b8893a]/40 bg-[#fdf9ee] text-[#1a1f2e] hover:bg-[#f5ecd7] hover:border-[#b8893a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      title={`${hintsRemaining} hints remaining`}
    >
      <span className="text-sm">🔦</span>
      <span className="hidden sm:inline">Clue</span>
      <span className="inline-flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-[#b8893a]/20 text-[10px] font-bold text-[#8a6526] tabular-nums">
        {hintsRemaining}
      </span>
    </button>
  )

  const exitButton = (
    <button
      type="button"
      onClick={onExit}
      className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-[#1a1f2e]/15 bg-[#fdf9ee] text-[#6b6456] hover:bg-[#f5ecd7] hover:border-[#1a1f2e]/30 transition-colors"
      title="Exit to archive"
      aria-label="Exit to archive"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11.5L12 4l9 7.5" />
        <path d="M5 10v10h14V10" />
      </svg>
    </button>
  )

  const soundButton = (
    <button
      type="button"
      onClick={onToggleSound}
      className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-[#1a1f2e]/15 bg-[#fdf9ee] text-[#6b6456] hover:bg-[#f5ecd7] hover:border-[#1a1f2e]/30 transition-colors"
      title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
    >
      <span className="text-sm">{soundEnabled ? '🔊' : '🔇'}</span>
    </button>
  )

  return (
    <div className="w-full bg-[#fdf9ee]/95 backdrop-blur-md border-b border-[#d4c19c] px-4 py-3 shrink-0 sticky top-0 z-50 shadow-[0_1px_0_rgba(26,31,46,0.04)]">
      <div className="max-w-6xl mx-auto">
        {/* Mobile layout (< md) */}
        <div className="flex flex-col gap-2.5 md:hidden">
          {/* Row 1: Identity + Actions */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col leading-none min-w-0 flex-1">
              <span className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-[#6b6456] mb-1">
                Case № {String(puzzleIndex + 1).padStart(3, '0')} / 010
              </span>
              <div className="flex items-center gap-2 leading-normal min-w-0">
                <span className="font-serif text-sm font-bold text-[#1a1f2e] truncate">
                  {puzzle.name}
                </span>
                {difficultyChip}
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {clueButton}
              {soundButton}
              {exitButton}
            </div>
          </div>

          {/* Row 2: Lives · Progress · Score */}
          <div className="flex items-center gap-3">
            <Hearts livesRemaining={livesRemaining} size="xs" />
            <div className="flex-1 flex items-center gap-2 min-w-0">
              <div className="h-1.5 flex-1 bg-[#ebe0c2] rounded-full overflow-hidden border border-[#d4c19c]">
                <div
                  className="h-full bg-[#5a7a4a] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <span className="text-[10px] font-mono font-bold text-[#1a1f2e] tabular-nums shrink-0">
                {foundCount}<span className="text-[#6b6456] font-medium">/{total}</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 pl-2 border-l border-[#1a1f2e]/15">
              <span className="text-[9px] font-mono font-medium uppercase tracking-[0.1em] text-[#6b6456]">Score</span>
              <span className="font-mono text-xs font-bold text-[#1a1f2e] tabular-nums">{totalScore}</span>
            </div>
          </div>
        </div>

        {/* Desktop layout (md+) */}
        <div className="hidden md:flex items-center justify-between gap-6">
          {/* Left: Case identity */}
          <div className="flex flex-col leading-none min-w-0">
            <span className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-[#6b6456] mb-1.5">
              Case № {String(puzzleIndex + 1).padStart(3, '0')} / 010
            </span>
            <div className="flex items-center gap-2 leading-normal">
              <span className="font-serif text-base font-bold text-[#1a1f2e] truncate">
                {puzzle.name}
              </span>
              {difficultyChip}
            </div>
          </div>

          {/* Center: Evidence progress */}
          <div className="flex flex-col flex-1 max-w-sm gap-1.5">
            <div className="flex items-center justify-between leading-none">
              <span className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-[#6b6456]">
                Evidence Found
              </span>
              <span className="text-xs font-mono font-bold text-[#1a1f2e] tabular-nums">
                {foundCount}<span className="text-[#6b6456] font-medium"> / {total}</span>
              </span>
            </div>
            <div className="h-1.5 bg-[#ebe0c2] rounded-full overflow-hidden border border-[#d4c19c]">
              <div
                className="h-full bg-[#5a7a4a] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Right: Stats + Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Stat label="Lives">
                <Hearts livesRemaining={livesRemaining} />
              </Stat>

              <Stat label="Score">
                <span className="font-mono text-sm font-bold text-[#1a1f2e] tabular-nums leading-none">
                  {totalScore}
                </span>
              </Stat>
            </div>

            <div className="w-px h-9 bg-[#1a1f2e]/15" />

            <div className="flex items-center gap-1.5">
              {clueButton}
              {soundButton}
              {exitButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
