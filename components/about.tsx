import { CheckCircle2, Brain, Route, Gauge } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { aboutPoints } from '@/lib/portfolio-data'

const strengths = [
  { icon: Brain, label: 'Analytical Thinking' },
  { icon: Route, label: 'Process Mapping' },
  { icon: Gauge, label: 'Workflow Optimization' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Me</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Operations experience meets practical automation.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              I spent years inside operations teams — analyzing performance, planning capacity, and
              fixing the bottlenecks that slow businesses down. Now I use AI and no-code automation
              to remove those bottlenecks entirely.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              That background means I don&apos;t just build workflows — I understand the operational
              problems they&apos;re meant to solve.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {strengths.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
                >
                  <s.icon className="size-4 text-primary" aria-hidden="true" />
                  {s.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <ul className="space-y-4">
              {aboutPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="leading-relaxed text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
