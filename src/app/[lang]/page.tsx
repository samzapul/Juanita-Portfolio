import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig, type Locale } from '@/lib/config'
import { translations } from '@/lib/translations'
import { getFeaturedProjects } from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeIn from '@/components/ui/FadeIn'
import HeroSection from '@/components/sections/HeroSection'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const lang = params.lang
  return {
    title: siteConfig.name,
    description: siteConfig.description[lang],
  }
}

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const t = translations[lang]
  const featured = getFeaturedProjects()

  return (
    <>
      <HeroSection lang={lang} />

      {/* ─── SELECTED WORK ─────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16" style={{ marginTop: '-1.5cm' }}>
        <div className="max-w-screen-xl mx-auto">

          <FadeIn className="mb-8">
            <Link
              href={`/${lang}/work`}
              className="font-subtitle text-[15px] uppercase border-b border-ink/30 pb-0.5 hover:border-ink transition-colors duration-300 text-ink"
              style={{ letterSpacing: '0.25em' }}
            >
              {t.hero.cta}
            </Link>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
            {featured[0] && (
              <ProjectCard project={featured[0]} lang={lang} variant="default" index={0} />
            )}
            {featured[1] && (
              <ProjectCard project={featured[1]} lang={lang} variant="default" index={1} />
            )}
            {featured[2] && (
              <ProjectCard project={featured[2]} lang={lang} variant="default" index={2} />
            )}
          </div>

        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 border-t border-light-gray" style={{ backgroundColor: '#1B1F3B' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <FadeIn delay={0.05}>
                <span className="font-sans text-[15px] block mb-6 uppercase" style={{ color: '#FAF9F6', letterSpacing: '0.25em' }}>{t.aboutPreview.eyebrow}</span>
                <p className="font-subtitle text-editorial-sm font-light leading-snug" style={{ color: '#FAF9F6' }}>
                  {t.aboutPreview.text}
                </p>
                <Link
                  href={`/${lang}/about`}
                  className="font-sans text-[15px] uppercase transition-colors duration-300 mt-8 inline-block"
                  style={{ color: '#FAF9F6', letterSpacing: '0.25em' }}
                >
                  {t.aboutPreview.link}
                </Link>
              </FadeIn>
            </div>

            <div className="hidden md:flex md:col-span-1 justify-center">
              <div className="h-40 w-px bg-light-gray" />
            </div>

            <div className="md:col-span-6">
              <FadeIn delay={0.15}>
                <p className="font-display text-[50px] font-light italic text-[#F19DAF] leading-tight text-center">
                  {siteConfig.tagline[lang]}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 border-t border-light-gray">
        <div className="max-w-screen-xl mx-auto text-center">
          <FadeIn>
            <span className="font-subtitle block mb-6 text-[15px] font-medium tracking-[0.25em] uppercase text-ink">{t.contact.eyebrow}</span>
            <h2 className="font-display text-display-md font-light italic mb-10 max-w-2xl mx-auto">
              {t.contact.headline}
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-subtitle text-xs tracking-widest lowercase border border-[#F19DAF] hover:border-[#F19DAF] hover:bg-[#F19DAF] hover:text-cream px-8 py-4 inline-block transition-all duration-400 ease-premium rounded-full"
            >
              {siteConfig.email}
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}