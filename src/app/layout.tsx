import type { Metadata } from 'next'
import { Outfit, Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

// ─── Fonts ────────────────────────────────────────────────────
const poppins = Poppins({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  variable: '--font-subtitle',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  // EDIT: Update in src/lib/config.ts
  title: {
    default: 'Portfolio — Industrial Designer',
    template: '%s — Portfolio',
  },
  description: 'Industrial designer combining conceptual thinking with commercial application.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} ${outfit.variable} bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
