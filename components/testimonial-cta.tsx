import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { RippleButton } from '@/components/ripple-button'

export function TestimonialCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center shadow-sm sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklch, var(--primary) 14%, transparent), transparent)',
            }}
          />
          <Quote className="mx-auto size-10 text-primary/40" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-balance font-serif text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            Your business could be my next automation success story.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Let&apos;s find the repetitive work slowing you down — and build the system that makes it
            disappear.
          </p>
          <div className="mt-8">
            <RippleButton href="#contact">Book Your Discovery Call</RippleButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
