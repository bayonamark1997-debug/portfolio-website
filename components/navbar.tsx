'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { nav, profile } from '@/lib/portfolio-data'
import { RippleButton } from '@/components/ripple-button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { openCalendly } from '@/lib/calendly'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [inContact, setInContact] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      // Nav CTA only appears once the hero's own CTA is out of view,
      // so the two Book a Discovery Call buttons never show at once.
      setPastHero(window.scrollY > 520)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const contactEl = document.getElementById('contact')
    if (!contactEl) return
    // Same idea as pastHero: hide the nav CTA while the Contact section's
    // own "Reserve Your Spot" button is on screen, so they never double up.
    const observer = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 },
    )
    observer.observe(contactEl)
    return () => observer.disconnect()
  }, [])

  const showNavCta = pastHero && !inContact

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <nav
        className={cn(
          'transform-gpu mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-300 sm:px-6',
          scrolled ? 'border border-border/70 bg-card py-2.5 shadow-sm' : 'py-1',
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-4" aria-hidden="true" />
          </span>
          <span className="whitespace-nowrap text-[0.95rem]">{profile.shortName}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <RippleButton
            onClick={openCalendly}
            className={cn(
              'overflow-hidden px-5 py-2.5 transition-all duration-300',
              showNavCta ? 'max-w-xs opacity-100' : 'pointer-events-none max-w-0 px-0 opacity-0',
            )}
          >
            <span className="whitespace-nowrap">Book a Discovery Call</span>
          </RippleButton>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl glass border border-border/70 p-3 shadow-lg md:hidden">
          <div className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false)
                openCalendly()
              }}
              className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
