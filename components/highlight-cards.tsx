'use client'

import {
  BriefcaseBusiness,
  Workflow,
  Plug,
  Store,
  type LucideIcon,
} from 'lucide-react'

import { Counter } from '@/components/counter'

const cards = [
  {
    icon: BriefcaseBusiness,
    value: 2,
    suffix: '+',
    title: 'Years in Operations',
    description:
      'Workforce management and real-time analysis for 150+ agent teams.',
  },
  {
    icon: Workflow,
    value: 10,
    suffix: '+',
    title: 'Workflows Built',
    description:
      'Across n8n, Zapier, Make, and GoHighLevel — chatbots to booking systems.',
  },
  {
    icon: Plug,
    value: 15,
    suffix: '+',
    title: 'Tools Integrated',
    description:
      'APIs, AI models, CRMs, SMS gateways, and the Google Workspace stack.',
  },
  {
    icon: Store,
    value: 3,
    suffix: '',
    title: 'Businesses Owned or Co-Owned',
    description:
      'I automate with an owner\u2019s instinct for where time and money leak.',
  },
]

export function HighlightCards() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => {
        const Icon: LucideIcon = card.icon
        const delayMs = i * 150

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
              <Counter value={card.value} suffix={card.suffix} delayMs={delayMs} />
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
