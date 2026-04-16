'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig, type Locale } from '@/lib/config'
import { translations } from '@/lib/translations'
import clsx from 'clsx'

interface NavProps {
  lang: Locale
}

export default function Nav({ lang }: NavProps) {
  const t = translations[lang]
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect scroll for subtle nav border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Swap lang in current path
  const otherLang: Locale = lang === 'en' ? 'es' : 'en'
  const switchPath = pathname.replace(`/${lang}`, `/${otherLang}`)

  const navLinks = [
    { href: `/${lang}/work`, label: t.nav.work },
    { href: `/${lang}/about`, label: t.nav.about },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ]

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          scrolled && 'backdrop-blur-md border-b border-[#C0182C]/30'
        )}
        style={{
          backgroundColor: pathname.includes('/project/')
            ? 'transparent'
            : 'rgba(192,24,44,0.15)',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Name */}
            <Link
              href={`/${lang}`}
              className="font-display text-base md:text-lg font-light tracking-wide hover:opacity-60 transition-opacity duration-300"
            >
              {siteConfig.name}
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'font-sans text-xs tracking-widest uppercase link-underline transition-opacity duration-300',
                    pathname.startsWith(link.href)
                      ? 'opacity-100'
                      : 'opacity-50 hover:opacity-100'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Language switcher */}
              <Link
                href={switchPath}
                className="font-sans text-xs tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                {otherLang.toUpperCase()}
              </Link>

              {/* CV Button */}
              <a
                href={siteConfig.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase border border-ink/30 hover:border-[#C0182C] hover:bg-[#C0182C] hover:text-cream px-4 py-2 transition-all duration-400 ease-premium"
              download
              >
                {t.nav.cv}
              </a>
            </div>

            {/* Mobile: lang switcher + hamburger */}
            <div className="flex md:hidden items-center gap-4">
              <Link
                href={switchPath}
                className="font-sans text-xs tracking-widest uppercase opacity-40"
              >
                {otherLang.toUpperCase()}
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col gap-1.5 p-1"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span
                  className={clsx(
                    'block h-px w-6 bg-ink transition-all duration-300',
                    menuOpen && 'rotate-45 translate-y-2'
                  )}
                />
                <span
                  className={clsx(
                    'block h-px w-6 bg-ink transition-all duration-300',
                    menuOpen && 'opacity-0'
                  )}
                />
                <span
                  className={clsx(
                    'block h-px w-6 bg-ink transition-all duration-300',
                    menuOpen && '-rotate-45 -translate-y-2'
                  )}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col"
          >
            <div className="h-16 md:h-20" />
            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-display-md font-light italic block hover:text-clay transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <a
                  href={siteConfig.cvPath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-widest uppercase border border-ink/30 px-6 py-3 inline-block mt-4"
                >
                  {t.nav.cv}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
