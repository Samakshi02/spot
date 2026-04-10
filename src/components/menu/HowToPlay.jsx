import { RetroButton } from '../ui/RetroButton'

export function HowToPlay({ onBack }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <div className="w-full max-w-[600px] case-file rounded-2xl p-8 md:p-10 animate-[spot-fade-in_0.4s_ease-out]">
        {/* Header ornament */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px flex-1 max-w-[60px] bg-[#b8893a]" />
          <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.25em] text-[#b8893a]">
            Detective Briefing
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[#b8893a]" />
        </div>

        <div className="text-center mb-6">
          <div className="text-5xl mb-3" aria-hidden>🕵️</div>
          <h2 className="font-serif text-3xl font-bold text-[#1a1f2e]">
            The Investigation
          </h2>
          <p className="font-serif italic text-sm text-[#2a3142] mt-2">
            "A pattern-recognition exercise for those who notice things others don't."
          </p>
        </div>

        <div className="space-y-4 text-sm text-[#1a1f2e]">
          <div className="flex gap-3 items-start p-3 rounded-lg bg-[#fdf9ee]/50 border border-[#d4c19c]/40">
            <div className="w-8 h-8 shrink-0 rounded-full bg-[#b8893a]/15 border border-[#b8893a]/30 flex items-center justify-center font-serif font-bold text-[#8a6526]">
              1
            </div>
            <div className="flex-1 pt-0.5">
              <div className="font-serif font-semibold text-[#1a1f2e] mb-0.5">Compare the exhibits</div>
              <div className="text-[#6b6456]">
                Two pieces of evidence sit before you. They look the same. They are not.
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-start p-3 rounded-lg bg-[#fdf9ee]/50 border border-[#d4c19c]/40">
            <div className="w-8 h-8 shrink-0 rounded-full bg-[#b8893a]/15 border border-[#b8893a]/30 flex items-center justify-center font-serif font-bold text-[#8a6526]">
              2
            </div>
            <div className="flex-1 pt-0.5">
              <div className="font-serif font-semibold text-[#1a1f2e] mb-0.5">Mark your findings</div>
              <div className="text-[#6b6456]">
                Tap on <span className="font-semibold text-[#1a1f2e]">Exhibit B</span> where you spot a difference. Precision matters.
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-start p-3 rounded-lg bg-[#fdf9ee]/50 border border-[#d4c19c]/40">
            <div className="w-8 h-8 shrink-0 rounded-full bg-[#b8893a]/15 border border-[#b8893a]/30 flex items-center justify-center font-serif font-bold text-[#8a6526]">
              3
            </div>
            <div className="flex-1 pt-0.5">
              <div className="font-serif font-semibold text-[#1a1f2e] mb-0.5">Five lives, use them wisely</div>
              <div className="text-[#6b6456]">
                Every false lead costs you a life. Make five wrong calls and the case goes cold.
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-start p-3 rounded-lg bg-[#fdf9ee]/50 border border-[#d4c19c]/40">
            <div className="w-8 h-8 shrink-0 rounded-full bg-[#b8893a]/15 border border-[#b8893a]/30 flex items-center justify-center font-serif font-bold text-[#8a6526]">
              4
            </div>
            <div className="flex-1 pt-0.5">
              <div className="font-serif font-semibold text-[#1a1f2e] mb-0.5">Call in a clue</div>
              <div className="text-[#6b6456]">
                Stuck? You have <span className="font-semibold text-[#1a1f2e]">two flashlights</span> per case. Use them when the trail goes cold.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-[#1a1f2e]/10 text-center">
          <p className="font-serif italic text-xs text-[#6b6456] mb-4">
            Pro tip: the difference may be a single character, a shift in color, a missing pixel. Stay sharp, detective.
          </p>
          <RetroButton variant="primary" size="md" onClick={onBack}>
            I'm ready →
          </RetroButton>
        </div>
      </div>
    </div>
  )
}
