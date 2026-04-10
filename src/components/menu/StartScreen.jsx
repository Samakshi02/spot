import { RetroButton } from '../ui/RetroButton'

function CaseCard({ variant }) {
  const isEvidence = variant === 'evidence'
  return (
    <div className="relative w-28 md:w-32 rounded-lg bg-[#fdf9ee] border border-[#d4c19c] shadow-[0_4px_12px_rgba(26,31,46,0.12)] overflow-visible">
      <div className="h-14 bg-gradient-to-br from-[#ebe0c2] to-[#d4c19c] rounded-t-lg flex items-center justify-center">
        <div className="w-7 h-7 rounded bg-[#b8893a]/40" />
      </div>
      <div className="p-2 space-y-1">
        <div className="h-1.5 w-3/4 bg-[#d4c19c] rounded-full" />
        <div className="h-1.5 w-1/2 bg-[#ebe0c2] rounded-full" />
        <div className="flex items-center justify-between pt-1">
          <div className="h-2 w-6 bg-[#2a3142] rounded-full" />
          <div className={`h-3 w-8 rounded-full ${isEvidence ? 'bg-[#5a7a4a]' : 'bg-[#1a1f2e]'}`} />
        </div>
      </div>
      {isEvidence && (
        <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full border-[3px] border-[#5a7a4a] bg-[#5a7a4a]/15 animate-[spot-pop_0.8s_ease-out]" />
      )}
    </div>
  )
}

export function StartScreen({ onPlay, onHowToPlay }) {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen px-4 py-8 relative overflow-hidden">
      {/* Background investigation decorations */}
      <div className="absolute top-12 left-10 text-5xl opacity-10 rotate-12 hidden md:block select-none" aria-hidden>🔍</div>
      <div className="absolute bottom-20 right-16 text-4xl opacity-10 -rotate-6 hidden md:block select-none" aria-hidden>🗂️</div>
      <div className="absolute top-24 right-24 text-3xl opacity-10 rotate-6 hidden md:block select-none" aria-hidden>📎</div>
      <div className="absolute bottom-28 left-20 text-3xl opacity-10 -rotate-12 hidden md:block select-none" aria-hidden>🖊️</div>

      <div className="relative w-full max-w-[560px] case-file rounded-2xl p-8 md:p-10 text-center">
        {/* Case file header stamp */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px flex-1 max-w-[60px] bg-[#1a1f2e]/20" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#6b6456]">
            <span>Case File</span>
            <span className="text-[#b8893a]">№ 001</span>
          </div>
          <div className="h-px flex-1 max-w-[60px] bg-[#1a1f2e]/20" />
        </div>

        {/* Title */}
        <h1 className="font-serif font-black text-7xl md:text-8xl tracking-tighter text-[#1a1f2e] leading-[0.9]">
          SPOT
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-[#b8893a]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#b8893a]">
            A detective's game
          </span>
          <span className="h-px w-8 bg-[#b8893a]" />
        </div>

        {/* Tagline */}
        <p className="font-serif italic text-base md:text-lg text-[#2a3142] mt-6 mb-8 max-w-sm mx-auto leading-snug">
          "Corporate wants you to find the differences between these two images."
        </p>

        {/* Mini demo */}
        <div className="flex items-center justify-center gap-5 md:gap-7 mb-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#6b6456]">Exhibit A</span>
            <CaseCard variant="original" />
          </div>
          <div className="font-serif text-3xl text-[#b8893a]">≠</div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#6b6456]">Exhibit B</span>
            <CaseCard variant="evidence" />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-5 mb-8 text-[10px] font-mono uppercase tracking-wider text-[#6b6456]">
          <div className="flex items-center gap-1.5">
            <span className="text-[#b8893a]">◆</span>
            <span>10 cases</span>
          </div>
          <div className="w-px h-3 bg-[#1a1f2e]/20" />
          <div className="flex items-center gap-1.5">
            <span className="text-[#b8893a]">◆</span>
            <span>5 lives</span>
          </div>
          <div className="w-px h-3 bg-[#1a1f2e]/20" />
          <div className="flex items-center gap-1.5">
            <span className="text-[#b8893a]">◆</span>
            <span>2 hints</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 items-center">
          <RetroButton
            variant="primary"
            size="lg"
            className="w-full max-w-[300px]"
            onClick={onPlay}
          >
            Open the case file →
          </RetroButton>
          <button
            type="button"
            onClick={onHowToPlay}
            className="text-xs font-mono uppercase tracking-wider text-[#6b6456] hover:text-[#1a1f2e] underline underline-offset-4 transition-colors"
          >
            Read the briefing
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-[#1a1f2e]/10">
          <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#6b6456]">
            Classified · For Detective Eyes Only
          </p>
        </div>
      </div>
    </div>
  )
}
