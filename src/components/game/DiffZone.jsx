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

  const portalContent = showOverlay && (
    <div className="pointer-events-none fixed z-[9999]" aria-hidden>
      {/* Hint ring (black) or Found circle (green) */}
      <div
        className="rounded-full border-2 animate-[spot-pop_0.3s_ease-out]"
        style={{
          position: 'fixed',
          left: circleCenterX - circleSize / 2,
          top: circleCenterY - circleSize / 2,
          width: circleSize,
          height: circleSize,
          borderColor: found ? '#5a7a4a' : '#1a1f2e',
          backgroundColor: found ? 'rgba(90, 122, 74, 0.18)' : 'transparent',
        }}
      />
      {/* Numbered badge when found */}
      {found && (
        <div
          className="fixed"
          style={{
            left: circleCenterX + circleSize / 2 - 10,
            top: circleCenterY - circleSize / 2 - 10,
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
