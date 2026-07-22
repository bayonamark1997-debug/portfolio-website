'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Loader2, ChevronDown, Wrench, LayoutGrid, ArrowLeft } from 'lucide-react'
import { ScrollProgress } from '@/components/scroll-progress'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/reveal'
import { GalleryCard } from '@/components/gallery-card'
import { GalleryLightbox } from '@/components/gallery-lightbox'
import { useWorkflowGroups, toolRank, type WorkflowGroup } from '@/lib/use-workflow-gallery'

const BATCH_SIZE = 6

export default function GalleryPage() {
  const { groups, status } = useWorkflowGroups()
  const [activeTool, setActiveTool] = useState('All')
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const [lightboxGroup, setLightboxGroup] = useState<WorkflowGroup | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const tools = [
    'All',
    ...Array.from(new Set(groups.map((g) => g.tool))).sort((a, b) => toolRank(a) - toolRank(b)),
  ]

  const filtered =
    activeTool === 'All'
      ? [...groups].sort((a, b) => toolRank(a.tool) - toolRank(b.tool))
      : groups.filter((g) => g.tool === activeTool)

  const visible = filtered.slice(0, visibleCount)
  const remainingCount = filtered.length - visible.length

  const fullRowCount = Math.floor(visible.length / 3) * 3
  const fullRows = visible.slice(0, fullRowCount)
  const remainder = visible.slice(fullRowCount)

  const openLightbox = (group: WorkflowGroup) => {
    setLightboxGroup(group)
    setLightboxIndex(0)
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <section className="scroll-mt-24 pb-16 pt-28 sm:pt-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Link
              href="/#gallery"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to portfolio
            </Link>

            <Reveal className="mx-auto mt-8 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Workflow Gallery</p>
              <h1 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                The full workflow library, by tool.
              </h1>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Every screenshot from the live sheet, filterable by the tool that built it.
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
                      onClick={() => {
                        setActiveTool(tool)
                        setVisibleCount(BATCH_SIZE)
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
                    {fullRows.map((group, i) => (
                      <GalleryCard key={`${group.tool}-${group.title}-${i}`} group={group} onOpen={openLightbox} />
                    ))}
                  </div>

                  {remainder.length > 0 && (
                    <div className="mt-6 flex flex-wrap justify-center gap-6">
                      {remainder.map((group, i) => (
                        <GalleryCard
                          key={`${group.tool}-${group.title}-rem-${i}`}
                          group={group}
                          onOpen={openLightbox}
                          className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                        />
                      ))}
                    </div>
                  )}

                  {remainingCount > 0 && (
                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={() => setVisibleCount((c) => c + BATCH_SIZE)}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                      >
                        Load {Math.min(BATCH_SIZE, remainingCount)} More Workflows
                        <ChevronDown className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {lightboxGroup && (
        <GalleryLightbox
          group={lightboxGroup}
          index={lightboxIndex}
          onClose={() => setLightboxGroup(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </>
  )
}
