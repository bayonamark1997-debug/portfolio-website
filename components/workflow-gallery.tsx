'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Loader2, ChevronLeft, ChevronRight, ChevronDown, Wrench, Maximize2, LayoutGrid } from 'lucide-react'
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

// Tool priority for the "All" view: one highlight per tool up front (in this
// order), then everything else follows in the same tool order. Unlisted
// tools fall to the end rather than breaking.
const TOOL_ORDER = ['n8n', 'Zapier', 'Make', 'GoHighLevel']
const toolRank = (tool: string) => {
  const i = TOOL_ORDER.indexOf(tool)
  return i === -1 ? TOOL_ORDER.length : i
}

export function WorkflowGallery() {
  const [groups, setGroups] = useState<WorkflowGroup[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error' | 'empty'>('loading')
  const [activeTool, setActiveTool] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
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

  const tools = [
    'All',
    ...Array.from(new Set(groups.map((g) => g.tool))).sort((a, b) => toolRank(a) - toolRank(b)),
  ]

  // For "All": collapsed view shows one highlight per tool (in priority
  // order) so visitors immediately see range across tools. Once expanded,
  // each tool's cards sit together as one block, in the same tool order,
  // rather than scattering a tool's cards across two spots in the list.
  let visible: WorkflowGroup[]
  let totalCount: number
  let hasMore: boolean

  if (activeTool === 'All') {
    const byTool = new Map<string, WorkflowGroup[]>()
    for (const g of groups) {
      if (!byTool.has(g.tool)) byTool.set(g.tool, [])
      byTool.get(g.tool)!.push(g)
    }
    const toolsPresent = Array.from(byTool.keys()).sort((a, b) => toolRank(a) - toolRank(b))
    const highlights = toolsPresent.map((t) => byTool.get(t)![0])
    const groupedAll = toolsPresent.flatMap((t) => byTool.get(t)!)

    totalCount = groupedAll.length
    visible = expanded ? groupedAll : highlights
    hasMore = !expanded && totalCount > highlights.length
  } else {
    const toolItems = groups.filter((g) => g.tool === activeTool)
    const PREVIEW_LIMIT = 3
    totalCount = toolItems.length
    visible = expanded ? toolItems : toolItems.slice(0, PREVIEW_LIMIT)
    hasMore = !expanded && totalCount > PREVIEW_LIMIT
  }

  const remainingCount = totalCount - visible.length

  const galleryFullRowCount = Math.floor(visible.length / 3) * 3
  const galleryFullRows = visible.slice(0, galleryFullRowCount)
  const galleryRemainder = visible.slice(galleryFullRowCount)

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
    <div id="gallery" className="mt-16 scroll-mt-24">
      <Reveal className="mx-auto max-w-2xl border-t border-border pt-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">More Builds</p>
        <h3 className="mt-2 text-balance font-serif text-xl font-semibold tracking-tight sm:text-2xl">
          Browse the workflow library by tool.
        </h3>
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
                  onClick={() => {
                    setActiveTool(tool)
                    setExpanded(false)
                  }}
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

            <div className="mt-10">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galleryFullRows.map((group, i) => (
                  <GalleryCard key={`${group.tool}-${group.title}-${i}`} group={group} onOpen={openLightbox} />
                ))}
              </div>

              {galleryRemainder.length > 0 && (
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                  {galleryRemainder.map((group, i) => (
                    <GalleryCard
                      key={`${group.tool}-${group.title}-rem-${i}`}
                      group={group}
                      onOpen={openLightbox}
                      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                    />
                  ))}
                </div>
              )}

              {hasMore && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setExpanded(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    Show {remainingCount} More Workflows
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </>
        )}

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
    </div>
  )
}

// Minimal CSV parser — handles quoted fields containing commas/newlines,
// which Google Sheets' published CSV export can produce.
function GalleryCard({
  group,
  onOpen,
  className = '',
}: {
  group: WorkflowGroup
  onOpen: (group: WorkflowGroup) => void
  className?: string
}) {
  return (
    <button
      onClick={() => onOpen(group)}
      className={`group relative w-full overflow-hidden rounded-3xl border border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="absolute inset-x-0 -top-px z-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative aspect-video w-full overflow-hidden bg-white p-2">
        <div className="relative size-full overflow-hidden rounded-xl">
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
      </div>
      <div className="p-4">
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-foreground/70">
          <Wrench className="size-3 text-primary" aria-hidden="true" />
          {group.tool}
        </span>
        <p className="mt-2 font-semibold">{group.title}</p>
        {group.notes && (
          <p title={group.notes} className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {group.notes}
          </p>
        )}
      </div>
    </button>
  )
}

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
