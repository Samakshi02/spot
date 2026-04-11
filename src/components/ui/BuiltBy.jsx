export function BuiltBy() {
  return (
    <div
      className="fixed bottom-3 right-3 z-40 pointer-events-none select-none"
      aria-hidden="false"
    >
      <div className="pointer-events-auto text-[9px] font-mono uppercase tracking-[0.18em] text-[#6b6456]/70 hover:text-[#1a1f2e] transition-colors">
        Built by{' '}
        <a
          href="https://samakshigoel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#6b6456]/80 hover:text-[#b8893a] underline decoration-[#b8893a]/30 hover:decoration-[#b8893a] underline-offset-2 transition-colors"
          aria-label="Built by Sam — visit samakshigoel.com"
        >
          Sam
        </a>
      </div>
    </div>
  )
}
