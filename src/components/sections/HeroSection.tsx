import Image from 'next/image'
import { siteConfig, type Locale } from '@/lib/config'
import { getTranslations, getLocale } from '@/lib/translations'
import FadeIn from '@/components/ui/FadeIn'

interface HeroSectionProps {
  lang: Locale
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const locale = getLocale(lang)
  const t = getTranslations(locale).hero

  return (
    <section
      className="relative px-4 md:px-10 lg:px-16 pt-28 md:pt-40 pb-10 md:pb-28 overflow-hidden"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-screen-xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">

        {/* Left: text content */}
        <div className="flex-1 min-w-0">
          <FadeIn delay={0.05}>
            <h1
              className="font-display leading-none tracking-tight mb-6 md:mb-10"
              style={{ fontSize: 'clamp(3.2rem, 16vw, 7.8125rem)' }}
            >
              <span className="block">
                {lang === 'en'
                  ? <span style={{ background: 'linear-gradient(transparent 15%, #F19DAF 15%, #F19DAF 88%, transparent 88%)', WebkitTextStroke: '2px #1A1A1A', WebkitTextFillColor: 'transparent' }}>{t.headline1}</span>
                  : t.headline1}
              </span>
              <span className="block italic">
                {lang === 'es'
                  ? <span style={{ background: 'linear-gradient(transparent 15%, #F19DAF 15%, #F19DAF 88%, transparent 88%)', WebkitTextStroke: '2px #1A1A1A', WebkitTextFillColor: 'transparent' }}>{t.headline2}</span>
                  : t.headline2}
              </span>
              <span className="block">{t.headline3}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18} className="max-w-md">
            <p className="font-subtitle text-[16px] md:text-[20px] font-bold text-[#000000] leading-relaxed">
              {t.subline}
            </p>
            <p className="font-subtitle text-[16px] md:text-[20px] font-bold text-[#000000] leading-relaxed">
              {t.subline2}
            </p>
          </FadeIn>
        </div>

        {/* Right: image — responsive fill container */}
        <FadeIn delay={0.12} className="w-full md:w-auto flex-shrink-0 flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm md:max-w-none md:w-[480px] aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about/hero.png"
              alt="Juanita Zapata"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
