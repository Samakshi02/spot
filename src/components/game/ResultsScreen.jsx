import { RetroButton } from '../ui/RetroButton'
import { DifferenceReveal } from './DifferenceReveal'

export function ResultsScreen({ state, actions }) {
  const {
    currentPuzzle,
    currentPuzzleIndex,
    totalPuzzles,
    puzzleOutcome,
    puzzleScore,
    wrongTaps,
    puzzleStartTime,
    puzzleEndTime,
    foundDiffIds,
  } = state

  if (!currentPuzzle) return null

  const completed = puzzleOutcome === 'completed'
  const isLastPuzzle = currentPuzzleIndex === totalPuzzles - 1

  let timeTakenSeconds = 0
  if (puzzleStartTime && puzzleEndTime) {
    timeTakenSeconds = Math.round(
      (new Date(puzzleEndTime) - new Date(puzzleStartTime)) / 1000,
    )
  }

  return (
    <div className="min-h-screen w-full py-8 px-4">
      <div className="w-full max-w-5xl mx-auto space-y-6">
        <div className="case-file rounded-2xl p-6 md:p-8 space-y-5 animate-[spot-fade-in_0.4s_ease-out]">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="text-[9px] font-mono font-medium uppercase tracking-[0.2em] text-[#6b6456] mb-1">
                Case № {String(currentPuzzleIndex + 1).padStart(3, '0')} · Report
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1f2e]">
                {currentPuzzle.name}
              </h2>
            </div>
            {/* Stamp */}
            <div
              className={`px-5 py-2 border-2 rounded font-serif text-sm font-black uppercase tracking-widest animate-[spot-stamp_0.6s_ease-out] ${
                completed
                  ? 'border-[#5a7a4a] text-[#5a7a4a] bg-[#5a7a4a]/5'
                  : 'border-[#8b3a3a] text-[#8b3a3a] bg-[#8b3a3a]/5'
              }`}
              style={{ transform: 'rotate(-3deg)' }}
            >
              {completed ? 'Case Closed' : 'Case Cold'}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#1a1f2e]/10">
            <div>
              <div className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-[#6b6456] mb-1">
                Score
              </div>
              <div className="font-serif text-2xl font-bold text-[#1a1f2e] tabular-nums">{puzzleScore}</div>
            </div>
            <div>
              <div className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-[#6b6456] mb-1">
                False Leads
              </div>
              <div className="font-serif text-2xl font-bold text-[#1a1f2e] tabular-nums">{wrongTaps}</div>
            </div>
            <div>
              <div className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-[#6b6456] mb-1">
                Time
              </div>
              <div className="font-serif text-2xl font-bold text-[#1a1f2e] tabular-nums">{timeTakenSeconds}s</div>
            </div>
            <div>
              <div className="text-[9px] font-mono font-medium uppercase tracking-[0.15em] text-[#6b6456] mb-1">
                Evidence
              </div>
              <div className="font-serif text-2xl font-bold text-[#1a1f2e] tabular-nums">
                {foundDiffIds.length}<span className="text-[#6b6456] text-lg">/{currentPuzzle.totalDifferences}</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {completed && (
              <RetroButton variant="primary" size="md" onClick={actions.goToNextPuzzle}>
                {isLastPuzzle ? 'See my score →' : 'Next case →'}
              </RetroButton>
            )}
            <RetroButton
              variant={completed ? 'ghost' : 'primary'}
              size="sm"
              onClick={actions.retryPuzzle}
            >
              Reopen case
            </RetroButton>
            <RetroButton variant="ghost" size="sm" onClick={actions.backToMenu}>
              Back to archive
            </RetroButton>
          </div>
        </div>

        <DifferenceReveal state={state} />
      </div>
    </div>
  )
}
