export function Puzzle5Original() {
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible flex flex-col max-w-sm mx-auto p-5">
      <div className="w-36 h-36 rounded-lg mx-auto mb-4 overflow-hidden relative shadow-lg" style={{ background: 'linear-gradient(160deg, #0f0c29 0%, #302b63 40%, #24243e 100%)' }}>
        {/* Stars */}
        <div className="absolute top-3 left-4 w-1 h-1 rounded-full bg-white/70" />
        <div className="absolute top-6 left-10 w-0.5 h-0.5 rounded-full bg-white/50" />
        <div className="absolute top-4 right-6 w-1 h-1 rounded-full bg-white/60" />
        <div className="absolute top-8 right-10 w-0.5 h-0.5 rounded-full bg-white/40" />
        <div className="absolute top-5 left-20 w-0.5 h-0.5 rounded-full bg-white/50" />
        <div className="absolute top-10 left-6 w-0.5 h-0.5 rounded-full bg-white/30" />
        <div className="absolute top-2 left-16 w-0.5 h-0.5 rounded-full bg-white/60" />
        {/* Moon glow */}
        <div className="absolute top-6 right-5 w-8 h-8 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,210,100,0.3) 0%, transparent 70%)' }} />
        <div className="absolute top-7 right-6 w-6 h-6 rounded-full" style={{ background: 'linear-gradient(135deg, #ffd700 0%, #ffaa00 100%)' }} />
        <div className="absolute top-7.5 right-5.5 w-4 h-4 rounded-full" style={{ background: 'linear-gradient(160deg, #0f0c29 0%, #302b63 100%)', top: '31px', right: '21px' }} />
        {/* Road / horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: 'linear-gradient(0deg, #1a1a2e 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{ width: '2px', height: '32px', background: 'linear-gradient(0deg, #ffd700 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-600/50" style={{ bottom: '28px' }} />
        {/* Title text */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <div className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/90">Midnight Drive</div>
          <div className="text-[5px] uppercase tracking-[0.2em] text-white/40 mt-0.5">The Neon Lights</div>
        </div>
      </div>
      <h3 className="text-base font-semibold text-slate-900 text-center">Midnight Drive</h3>
      <p className="text-sm text-slate-500 text-center mb-4">The Neon Lights</p>
      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
        <span>1:24</span>
        <span>3:48</span>
      </div>
      <div className="h-1.5 bg-slate-200 rounded-full mb-4 overflow-visible">
        <div className="h-full w-[40%] bg-slate-900 rounded-full" />
      </div>
      <div className="flex items-center justify-center gap-4 mb-4">
        <button type="button" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-white" aria-label="Shuffle">
          <span className="text-sm font-bold">⇄</span>
        </button>
        <button type="button" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-white" aria-label="Previous">
          <span>⏮</span>
        </button>
        <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 text-white" aria-label="Play">
          <span className="text-lg ml-0.5">▶</span>
        </button>
        <button type="button" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-white" aria-label="Next">
          <span>⏭</span>
        </button>
        <button type="button" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-600" aria-label="Repeat">
          <span className="text-sm">↻</span>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button type="button" className="w-8 h-8 flex items-center justify-center text-slate-600" aria-label="Volume">
          <span className="text-lg">🔊</span>
        </button>
        <div className="flex-1 h-1.5 bg-slate-200 rounded-full">
          <div className="h-full w-2/3 bg-slate-900 rounded-full" />
        </div>
      </div>
    </div>
  )
}
