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
      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto">
          <FadeIn className="mb-16 md:mb-20 flex items-end justify-between">
            <div>
              <span className="eyebrow block mb-3">{t.work.sectionLabel}</span>
              <div className="h-px w-12 bg-ink/20" />
            </div>
            <Link
              href={`/${lang}/work`}
              className="font-sans text-xs tracking-widest uppercase text-warm-gray hover:text-ink transition-colors duration-300 hidden md:block"
            >
              {t.work.viewAll}
            </Link>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
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

          <FadeIn className="mt-12 md:hidden">
            <Link
              href={`/${lang}/work`}
              className="font-sans text-xs tracking-widest uppercase border-b border-ink/30 pb-0.5"
            >
              {t.work.viewAll}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 py-24 md:py-32 border-t border-light-gray">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <FadeIn delay={0.05}>
                <span className="eyebrow block mb-6">{t.aboutPreview.eyebrow}</span>
                <p className="font-display text-editorial-sm font-light leading-snug">
                  {t.aboutPreview.text}
                </p>
                <Link
                  href={`/${lang}/about`}
                  className="font-sans text-xs tracking-widest uppercase text-warm-gray hover:text-ink transition-colors duration-300 mt-8 inline-block"
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
                <p className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light italic text-[#C0182C] leading-tight">
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
            <span className="eyebrow block mb-6">{t.contact.eyebrow}</span>
            <h2 className="font-display text-display-md font-light italic mb-10 max-w-2xl mx-auto">
              {t.contact.headline}
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-sans text-xs tracking-widest uppercase border border-ink hover:border-[#C0182C] hover:bg-[#C0182C] hover:text-cream px-8 py-4 inline-block transition-all duration-400 ease-premium"
            >
              {siteConfig.email}
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}