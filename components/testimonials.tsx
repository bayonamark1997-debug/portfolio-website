'use client'

import { useState } from 'react'
import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/portfolio-data'

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

export function Testimonials() {
  // Render the track twice back to back so the loop scrolls seamlessly.
  const loopItems = [...testimonials, ...testimonials]
  // Desktop pauses on hover via CSS. Touch devices have no hover, so press
  // and hold pauses instead, release resumes automatically — no toggle
  // state to get stuck in.
  const [pressPaused, setPressPaused] = useState(false)

  return (
    <section id="testimonials" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">In Their Words</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            What people I&apos;ve worked with say.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Feedback from managers and business partners across my operations background.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div
            className="relative overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
            }}
          >
            <div
              onPointerDown={() => setPressPaused(true)}
              onPointerUp={() => setPressPaused(false)}
              onPointerLeave={() => setPressPaused(false)}
              onPointerCancel={() => setPressPaused(false)}
              className="marquee-track flex w-max select-none gap-6"
              style={{
                WebkitTouchCallout: 'none',
                ...(pressPaused ? { animationPlayState: 'paused' as const } : {}),
              }}
            >
              {loopItems.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="flex w-[320px] shrink-0 flex-col rounded-3xl border border-border bg-card p-6 shadow-sm sm:w-[360px]"
                >
                  <Quote className="size-7 text-primary" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                    &quot;{t.quote}&quot;
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="mb-3 h-0.5 w-8 bg-primary" aria-hidden="true" />
                    <div className="flex items-start gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {getInitials(t.name)}
                      </span>
                      <div className="min-h-[4.5rem]">
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs font-semibold uppercase leading-tight tracking-wide text-primary">
                          {t.company}
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground/70 sm:hidden">
            Press and hold a card to pause
          </p>
        </Reveal>
      </div>
    </section>
  )
}
