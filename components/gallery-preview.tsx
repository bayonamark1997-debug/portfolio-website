'use client'

import { useState } from 'react'
import { Loader2, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GalleryCard } from '@/components/gallery-card'
import { GalleryLightbox } from '@/components/gallery-lightbox'
import { useWorkflowGroups, toolRank, type WorkflowGroup } from '@/lib/use-workflow-gallery'

// Homepage teaser: one highlight per tool (in priority order), plus a
// button to the full, filterable gallery page. Keeps the homepage from
// growing taller as more workflows get added to the sheet over time.
export function GalleryPreview() {
  const { groups, status } = useWorkflowGroups()
  const [lightboxGroup, setLightboxGroup] = useState<WorkflowGroup | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const byTool = new Map<string, WorkflowGroup>()
  for (const g of groups) {
    if (!byTool.has(g.tool)) byTool.set(g.tool, g)
  }
  const highlights = Array.from(byTool.values()).sort((a, b) => toolRank(a.tool) - toolRank(b.tool))

  const openLightbox = (group: WorkflowGroup) => {
    setLightboxGroup(group)
    setLightboxIndex(0)
  }

  return (
    <div id="gallery" className="mt-16 scroll-mt-24">
      <Reveal className="mx-auto max-w-2xl border-t border-border pt-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">More Builds</p>
        <h3 className="mt-2 text-balance font-serif text-xl font-semibold tracking-tight sm:text-2xl">
          Browse the workflow library by tool.
        </h3>
      </Reveal>

      {status === 'loading' && (
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-muted-foreground">
          <Loader2 className="size-6 animate-spin" aria-hidden="true" />
          <p className="text-sm">Loading workflows…</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-10 rounded-3xl border border-border bg-card p-10 text-center text-muted-foreground">
          <p>Workflow gallery is temporarily unavailable. Check back soon.</p>
        </div>
      )}

      {status === 'empty' && (
        <div className="mt-10 rounded-3xl border border-border bg-card p-10 text-center text-muted-foreground">
          <p>New workflow screenshots coming soon.</p>
        </div>
      )}

      {status === 'ready' && (
        <>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((group) => (
              <GalleryCard key={`${group.tool}-${group.title}`} group={group} onOpen={openLightbox} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              View Full Gallery
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </>
      )}

      {lightboxGroup && (
        <GalleryLightbox
          group={lightboxGroup}
          index={lightboxIndex}
          onClose={() => setLightboxGroup(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  )
}
