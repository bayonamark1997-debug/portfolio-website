'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { techStack, industries } from '@/lib/portfolio-data'
import { Building2, Info } from 'lucide-react'

export function TechStack() {
  const [activeTool, setActiveTool] = useState<string | null>(null)

  return (
    <section id="stack" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Tech stack */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Tech Stack</p>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                The tools I automate with.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground/80">
                Tap a tool to see what it is.
              </p>
            </Reveal>
            <div className="mt-8 space-y-6">
              {techStack.map((group, i) => {
                const activeItem = group.items.find((item) => item.name === activeTool)
                return (
                  <Reveal key={group.category} delay={i * 60} className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <span className="w-32 shrink-0 pt-1.5 text-sm font-semibold text-muted-foreground">
                      {group.category}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => {
                          const isActive = item.name === activeTool
                          return (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => setActiveTool(isActive ? null : item.name)}
                              aria-expanded={isActive}
                              className={`rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${
                                isActive
                                  ? 'border-primary bg-primary text-primary-foreground'
                                  : 'border-border bg-card hover:border-primary/40 hover:text-primary'
                              }`}
                            >
                              {item.name}
                            </button>
                          )
                        })}
                      </div>
                      {activeItem && (
                        <div className="mt-2.5 flex items-start gap-2 rounded-xl border border-primary/20 bg-primary/5 px-3.5 py-2.5 text-sm leading-relaxed text-foreground/80">
                          <Info className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                          <span>
                            <span className="font-semibold text-foreground">{activeItem.name}: </span>
                            {activeItem.description}
                          </span>
                        </div>
                      )}
                    </div>
                  </Reveal>
                )
              })}
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
            <div className="mt-8 grid gap-3">
              {industries.map((industry, i) => (
                <Reveal
                  key={industry.name}
                  delay={i * 60}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Building2 className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-sm font-medium leading-snug">{industry.name}</span>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
