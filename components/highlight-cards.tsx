'use client'

import {
  Bot,
  BriefcaseBusiness,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'

import { Counter } from '@/components/counter'

const cards = [
  {
    icon: BriefcaseBusiness,
    value: '1.5+',
    title: 'Years in Workforce Management',
    description:
      'Real experience improving operations, processes, and customer service.',
  },
  {
    icon: Bot,
    value: 'AI',
    title: 'Automation & Business Systems',
    description:
      'Building AI workflows using n8n, Make, Zapier, and modern AI tools.',
  },
  {
    icon: Workflow,
    value: 'No-Code',
    title: 'Zapier, Make & n8n',
    description:
      'Automating leads, follow-ups, pipelines, and customer journeys.',
  },
  {
    icon: Zap,
    value: 100,
    suffix: '%',
    title: 'Focused on Business Efficiency',
    description:
      'Every automation is designed to save time and reduce manual work.',
  },
]

export function HighlightCards() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon: LucideIcon = card.icon

        return (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-teal-400 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-6" />
            </div>

            <h3 className="mt-6 text-3xl font-bold tracking-tight">
              {typeof card.value === 'number' ? (
                <Counter value={card.value} suffix={card.suffix ?? ''} />
              ) : (
                card.value
              )}
            </h3>

            <p className="mt-2 font-semibold">
              {card.title}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {card.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}