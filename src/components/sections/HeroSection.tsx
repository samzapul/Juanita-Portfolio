import Link from 'next/link'
import { siteConfig, type Locale } from '@/lib/config'
import { translations } from '@/lib/translations'
import FadeIn from '@/components/ui/FadeIn'

interface HeroSectionProps {
  lang: Locale
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = translations[lang].hero

  return (
    <section className="relative px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-20 md:pb-28">
      {/* Option 2 — large background letterform */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-3 md:top-1 right-0 italic leading-none text-clay/15"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 'clamp(22rem, 44vw, 54rem)',
        }}
      >
        JZ
      </span>
      <div className="max-w-screen-xl mx-auto relative z-10">
        <FadeIn delay={0.05}>
          <h1 className="font-display text-display-lg leading-none tracking-tight mb-10">
            <span className="block">{t.headline1}</span>
            <span className="block italic">{t.headline2}</span>
            <span className="block">{t.headline3}</span>
          </h1>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <FadeIn delay={0.18} className="max-w-md">
            <p className="font-sans text-sm text-warm-gray leading-relaxed">
              {t.subline}
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <Link
              href={`/${lang}/work`}
              className="font-sans text-xs tracking-widest uppercase border-b border-ink/30 pb-0.5 hover:border-ink transition-colors duration-300"
            >
              {t.cta}
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>

  )
}
