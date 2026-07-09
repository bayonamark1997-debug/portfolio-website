'use client'

import { useEffect, useRef, useState } from 'react'

export function Counter({
  value,
  suffix = '',
  duration = 1500,
}: {
  value: number
  suffix?: string
  duration?: number
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

            const start = performance.now()

            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)

              setDisplay(Math.round(eased * value))

              if (p < 1) requestAnimationFrame(tick)
            }

            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [value, duration, isNumber])

  return (
    <span ref={ref}>
      {display}
      {isNumber && suffix}
    </span>
  )
}