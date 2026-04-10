import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Badge } from '../ui/Badge'

const MIN_CIRCLE = 32
const MAX_CIRCLE = 72
const CIRCLE_PADDING = 16

export function DiffZone({
  id,
  index,
  onFound,
  found,
  hinting,
  children,
  className: extraClassName = '',
  asMissingPlaceholder = false,
}) {
  const wrapperRef = useRef(null)
  const [rect, setRect] = useState(null)

  useEffect(() => {
    if (!(found || hinting) || !wrapperRef.current) {
      setRect(null)
      return
    }
    const el =
      wrapperRef.current.querySelector('[data-spot-target]') ||
      wrapperRef.current
    const update = () => {
      setRect(el.getBoundingClientRect())
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('scroll', update, true)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', update, true)
      window.removeEventListener('resize', update)
    }
  }, [found, hinting])

  const handleClick = (e) => {
    e.stopPropagation()
    if (!found) {
      onFound(id)
    }
  }

  const showOverlay = (found || hinting) && rect

  const circleSize = rect
    ? Math.max(
        MIN_CIRCLE,
        Math.min(MAX_CIRCLE, Math.max(rect.width, rect.height) + CIRCLE_PADDING),
      )
    : MIN_CIRCLE
  const circleCenterX = rect ? rect.left + rect.width / 2 : 0
  const circleCenterY = rect ? rect.top + rect.height / 2 : 0

  // Found state uses a tight pill that hugs the target so it doesn't
  // visually block adjacent diffs. Hint state keeps the big round ring
  // for attention.
  const FOUND_PAD_X = 6
  const FOUND_PAD_Y = 4
  const foundWidth = rect ? rect.width + FOUND_PAD_X * 2 : 0
  const foundHeight = rect ? rect.height + FOUND_PAD_Y * 2 : 0
  const foundLeft = rect ? rect.left - FOUND_PAD_X : 0
  const foundTop = rect ? rect.top - FOUND_PAD_Y : 0

  const portalContent = showOverlay && (
    <div className="pointer-events-none fixed z-[9999]" aria-hidden>
      {found ? (
        /* Found — tight pill hugging the target */
        <div
          className="animate-[spot-pop_0.3s_ease-out]"
          style={{
            position: 'fixed',
            left: foundLeft,
            top: foundTop,
            width: foundWidth,
            height: foundHeight,
            border: '2px solid #5a7a4a',
            backgroundColor: 'rgba(90, 122, 74, 0.14)',
            borderRadius: 9999,
          }}
        />
      ) : (
        /* Hint — round ring, bigger for visibility */
        <div
          className="rounded-full border-2 animate-[spot-pop_0.3s_ease-out]"
          style={{
            position: 'fixed',
            left: circleCenterX - circleSize / 2,
            top: circleCenterY - circleSize / 2,
            width: circleSize,
            height: circleSize,
            borderColor: '#1a1f2e',
            backgroundColor: 'transparent',
          }}
        />
      )}
      {/* Numbered badge when found */}
      {found && (
        <div
          className="fixed"
          style={{
            left: foundLeft + foundWidth - 10,
            top: foundTop - 10,
          }}
        >
          <Badge number={index} />
        </div>
      )}
    </div>
  )

  return (
    <>
      <div
        ref={wrapperRef}
        className={`relative w-fit ${extraClassName}`}
        onClick={handleClick}
      >
        {asMissingPlaceholder ? (
          <span className="inline-block w-full h-full" aria-hidden="true" />
        ) : (
          children
        )}
      </div>
      {portalContent && createPortal(portalContent, document.body)}
    </>
  )
}
