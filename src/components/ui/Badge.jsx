export function Badge({ number }) {
  return (
    <div
      className="flex items-center justify-center w-7 h-7 rounded-full bg-[#b8893a] text-[#f5ecd7] font-serif font-bold text-sm border-2 border-[#8a6526] shadow-[0_2px_4px_rgba(26,31,46,0.2)]"
      style={{ fontFeatureSettings: '"lnum"' }}
    >
      {number}
    </div>
  )
}
