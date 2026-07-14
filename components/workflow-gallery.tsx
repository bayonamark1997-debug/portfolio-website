'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Loader2, ChevronLeft, ChevronRight, Wrench, Maximize2, LayoutGrid } from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface WorkflowRow {
  tool: string
  title: string
  imageUrl: string
  notes: string
}

interface WorkflowGroup {
  tool: string
  title: string
  images: string[]
  notes: string
}

const CSV_URL = process.env.NEXT_PUBLIC_WORKFLOW_SHEET_CSV_URL || ''

export function WorkflowGallery() {
  const [groups, setGroups] = useState<WorkflowGroup[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error' | 'empty'>('loading')
  const [activeTool, setActiveTool] = useState<string | null>(null)
  const [lightboxGroup, setLightboxGroup] = useState<WorkflowGroup | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    if (!CSV_URL) {
      setStatus('error')
      return
    }

    fetch(CSV_URL, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch sheet')
        return res.text()
      })
      .then((text) => {
        const rows = parseCSV(text)
        if (rows.length < 2) {
          setStatus('empty')
          return
        }

        const header = rows[0].map((h) => h.trim().toLowerCase())
        const toolIdx = header.indexOf('tool')
        const titleIdx = header.indexOf('title')
        const imgIdx = header.indexOf('imageurl')
        const notesIdx = header.indexOf('notes')

        const parsedRows: WorkflowRow[] = rows
          .slice(1)
          .filter((r) => r[imgIdx]?.trim())
          .map((r) => ({
            tool: r[toolIdx]?.trim() || 'Other',
            title: r[titleIdx]?.trim() || 'Workflow',
            imageUrl: r[imgIdx]?.trim(),
            notes: r[notesIdx]?.trim() || '',
          }))

        if (parsedRows.length === 0) {
          setStatus('empty')
          return
        }

        // Group consecutive-or-not rows sharing the same Tool + Title into
        // one card with multiple images (in the order they appear in the sheet).
        const groupMap = new Map<string, WorkflowGroup>()
        const order: string[] = []
        for (const row of parsedRows) {
          const key = `${row.tool}::${row.title}`
          if (!groupMap.has(key)) {
            groupMap.set(key, { tool: row.tool, title: row.title, images: [], notes: row.notes })
            order.push(key)
          }
          const group = groupMap.get(key)!
          group.images.push(row.imageUrl)
          if (!group.notes && row.notes) group.notes = row.notes
        }
        const parsedGroups = order.map((key) => groupMap.get(key)!)

        setGroups(parsedGroups)
        setActiveTool('All')
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  const tools = ['All', ...Array.from(new Set(groups.map((g) => g.tool)))]
  const filtered = activeTool === 'All' ? groups : groups.filter((g) => g.tool === activeTool)

  const openLightbox = (group: WorkflowGroup) => {
    setLightboxGroup(group)
    setLightboxIndex(0)
  }

  const showPrev = () => setLightboxIndex((i) => Math.max(i - 1, 0))
  const showNext = () =>
    setLightboxIndex((i) => Math.min(i + 1, (lightboxGroup?.images.length || 1) - 1))

  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const SWIPE_THRESHOLD = 50
    if (deltaX > SWIPE_THRESHOLD) showPrev()
    else if (deltaX < -SWIPE_THRESHOLD) showNext()
    touchStartX.current = null
  }

  useEffect(() => {
    if (!lightboxGroup) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev()
      else if (e.key === 'ArrowRight') showNext()
      else if (e.key === 'Escape') setLightboxGroup(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxGroup])

  return (
    <section id="gallery" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Workflow Library</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Browse real workflow builds by tool.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A growing library of automation screenshots — pick a tool to see what I&apos;ve built with it.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/80">
            This gallery is itself powered by an automation — it loads live from a Google Sheet.
          </p>
        </Reveal>

        {status === 'loading' && (
          <div className="mt-14 flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <Loader2 className="size-6 animate-spin" aria-hidden="true" />
            <p className="text-sm">Loading workflows…</p>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-14 rounded-3xl border border-border bg-card p-10 text-center text-muted-foreground">
            <p>Workflow gallery is temporarily unavailable. Check back soon.</p>
          </div>
        )}

        {status === 'empty' && (
          <div className="mt-14 rounded-3xl border border-border bg-card p-10 text-center text-muted-foreground">
            <p>New workflow screenshots coming soon.</p>
          </div>
        )}

        {status === 'ready' && (
          <>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <button
                  key={tool}
                  onClick={() => setActiveTool(tool)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                    activeTool === tool
                      ? 'border-primary bg-primary text-primary-foreground shadow-md'
                      : 'border-border bg-card text-foreground hover:border-primary/40'
                  }`}
                >
                  {tool === 'All' ? (
                    <LayoutGrid className={`size-3.5 ${activeTool === tool ? 'text-primary-foreground' : 'text-primary'}`} aria-hidden="true" />
                  ) : (
                    <Wrench className={`size-3.5 ${activeTool === tool ? 'text-primary-foreground' : 'text-primary'}`} aria-hidden="true" />
                  )}
                  {tool}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((group, i) => (
                <button
                  key={`${group.tool}-${group.title}-${i}`}
                  onClick={() => openLightbox(group)}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute inset-x-0 -top-px z-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-secondary/60 to-primary/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={group.images[0]}
                      alt={group.title}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                      <span className="flex size-11 items-center justify-center rounded-full bg-white text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                        <Maximize2 className="size-4" aria-hidden="true" />
                      </span>
                    </div>
                    {group.images.length > 1 && (
                      <span className="absolute right-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white">
                        1 / {group.images.length}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-foreground/70">
                      <Wrench className="size-3 text-primary" aria-hidden="true" />
                      {group.tool}
                    </span>
                    <p className="mt-2 font-semibold">{group.title}</p>
                    {group.notes && (
                      <p
                        title={group.notes}
                        className="mt-1 text-sm text-muted-foreground line-clamp-2"
                      >
                        {group.notes}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {lightboxGroup && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/85 p-4 py-10"
          onClick={() => setLightboxGroup(null)}
        >
          <div
            className="relative flex w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative inline-flex max-w-full flex-col items-center">
              <button
                onClick={() => setLightboxGroup(null)}
                className="absolute -right-3 -top-3 z-20 flex size-9 items-center justify-center rounded-full border border-white/10 bg-foreground text-background shadow-lg transition-transform hover:scale-105"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>

              {lightboxGroup.images.length > 1 && (
                <>
                  <button
                    onClick={showPrev}
                    disabled={lightboxIndex === 0}
                    className="absolute left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-black/50 sm:-left-14 sm:size-11 sm:bg-white/15 sm:hover:bg-white/25 sm:disabled:hover:bg-white/15"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="size-5 sm:size-6" />
                  </button>
                  <button
                    onClick={showNext}
                    disabled={lightboxIndex === lightboxGroup.images.length - 1}
                    className="absolute right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-black/50 sm:-right-14 sm:size-11 sm:bg-white/15 sm:hover:bg-white/25 sm:disabled:hover:bg-white/15"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="size-5 sm:size-6" />
                  </button>
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white">
                    {lightboxIndex + 1} / {lightboxGroup.images.length}
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
                  src={lightboxGroup.images[lightboxIndex]}
                  alt={lightboxGroup.title}
                  className="max-h-[60vh] max-w-full rounded-lg object-contain"
                />
              </div>
            </div>

            <div className="mt-5 w-full max-w-lg rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center backdrop-blur-sm">
              <span className="inline-block rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {lightboxGroup.tool}
              </span>
              <p className="mt-3 text-lg font-semibold text-white">{lightboxGroup.title}</p>
              {lightboxGroup.notes && (
                <p className="mt-1.5 text-sm leading-relaxed text-white/75">{lightboxGroup.notes}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// Minimal CSV parser — handles quoted fields containing commas/newlines,
// which Google Sheets' published CSV export can produce.
function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let cur = ''
  let row: string[] = []
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          cur += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        cur += char
      }
    } else {
      if (char === '"') {
        inQuotes = true
      } else if (char === ',') {
        row.push(cur)
        cur = ''
      } else if (char === '\n' || char === '\r') {
        if (char === '\r' && text[i + 1] === '\n') i++
        row.push(cur)
        cur = ''
        if (row.some((c) => c.trim() !== '')) rows.push(row)
        row = []
      } else {
        cur += char
      }
    }
  }
  if (cur !== '' || row.length > 0) {
    row.push(cur)
    if (row.some((c) => c.trim() !== '')) rows.push(row)
  }
  return rows
}
