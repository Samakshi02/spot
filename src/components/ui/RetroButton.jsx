export function RetroButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed border'

  const variants = {
    // Primary — brass/amber on ink
    primary:
      'bg-[#1a1f2e] text-[#f5ecd7] border-[#1a1f2e] hover:bg-[#2a3142] hover:border-[#2a3142] shadow-[0_2px_0_#8a6526]',
    // Secondary — brass outline
    secondary:
      'bg-[#fdf9ee] text-[#1a1f2e] border-[#b8893a] hover:bg-[#f5ecd7]',
    // Outline — subtle
    outline:
      'bg-transparent text-[#1a1f2e] border-[#1a1f2e]/20 hover:border-[#1a1f2e]/40 hover:bg-[#1a1f2e]/5',
    // Ghost
    ghost:
      'bg-transparent text-[#6b6456] border-transparent hover:text-[#1a1f2e] hover:bg-[#1a1f2e]/5',
    // Brass — accent CTA
    brass:
      'bg-[#b8893a] text-[#f5ecd7] border-[#8a6526] hover:bg-[#8a6526] shadow-[0_2px_0_#5a4218]',
  }

  const sizes = {
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wide',
    sm: 'px-4 py-2 text-xs tracking-wide',
  }

  const classes = [base, variants[variant] ?? variants.primary, sizes[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
