'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Follows the pointer with the cover of whichever row is hovered.
 *
 * One rAF-throttled transform on a single element and no library. The images
 * are ordinary lazy <img> tags, so a visitor who never hovers never downloads
 * one, and the whole thing is disabled on touch where each row carries its own
 * thumbnail.
 */
export default function HoverPeek({
  items,
}: {
  items: Array<{ id: string; src: string }>
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return

    let raf = 0
    let x = 0
    let y = 0

    const paint = () => {
      raf = 0
      el.style.transform = `translate3d(${x + 26}px, ${y - 150}px, 0)`
    }

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(paint)
    }

    const onOver = (e: PointerEvent) => {
      const row = (e.target as HTMLElement).closest<HTMLElement>('[data-peek]')
      setActive(row?.dataset.peek ?? null)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="peek" data-on={active ? '1' : '0'} aria-hidden="true">
      {items.map((item) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={item.id}
          src={item.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
          style={{ opacity: active === item.id ? 1 : 0 }}
        />
      ))}
    </div>
  )
}
