import { ProductCardBase } from './Layout'
import { DiffZone } from '../../components/game/DiffZone'

function Stars({ filled }) {
  return (
    <span className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < filled ? '★' : '☆'}</span>
      ))}
    </span>
  )
}

export function Puzzle1Modified({ onFound, foundIds, hintingId }) {
  return (
    <ProductCardBase
      title="Wireless Headphones Plus"
      price="$89.99"
      buttonColorClass="bg-emerald-500"
      renderTitle={() => (
        <DiffZone
          id={3}
          index={3}
          onFound={onFound}
          found={foundIds.includes(3)}
          hinting={hintingId === 3}
        >
          Wireless Headphones <span data-spot-target>Plus</span>
        </DiffZone>
      )}
      renderStars={() => (
        <DiffZone
          id={2}
          index={2}
          onFound={onFound}
          found={foundIds.includes(2)}
          hinting={hintingId === 2}
        >
          <span className="inline-flex items-center gap-1">
            <Stars filled={4} />
          </span>
        </DiffZone>
      )}
      renderPrice={(text) => (
        <DiffZone
          id={4}
          index={4}
          onFound={onFound}
          found={foundIds.includes(4)}
          hinting={hintingId === 4}
        >
          <span>{text}</span>
        </DiffZone>
      )}
      renderButton={(buttonNode) => (
        <DiffZone
          id={1}
          index={1}
          onFound={onFound}
          found={foundIds.includes(1)}
          hinting={hintingId === 1}
        >
          {buttonNode}
        </DiffZone>
      )}
    />
  )
}

