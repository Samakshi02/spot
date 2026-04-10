export function RetroCard({ children, className = '', dark = false }) {
  const base = dark
    ? 'bg-[#1a1f2e] text-[#f5ecd7] border border-[#1a1f2e] rounded-2xl p-5 md:p-7 shadow-[0_4px_20px_rgba(26,31,46,0.15)]'
    : 'case-file rounded-2xl p-5 md:p-7'
  const classes = [base, className].filter(Boolean).join(' ')
  return <div className={classes}>{children}</div>
}
