import Link from 'next/link'
import { siteConfig, type Locale } from '@/lib/config'
import { translations } from '@/lib/translations'

interface FooterProps {
  lang: Locale
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang]
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-light-gray">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Name + rights */}
          <div className="flex flex-col gap-1">
            <span className="font-display text-base font-light">{siteConfig.name}</span>
            <span className="font-sans text-xs text-warm-gray">
              © {year} {t.footer.rights}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 md:gap-8">
            <Link
              href={`/${lang}/work`}
              className="font-sans text-xs tracking-widest uppercase text-warm-gray hover:text-ink transition-colors duration-300"
            >
              {t.nav.work}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="font-sans text-xs tracking-widest uppercase text-warm-gray hover:text-ink transition-colors duration-300"
            >
              {t.nav.about}
            </Link>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-xs tracking-widest uppercase text-warm-gray hover:text-ink transition-colors duration-300"
              >
                Email
              </a>
            )}
            {siteConfig.linkedin && (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase text-warm-gray hover:text-ink transition-colors duration-300"
              >
                LinkedIn
              </a>
            )}
          </div>

          {/* Made with */}
          <span className="font-sans text-xs text-warm-gray hidden lg:block">
            {t.footer.madeWith}
          </span>
        </div>
      </div>
    </footer>
  )
}
