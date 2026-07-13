'use client'

import { useEffect, useRef, useState } from 'react'

export function GlitchText({
  text,
  className = '',
  delayMs = 0,
}: {
  text: string
  className?: string
  delayMs?: number
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [played, setPlayed] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            setTimeout(() => setPlayed(true), delayMs)
          }
        })
      },
      { threshold: 0.6, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [delayMs])

  return (
    <span
      ref={ref}
      className={`glitch-text ${played ? 'glitch-play' : ''} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  )
}
