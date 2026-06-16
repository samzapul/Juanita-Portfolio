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
      <div className="px-6 md:px-10 lg:px-16 py-10 md:py-12">
        <div className="max-w-screen-xl mx-auto flex justify-end">
          {/* Name + rights */}
          <div className="flex flex-col gap-1 text-right">
            <span className="font-display text-base font-light">{siteConfig.name}</span>
            <span className="font-sans text-xs text-warm-gray">
              © {year} {t.footer.rights}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
