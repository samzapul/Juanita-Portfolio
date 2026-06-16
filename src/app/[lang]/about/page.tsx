import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig, type Locale } from '@/lib/config'
import { translations } from '@/lib/translations'
import FadeIn from '@/components/ui/FadeIn'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const lang = params.lang
  const t = translations[lang]
  return {
    title: t.nav.about,
    description: siteConfig.description[lang],
  }
}

export default function AboutPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const t = translations[lang].about

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24 items-center">
          <div className="md:col-span-7">
            <FadeIn>
              <span className="eyebrow block mb-6" style={{ fontSize: '80px', color: '#1A1A1A', letterSpacing: '5px' }}>{t.eyebrow}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-[100px] font-light leading-tight">
                <span style={{ background: 'linear-gradient(transparent 15%, #F19DAF 15%, #F19DAF 88%, transparent 88%)' }}>
                  {t.headline}
                </span>
              </h1>
            </FadeIn>
          </div>

          {/* Portrait */}
          <div className="md:col-span-5">
            <FadeIn delay={0.15}>
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-light-gray">
                <Image
                  src="/images/about/portrait.jpg"
                  alt="Juanita Zapata"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>

        <hr className="rule mb-16 md:mb-24" />

        {/* Bio + Philosophy */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-24 md:mb-32 px-6 md:px-10 lg:px-16 py-16 -mx-6 md:-mx-10 lg:-mx-16" style={{ backgroundColor: '#1B1F3B' }}>

          {/* Bio text */}
          <div className="md:col-span-7 lg:col-span-6 space-y-6">
            <FadeIn delay={0.05}>
              <p className="font-subtitle text-[18px] leading-relaxed text-justify" style={{ color: '#FAF9F6' }}>
                {t.intro}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-subtitle text-[18px] leading-relaxed text-justify" style={{ color: '#FAF9F6' }}>
                {t.paragraph2}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="font-subtitle text-[18px] leading-relaxed text-justify" style={{ color: '#FAF9F6' }}>
                {t.paragraph3}
              </p>
            </FadeIn>

            {/* CV + Contact buttons */}
            <FadeIn delay={0.2} className="pt-4">
              <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.cvPath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase border border-[#F19DAF] hover:border-[#F19DAF] hover:bg-[#F19DAF] hover:text-cream px-6 py-3 text-center transition-all duration-400 ease-premium rounded-full" style={{ color: '#FAF9F6' }}
              >
                {t.cvLabel}
              </a>
              <Link
                href={`/${lang}/contact`}
                className="font-sans text-xs tracking-widest uppercase border border-[#F19DAF] hover:border-[#F19DAF] hover:bg-[#F19DAF] hover:text-cream px-6 py-3 text-center transition-all duration-400 ease-premium rounded-full" style={{ color: '#FAF9F6' }}
              >
                {t.contactLabel}
              </Link>
              </div>
            </FadeIn>
          </div>

          {/* Philosophy block */}
          <div className="md:col-span-5 lg:col-start-8">
            <FadeIn delay={0.2}>
              <div className="p-6 md:p-8 rounded-2xl" style={{ backgroundColor: '#F19DAF' }}>
                <span className="eyebrow block mb-6" style={{ color: '#ffffff' }}>{t.philosophy.eyebrow}</span>
                <p className="font-display text-2xl md:text-4xl font-light italic leading-tight mb-6" style={{ color: '#ffffff' }}>
                  {t.philosophy.title}
                </p>
                <p className="font-sans text-[18px] leading-relaxed text-justify" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {t.philosophy.body}
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  )
}
