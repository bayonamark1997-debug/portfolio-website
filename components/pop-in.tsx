'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export function PopIn({
  children,
  className = '',
  delayMs = 0,
}: {
  children: ReactNode
  className?: string
  delayMs?: number
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [visible, setVisible] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            setTimeout(() => setVisible(true), delayMs)
          }
        })
      },
      { threshold: 0.6, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [delayMs])

  return (
    <span ref={ref} className={`pop-in ${visible ? 'pop-in-visible' : ''} ${className}`}>
      {children}
    </span>
  )
}
