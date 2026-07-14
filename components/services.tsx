import {
  Workflow,
  Users,
  Target,
  MessagesSquare,
  CalendarClock,
  GitBranch,
  BarChart3,
  Cog,
  Sparkles,
  Lightbulb,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/portfolio-data'

const icons: Record<string, LucideIcon> = {
  Workflow,
  Users,
  Target,
  MessagesSquare,
  CalendarClock,
  GitBranch,
  BarChart3,
  Cog,
  Sparkles,
  Lightbulb,
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Services</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Automation built around business outcomes.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            You don&apos;t need more software. You need someone who finds out where your time is
            actually going — then removes it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Sparkles
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 90}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h3>

                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground/60">Problem</dt>
                    <dd className="mt-0.5 leading-relaxed text-muted-foreground">{service.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground/60">Solution</dt>
                    <dd className="mt-0.5 leading-relaxed text-muted-foreground">{service.solution}</dd>
                  </div>
                </dl>

                <div className="mt-auto flex items-start gap-2 pt-5 text-sm font-medium text-primary">
                  <ArrowRight className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>{service.outcome}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
