'use client'

import Image from 'next/image'
import { ArrowRight, Sparkles, Bot, Workflow, Zap, MessagesSquare, GitBranch } from 'lucide-react'
import { RippleButton } from '@/components/ripple-button'
import { profile, stats } from '@/lib/portfolio-data'
import { Counter } from '@/components/counter'

const floatingIcons = [
  { Icon: Zap, className: 'left-[6%] top-[14%] animate-float-slow', size: 'size-5' },
  { Icon: Bot, className: 'right-[10%] top-[8%] animate-float-med', size: 'size-6' },
  { Icon: Workflow, className: 'left-[12%] bottom-[20%] animate-float-med', size: 'size-5' },
  { Icon: MessagesSquare, className: 'right-[6%] bottom-[24%] animate-float-slow', size: 'size-5' },
  { Icon: GitBranch, className: 'right-[38%] top-[6%] animate-float-slow', size: 'size-4' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 size-[28rem] rounded-full bg-primary/10 blur-3xl animate-blob-drift" />
        <div className="absolute -right-20 top-40 size-[24rem] rounded-full bg-teal-400/10 blur-3xl animate-blob-drift [animation-delay:-6s]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            {profile.title}
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            I Build AI Automation Systems That Save Businesses{' '}
            <span className="text-primary">Hours Every Week.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I help businesses eliminate repetitive work, automate customer communication, and
            streamline operations using AI, Zapier, Make, n8n, Prompt Engineering, Process Mapping,
            and GoHighLevel.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <RippleButton href="#contact">
              Book Discovery Call
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </RippleButton>
            <RippleButton href="#work" variant="outline">
              View Projects
            </RippleButton>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold tracking-tight text-foreground">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* profile + floating icons */}
        <div className="reveal is-visible relative mx-auto flex w-full max-w-sm justify-center lg:max-w-none">
          <div className="relative">
            {floatingIcons.map(({ Icon, className, size }, i) => (
              <span
                key={i}
                className={`absolute z-20 flex size-11 items-center justify-center rounded-2xl glass border border-border/70 text-primary shadow-lg ${className}`}
                aria-hidden="true"
              >
                <Icon className={size} />
              </span>
            ))}

            <div className="relative mx-auto aspect-square w-72 sm:w-80">
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-2xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/30 to-teal-400/20 p-1.5">
                <div className="size-full overflow-hidden rounded-full border-4 border-background bg-card shadow-2xl">
                  <Image
                    src="/mark-headshot.png"
                    alt={`Portrait of ${profile.name}, AI Automation Specialist`}
                    width={400}
                    height={400}
                    priority
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium shadow-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Available for new automation projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
