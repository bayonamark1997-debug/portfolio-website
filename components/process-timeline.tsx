import {
  Search,
  GitBranch,
  Hammer,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { processSteps } from '@/lib/portfolio-data'

const icons: Record<string, LucideIcon> = {
  Search,
  GitBranch,
  Hammer,
  Rocket,
  TrendingUp,
}

export function ProcessTimeline() {
  return (
    <section id="process" className="scroll-mt-24 bg-navy py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            My Automation Process
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A clear, proven path from problem to results.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-white/60">
            Every project follows the same disciplined process, so you always know what happens
            next.
          </p>
        </Reveal>

        <div className="relative mt-12">
          {/* connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px lg:left-0 lg:top-8 lg:h-px lg:w-full"
          >
            <svg className="size-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="#60a5fa"
                strokeWidth="2"
                className="animate-dash hidden lg:block"
                opacity="0.5"
              />
            </svg>
          </div>

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step, i) => {
              const Icon = icons[step.icon] ?? Search
              return (
                <Reveal key={step.title} delay={i * 80} as="li" className="relative flex lg:flex-col lg:items-center lg:text-center">
                  <div className="flex flex-col items-center lg:w-full">
                    <span className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="ml-5 lg:ml-0 lg:mt-4">
                    <span className="text-xs font-semibold text-blue-400">Step {i + 1}</span>
                    <h3 className="mt-1 font-semibold tracking-tight text-white">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">{step.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
