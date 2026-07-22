'use client'

import { useEffect, useRef, type TouchEvent } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { WorkflowGroup } from '@/lib/use-workflow-gallery'

export function GalleryLightbox({
  group,
  index,
  onClose,
  onIndexChange,
}: {
  group: WorkflowGroup
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}) {
  const showPrev = () => onIndexChange(Math.max(index - 1, 0))
  const showNext = () => onIndexChange(Math.min(index + 1, group.images.length - 1))

  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const SWIPE_THRESHOLD = 50
    if (deltaX > SWIPE_THRESHOLD) showPrev()
    else if (deltaX < -SWIPE_THRESHOLD) showNext()
    touchStartX.current = null
  }

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev()
      else if (e.key === 'ArrowRight') showNext()
      else if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/85 p-4 py-10"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative inline-flex max-w-full flex-col items-center">
          <button
            onClick={onClose}
            className="absolute -right-3 -top-3 z-20 flex size-9 items-center justify-center rounded-full border border-white/10 bg-foreground text-background shadow-lg transition-transform hover:scale-105"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>

          {group.images.length > 1 && (
            <>
              <button
                onClick={showPrev}
                disabled={index === 0}
                className="absolute left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-black/50 sm:-left-14 sm:size-11 sm:bg-white/15 sm:hover:bg-white/25 sm:disabled:hover:bg-white/15"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="size-5 sm:size-6" />
              </button>
              <button
                onClick={showNext}
                disabled={index === group.images.length - 1}
                className="absolute right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-black/50 sm:-right-14 sm:size-11 sm:bg-white/15 sm:hover:bg-white/25 sm:disabled:hover:bg-white/15"
                aria-label="Next screenshot"
              >
                <ChevronRight className="size-5 sm:size-6" />
              </button>
              <span className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white">
                {index + 1} / {group.images.length}
              </span>
            </>
          )}

          <div
            className="rounded-2xl border border-white/10 bg-white p-2 shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={group.images[index]}
              alt={group.title}
              className="max-h-[60vh] max-w-full rounded-lg object-contain"
            />
          </div>
        </div>

        <div className="mt-5 w-full max-w-lg rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center backdrop-blur-sm">
          <span className="inline-block rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {group.tool}
          </span>
          <p className="mt-3 text-lg font-semibold text-white">{group.title}</p>
          {group.notes && (
            <p className="mt-1.5 text-sm leading-relaxed text-white/75">{group.notes}</p>
          )}
        </div>
      </div>
    </div>
  )
}
