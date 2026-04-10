// Shared base layout for Puzzle 1 so original and modified stay pixel-identical.

export function ProductCardBase({
  title,
  price,
  buttonColorClass,
  renderStars,
  renderTitle,
  renderPrice,
  renderButton,
}) {
  const titleNode = renderTitle ? renderTitle(title) : title
  const priceNode = renderPrice ? renderPrice(price) : price
  const buttonNode = renderButton ? (
    renderButton(
      <button
        type="button"
        className={`px-4 py-2 rounded-full text-xs font-medium text-white ${buttonColorClass}`}
      >
        Add to Cart
      </button>,
    )
  ) : (
    <button
      type="button"
      className={`px-4 py-2 rounded-full text-xs font-medium text-white ${buttonColorClass}`}
    >
      Add to Cart
    </button>
  )

  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-visible flex flex-col">
      <div className="h-40 bg-slate-200 rounded-t-xl flex items-center justify-center">
        <div className="w-24 h-24 rounded-xl bg-slate-300" />
      </div>
      <div className="p-4 space-y-3">
        <div className="text-xs font-medium text-slate-500 uppercase tracking-[0.18em]">
          Audio • Wireless
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-slate-900 truncate">{titleNode}</h3>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1">{renderStars()}</span>
            <span>4.9 • 1,203 reviews</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-slate-900">{priceNode}</div>
          {buttonNode}
        </div>
      </div>
    </div>
  )
}

