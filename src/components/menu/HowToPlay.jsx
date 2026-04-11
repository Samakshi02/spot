import { useRef, useState } from 'react'
import { RetroButton } from '../ui/RetroButton'

// Mini demo card used on both exhibits. The target star is the last one —
// filled on Exhibit A, empty on Exhibit B. The user learns by spotting it.
function BadgeCard({ variant, targetRef }) {
  const stars = variant === 'original' ? 5 : 4
  return (
    <div className="w-[180px] rounded-xl border border-[#d4c19c] bg-white shadow-[0_2px_8px_rgba(26,31,46,0.06)] p-3.5 space-y-2 select-none">
      <div className="text-[8px] font-mono font-semibold uppercase tracking-[0.2em] text-[#b8893a]">
        Detective Badge
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#1a1f2e] text-[#f5ecd7] font-serif text-sm font-bold flex items-center justify-center">
          JH
        </div>
        <div className="leading-tight">
          <div className="font-serif text-xs font-bold text-[#1a1f2e]">J. Harper</div>
          <div className="text-[9px] font-mono text-[#6b6456]">ID · 4471</div>
        </div>
      </div>
      <div className="flex items-center gap-0.5 text-[#b8893a]">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < stars
          const isTarget = variant === 'modified' && i === 4
          return (
            <span
              key={i}
              ref={isTarget ? targetRef : undefined}
              data-tutorial-target={isTarget ? 'true' : undefined}
              className={`text-sm leading-none ${filled ? 'text-[#b8893a]' : 'text-[#d4c19c]'}`}
            >
              {filled ? '★' : '☆'}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export function HowToPlay({ onBack }) {
  const [status, setStatus] = useState('intro') // 'intro' | 'wrong' | 'found'
  const [foundRect, setFoundRect] = useState(null)
  const exhibitBRef = useRef(null)
  const targetRef = useRef(null)
  const wrongTimeoutRef = useRef(null)

  const handleExhibitBClick = (e) => {
    if (status === 'found') return

    const targetEl = targetRef.current
    const exhibitEl = exhibitBRef.current
    if (!targetEl || !exhibitEl) return

    // Use a generous hit area around the target star (32px radius) so
    // the tutorial feels forgiving — this is a "show them the pattern"
    // moment, not a precision test.
    const targetRect = targetEl.getBoundingClientRect()
    const cx = targetRect.left + targetRect.width / 2
    const cy = targetRect.top + targetRect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const distance = Math.hypot(dx, dy)

    if (distance <= 32) {
      setFoundRect(targetRect)
      setStatus('found')
    } else {
      setStatus('wrong')
      clearTimeout(wrongTimeoutRef.current)
      wrongTimeoutRef.current = setTimeout(() => setStatus('intro'), 700)
    }
  }

  const instructionByStatus = {
    intro: 'Tap the difference on Exhibit B.',
    wrong: 'Not quite. Look closer — one detail is off.',
    found: 'Exactly. You have the eye.',
  }
  const instructionColor = {
    intro: 'text-[#6b6456]',
    wrong: 'text-[#8b3a3a]',
    found: 'text-[#5a7a4a]',
  }[status]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <div className="w-full max-w-[600px] case-file rounded-2xl p-8 md:p-10 animate-[spot-fade-in_0.4s_ease-out]">
        {/* Header ornament */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px flex-1 max-w-[60px] bg-[#b8893a]" />
          <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.25em] text-[#b8893a]">
            Field Training
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[#b8893a]" />
        </div>

        <div className="text-center mb-6">
          <div className="text-4xl mb-2" aria-hidden>🕵️</div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1f2e]">
            Your First Case
          </h2>
          <p className="font-serif italic text-sm text-[#2a3142] mt-1.5">
            Two badges. One detail is different.
          </p>
        </div>

        {/* Exhibits */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.15em] text-[#b8893a]">
              Exhibit A · Original
            </span>
            <BadgeCard variant="original" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.15em] text-[#b8893a]">
              Exhibit B · Modified
            </span>
            <div
              ref={exhibitBRef}
              onClick={handleExhibitBClick}
              className={`cursor-pointer rounded-xl transition-transform ${
                status === 'wrong' ? 'animate-[spot-shake_0.4s_ease-in-out]' : ''
              }`}
            >
              <BadgeCard variant="modified" targetRef={targetRef} />
            </div>
          </div>
        </div>

        {/* Found overlay pill */}
        {status === 'found' && foundRect && (
          <div
            className="pointer-events-none fixed z-50 animate-[spot-pop_0.3s_ease-out]"
            style={{
              left: foundRect.left - 6,
              top: foundRect.top - 4,
              width: foundRect.width + 12,
              height: foundRect.height + 8,
              border: '2px solid #5a7a4a',
              backgroundColor: 'rgba(90, 122, 74, 0.18)',
              borderRadius: 9999,
            }}
            aria-hidden
          />
        )}

        {/* Instruction */}
        <div className="mt-6 text-center min-h-[24px]">
          <p className={`font-serif italic text-sm transition-colors ${instructionColor}`}>
            {instructionByStatus[status]}
          </p>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-5 border-t border-[#1a1f2e]/10 flex flex-col items-center gap-2.5">
          <RetroButton
            variant="primary"
            size="md"
            onClick={onBack}
            disabled={status !== 'found'}
          >
            {status === 'found' ? "I'm ready →" : 'Find the difference to continue'}
          </RetroButton>
          <button
            type="button"
            onClick={onBack}
            className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#6b6456] hover:text-[#1a1f2e] transition-colors"
          >
            Skip training
          </button>
        </div>
      </div>
    </div>
  )
}
