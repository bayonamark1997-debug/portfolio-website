'use client'

import { forwardRef, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5',
  outline:
    'border border-border bg-card/60 text-foreground hover:border-primary/40 hover:-translate-y-0.5',
  ghost: 'text-foreground hover:bg-secondary',
}

interface RippleButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

export const RippleButton = forwardRef<HTMLElement, RippleButtonProps>(
  ({ children, href, variant = 'primary', className, type = 'button', onClick, disabled = false }, _ref) => {
    const createRipple = (e: MouseEvent<HTMLElement>) => {
      if (disabled) return
      const target = e.currentTarget
      const circle = document.createElement('span')
      const diameter = Math.max(target.clientWidth, target.clientHeight)
      const radius = diameter / 2
      const rect = target.getBoundingClientRect()
      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${e.clientX - rect.left - radius}px`
      circle.style.top = `${e.clientY - rect.top - radius}px`
      circle.className = 'ripple-span'
      target.appendChild(circle)
      window.setTimeout(() => circle.remove(), 600)
    }

    const classes = cn(
      'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      variants[variant],
      disabled && 'pointer-events-none opacity-60',
      className,
    )

    if (href) {
      return (
        <a href={href} className={classes} onClick={createRipple}>
          {children}
        </a>
      )
    }

    return (
      <button
        type={type}
        disabled={disabled}
        className={classes}
        onClick={(e) => { createRipple(e); onClick?.() }}
      >
        {children}
      </button>
    )
  },
)

RippleButton.displayName = 'RippleButton'
