import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, type Locale } from '@/lib/config'
import { translations } from '@/lib/translations'
import FadeIn from '@/components/ui/FadeIn'

interface HeroSectionProps {
  lang: Locale
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = translations[lang].hero

  return (
    <section className="relative px-6 md:px-10 lg:px-16 pt-24 md:pt-36 pb-16 md:pb-28 overflow-x-hidden" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="max-w-screen-xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center gap-8">
        {/* Left: text content */}
        <div className="flex-1">
          <FadeIn delay={0.05}>
            <h1 className="font-display leading-none tracking-tight mb-10" style={{ fontSize: '125px' }}>
              <span className="block">
                {lang === 'en' ? <span style={{ background: 'linear-gradient(transparent 15%, #F19DAF 15%, #F19DAF 88%, transparent 88%)', WebkitTextStroke: '2px #1A1A1A', WebkitTextFillColor: 'transparent' }}>{t.headline1}</span> : t.headline1}
              </span>
              <span className="block italic">
                {lang === 'es' ? <span style={{ background: 'linear-gradient(transparent 15%, #F19DAF 15%, #F19DAF 88%, transparent 88%)', WebkitTextStroke: '2px #1A1A1A', WebkitTextFillColor: 'transparent' }}>{t.headline2}</span> : t.headline2}
              </span>
              <span className="block">{t.headline3}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18} className="max-w-md">
            <p className="font-subtitle text-[20px] font-bold text-[#000000] leading-relaxed">
              {t.subline}
            </p>
            <p className="font-subtitle text-[20px] font-bold text-[#000000] leading-relaxed">
              {t.subline2}
            </p>
          </FadeIn>

        </div>

        {/* Right: image */}
        <FadeIn delay={0.12} className="flex-shrink-0 flex justify-end">
          <Image
            src="/images/about/hero.png"
            alt="Juanita Zapata"
            width={480}
            height={600}
            className="object-cover"
            priority
          />
        </FadeIn>
      </div>
    </section>
  )
}
