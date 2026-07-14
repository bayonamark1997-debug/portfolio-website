import { ArrowRight, TrendingUp, Wrench, CircleAlert, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Case Studies</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Real automations, real hours saved.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A look at the problems I&apos;ve solved, how I solved them, and the impact on the
            business.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} to-transparent opacity-60`}
              />
              <div className="relative grid lg:grid-cols-2">
                {/* content */}
                <div className="order-2 p-8 lg:order-1 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-4 text-balance font-serif text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>

                  <div className="mt-6 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <CircleAlert className="mt-0.5 size-4 shrink-0 text-foreground/50" aria-hidden="true" />
                      <p className="leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-foreground/70">Problem: </span>
                        {project.problem}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <p className="leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-foreground/70">Solution: </span>
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        <Wrench className="size-3 text-primary" aria-hidden="true" />
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-2xl bg-primary/8 p-4">
                    <TrendingUp className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="text-sm font-medium leading-relaxed text-foreground">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* workflow diagram */}
                <div className="order-1 flex flex-col justify-center border-b border-border bg-gradient-to-br from-secondary/60 to-primary/5 p-8 lg:order-2 lg:border-b-0 lg:border-l lg:p-10">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Workflow
                  </p>
                  <ol className="space-y-3">
                    {project.workflow.map((step, si) => (
                      <li key={step} className="flex items-center gap-3">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-card text-xs font-semibold text-primary shadow-sm ring-1 ring-border">
                          {si + 1}
                        </span>
                        <span className="flex-1 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium shadow-sm">
                          {step}
                        </span>
                        {si < project.workflow.length - 1 && (
                          <ArrowRight className="size-4 shrink-0 text-primary/60" aria-hidden="true" />
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
