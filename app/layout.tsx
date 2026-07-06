import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mark Evander J. Bayona — AI Automation Specialist',
  description:
    'I build AI automation systems that save businesses hours every week. Workflow automation, CRM automation, AI chatbots, and process optimization using Zapier, Make, n8n, and GoHighLevel.',
  generator: 'v0.app',
  openGraph: {
    title: 'Mark Evander J. Bayona — AI Automation Specialist',
    description:
      'AI automation systems that save businesses hours every week. Workflow automation, CRM automation, and AI chatbots.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#10B981',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
