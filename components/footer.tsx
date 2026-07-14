import { Zap, Mail, Globe } from 'lucide-react'
import { FaUpwork } from 'react-icons/fa6'
import { LinkedInIcon } from '@/components/linkedin-icon'
import { profile, nav } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 font-semibold tracking-tight">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-4" aria-hidden="true" />
              </span>
              {profile.name}
            </div>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              AI Automation Specialist based in Bulacan, Philippines — practical automation for
              clinics, local service businesses, and operations teams.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href={profile.upworkUrl}
                aria-label="Upwork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <FaUpwork className="size-4" />
              </a>
              <a
                href={profile.onlineJobsUrl}
                aria-label="OnlineJobs.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Globe className="size-4" />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3" aria-label="Footer">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  )
}
