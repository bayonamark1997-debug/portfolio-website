'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MapPin, CalendarCheck, Send, CheckCircle2, Loader2, Globe, ExternalLink } from 'lucide-react'
import { FaUpwork } from 'react-icons/fa6'
import { Reveal } from '@/components/reveal'
import { RippleButton } from '@/components/ripple-button'
import { LinkedInIcon } from '@/components/linkedin-icon'
import { profile } from '@/lib/portfolio-data'
import { openCalendly } from '@/lib/calendly'

const details = [
  { icon: Mail, label: 'Email', value: profile.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, external: true },
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'View my LinkedIn profile', href: profile.linkedinUrl, external: true },
  { icon: FaUpwork, label: 'Upwork', value: 'View my Upwork profile', href: profile.upworkUrl, external: true },
  { icon: Globe, label: 'OnlineJobs.ph', value: 'View my OnlineJobs.ph profile', href: profile.onlineJobsUrl, external: true },
  { icon: MapPin, label: 'Location', value: profile.location, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Bulacan, Philippines')}`, external: true },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '')
    formData.append('subject', `New portfolio inquiry from ${formData.get('name')}`)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong sending your message. Please try emailing me directly instead.')
      }
    } catch {
      setError('Something went wrong sending your message. Please try emailing me directly instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/40 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s automate the work that&apos;s holding you back.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tell me about your business and the tasks eating up your time. I&apos;ll show you what
            can be automated.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* details + book call */}
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary to-teal-500 p-8 text-primary-foreground shadow-lg">
              <CalendarCheck className="size-8" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl font-semibold tracking-tight">
                Book a Discovery Call
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-primary-foreground/90">
                A free 30-minute call to map your bottlenecks and identify your highest-impact
                automation opportunities.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={openCalendly}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-md transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <CalendarCheck className="size-4" aria-hidden="true" />
                  Reserve Your Spot
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <ul className="space-y-4">
                {details.map((d) => (
                  <li key={d.label} className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <d.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 truncate text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          <span className="truncate">{d.value}</span>
                          {d.external && <ExternalLink className="size-3 shrink-0" aria-hidden="true" />}
                        </a>
                      ) : (
                        <p className="truncate text-sm font-medium text-foreground">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight">
                    Message received
                  </h3>
                  <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you shortly to schedule your
                    discovery call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Jane Doe" required />
                    <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company" name="company" placeholder="Company name" />
                    <Field label="Business type" name="industry" placeholder="e.g. Marketing agency" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      What would you like to automate?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Describe the repetitive tasks or workflows slowing your team down…"
                      className="resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  {error && (
                    <p className="text-sm font-medium text-destructive">{error}</p>
                  )}

                  <RippleButton type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        Sending...
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="size-4" aria-hidden="true" />
                      </>
                    )}
                  </RippleButton>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-input bg-background px-4 py-3 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
