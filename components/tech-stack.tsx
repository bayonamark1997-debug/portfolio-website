import { Reveal } from '@/components/reveal'
import { techStack, industries } from '@/lib/portfolio-data'
import { Building2 } from 'lucide-react'

export function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Tech stack */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Tech Stack</p>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                The tools I automate with.
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {techStack.map((group, i) => (
                <Reveal key={group.category} delay={i * 60} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <span className="w-32 shrink-0 text-sm font-semibold text-muted-foreground">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Industries I Help
              </p>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Who I work with.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {industries.map((industry, i) => (
                <Reveal
                  key={industry}
                  delay={i * 60}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Building2 className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-snug">{industry}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
