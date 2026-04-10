import { useState } from 'react'
import { RetroButton } from '../ui/RetroButton'

export function FinalScoreScreen({ state, actions }) {
  const { totalScore } = state
  const [shareLabel, setShareLabel] = useState('Share this game')

  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
    const shareText = `I just closed all 10 cases in SPOT with a score of ${totalScore}. Think you can out-detective me?`
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title: 'SPOT — The Detective Game', text: shareText, url: shareUrl })
        return
      }
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
        setShareLabel('Link copied ✓')
        setTimeout(() => setShareLabel('Share this game'), 2000)
      }
    } catch {
      // user dismissed share sheet — no-op
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Background flourishes */}
      <div className="absolute top-16 left-12 text-5xl opacity-10 rotate-12 hidden md:block select-none" aria-hidden>🎖️</div>
      <div className="absolute bottom-20 right-16 text-5xl opacity-10 -rotate-6 hidden md:block select-none" aria-hidden>🗂️</div>
      <div className="absolute top-24 right-24 text-4xl opacity-10 hidden md:block select-none" aria-hidden>📜</div>

      <div className="relative w-full max-w-[520px] case-file rounded-2xl p-8 md:p-10 text-center animate-[spot-fade-in_0.6s_ease-out]">
        {/* Header ornament */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[80px] bg-[#b8893a]" />
          <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.25em] text-[#b8893a]">
            Case Archive Complete
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-[#b8893a]" />
        </div>

        {/* Medal */}
        <div className="text-6xl mb-4 animate-[spot-pop_0.6s_ease-out]" aria-hidden>🎖️</div>

        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl font-black text-[#1a1f2e] leading-tight">
          The Case is Closed
        </h2>
        <p className="font-serif italic text-base text-[#2a3142] mt-2">
          Detective, your work here is done.
        </p>

        {/* Score stamp */}
        <div className="my-8 inline-block px-8 py-5 border-2 border-[#b8893a] rounded-lg bg-[#b8893a]/5">
          <div className="text-[9px] font-mono font-semibold uppercase tracking-[0.25em] text-[#b8893a] mb-1">
            Final Score
          </div>
          <div className="font-serif font-black text-6xl text-[#1a1f2e] tabular-nums leading-none">
            {totalScore}
          </div>
        </div>

        {/* Commendation */}
        <p className="text-sm text-[#2a3142] font-serif italic max-w-sm mx-auto leading-relaxed">
          "Every pixel has been inspected. Every detail catalogued. The design department is both impressed and slightly unsettled."
        </p>
        <p className="text-[10px] font-mono uppercase tracking-wider text-[#6b6456] mt-2">
          — Chief Inspector
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6 mt-6 border-t border-[#1a1f2e]/10">
          <RetroButton variant="primary" size="md" onClick={actions.playAgain}>
            Reopen the archive →
          </RetroButton>
          <RetroButton variant="outline" size="md" onClick={handleShare}>
            {shareLabel}
          </RetroButton>
        </div>
      </div>
    </div>
  )
}
