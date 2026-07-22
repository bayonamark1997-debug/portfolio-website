import { Wrench, Maximize2 } from 'lucide-react'
import type { WorkflowGroup } from '@/lib/use-workflow-gallery'

export function GalleryCard({
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
