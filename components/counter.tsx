'use client'

import { useEffect, useRef, useState } from 'react'

function formatValue(val: number, decimals: number): string {
  if (decimals <= 0) return String(val)
  const rounded = Number(val.toFixed(decimals))
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(decimals)
}

export function Counter({
  value,
  suffix = '',
  duration = 1500,
  decimals = 0,
  delayMs = 0,
}: {
  value: number
  suffix?: string
  duration?: number
  decimals?: number
  delayMs?: number
}) {
  const isNumber = typeof value === 'number'

  const [display, setDisplay] = useState(isNumber ? 0 : value)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!isNumber) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true

            setTimeout(() => {
              const start = performance.now()
              const factor = Math.pow(10, decimals)

              const tick = (now: number) => {
                const p = Math.min((now - start) / duration, 1)
                const eased = 1 - Math.pow(1 - p, 3)

                setDisplay(p < 1 ? Math.round(eased * value * factor) / factor : value)

                if (p < 1) requestAnimationFrame(tick)
              }

              requestAnimationFrame(tick)
            }, delayMs)
          }
        })
      },
      { threshold: 0.6, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [value, duration, isNumber, decimals, delayMs])

  return (
    <span ref={ref}>
      {isNumber ? formatValue(display, decimals) : display}
      {isNumber && suffix}
    </span>
  )
}
