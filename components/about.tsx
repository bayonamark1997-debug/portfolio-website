'use client'

import { CheckCircle2, FileText, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { aboutPoints, profile } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Me</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Operations experience meets practical automation.
          </h2>
          <p className="mt-6 text-pretty text-left text-lg leading-relaxed text-muted-foreground">
            Between workforce management and running my own businesses, I&apos;ve spent time inside
            operations, analyzing performance, planning capacity, and fixing the bottlenecks that
            slow businesses down. Now I use AI and no-code automation to remove those bottlenecks
            entirely, building workflows around the operational problems they&apos;re meant to
            solve.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <ul className="space-y-5">
            {aboutPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-relaxed text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.currentTarget.blur()}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FileText className="size-4" aria-hidden="true" />
              View My Resume
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
