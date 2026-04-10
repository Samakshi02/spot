import { ProductCardBase } from './Layout'

function Stars({ filled }) {
  return (
    <span className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < filled ? '★' : '☆'}</span>
      ))}
    </span>
  )
}

export function Puzzle1Original() {
  return (
    <ProductCardBase
      title="Wireless Headphones Pro"
      price="$79.99"
      buttonColorClass="bg-blue-500"
      renderStars={() => <Stars filled={5} />}
    />
  )
}

