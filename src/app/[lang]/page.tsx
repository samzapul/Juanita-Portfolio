import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig, type Locale } from '@/lib/config'
import { getTranslations, getLocale } from '@/lib/translations'
import { projects, getFeaturedProjects } from '@/lib/projects'
import LiquidCard from '@/components/ui/LiquidCard'
import FilterableWork from '@/components/ui/FilterableWork'

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
  const lang = getLocale(params.lang)
  const t = getTranslations(lang)
  const circleProjects = getFeaturedProjects()

  return (
    /*
     * Outer shell — consistent side padding on all breakpoints.
     * pt-28/pt-32 clears the floating nav (top:1cm + h-14/h-16).
     */
    <div className="px-3 md:px-5 pt-28 md:pt-32 pb-8" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="max-w-screen-xl mx-auto">

        {/*
         * ══════════════════════════════════════════════════════════
         *  MAIN GRID COMPOSITION
         *
         *  Mobile  (< md)  : single column, DOM order determines stack
         *  Tablet  (md)    : 12-col grid, explicit placement
         *  Desktop (lg+)   : same 12-col, more generous sizing
         *
         *  Row layout:
         *    Row 1-2 │ Hero (col 1-7, span 2)  │ Bio (col 8-12)
         *            │                          │ Tagline (col 8-12)
         *    Row 3   │ Thumbnails (col 1-12)
         *    Row 4   │ Project1 (1-4) │ Project2 (5-8) │ Project3 (9-12)
         *    Row 5   │ Contact (1-7)  │ Secondary (8-12)
         * ══════════════════════════════════════════════════════════
         */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* ───────────────────────────────────────────────────────
              A. HERO CARD
              Mobile  : full width, aspect-[3/4] portrait
              Desktop : col 6-12, rows 1-2 (right column, dominant image)
          ─────────────────────────────────────────────────────── */}
          <div className="md:col-start-6 md:col-span-7 md:row-start-1 md:row-span-2 overflow-hidden rounded-[24px]">
            <div
              className="relative overflow-hidden rounded-[24px] aspect-[3/4] md:aspect-auto md:h-full"
              style={{ boxShadow: '0 4px 28px rgba(26,26,26,0.09)' }}
            >
              <Image
                src="/images/about/hero.png"
                alt={siteConfig.name}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) calc(100vw - 24px), 720px"
              />

              {/* Tab anchored to the pink upper zone of the image */}
              <div className="absolute left-5 z-10" style={{ top: 'calc(1.25rem + 0.8cm)' }}>
                <Link
                  href={`/${lang}/about`}
                  className="inline-flex items-center justify-center font-sans uppercase rounded-full bg-[#1B1F3B] border border-[rgba(230,184,194,0.35)] hover:bg-[#F19DAF] hover:border-[#F19DAF] text-[#FAF9F6] transition-all duration-300 px-16 h-10 min-w-[244px]"
                  style={{ fontSize: '16px', letterSpacing: '0.18em' }}
                >
                  {t.home.heroCta}
                </Link>
              </div>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────
              B. BIO CARD
              Mobile  : full width, below hero
              Desktop : col 1-5, row 1 (left editorial column)
          ─────────────────────────────────────────────────────── */}
          <div id="about" className="md:col-start-1 md:col-span-5 md:row-start-1">
            <LiquidCard shade="dark" className="p-5 md:p-7 h-full flex flex-col items-center justify-center">
              <h2
                className="font-display font-bold uppercase leading-tight text-center"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#FAF9F6', letterSpacing: '0.04em' }}
              >
                {t.home.portfolioTitle}
              </h2>
            </LiquidCard>
          </div>

          {/* ───────────────────────────────────────────────────────
              C. TAGLINE / APPROACH CARD
              Mobile  : full width
              Desktop : col 1-5, row 2 (left editorial column)
          ─────────────────────────────────────────────────────── */}
          <div className="md:col-start-1 md:col-span-5 md:row-start-2">
            <LiquidCard shade="dark" className="p-5 md:p-7 h-full flex flex-col justify-between">
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <p
                  className="font-display font-light italic leading-tight"
                  style={{ fontSize: 'clamp(1.3rem, 2.6vw, 2rem)', color: '#F19DAF' }}
                >
                  {t.hero.subline}
                </p>
                <p
                  className="font-display font-light italic leading-tight mt-4"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', color: '#F19DAF' }}
                >
                  {t.hero.subline2}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center justify-center font-sans uppercase rounded-full border border-[rgba(230,184,194,0.35)] hover:border-[#F19DAF] hover:bg-[#F19DAF] text-[#FAF9F6] px-6 h-10 transition-all duration-300"
                  style={{ fontSize: '13px', letterSpacing: '0.1em' }}
                >
                  {t.about.contactLabel}
                </Link>
                <a
                  href={siteConfig.cvPath}
                  download
                  className="inline-flex items-center justify-center font-sans uppercase rounded-full border border-[rgba(230,184,194,0.35)] hover:border-[#F19DAF] hover:bg-[#F19DAF] text-[#FAF9F6] px-6 h-10 transition-all duration-300"
                  style={{ fontSize: '13px', letterSpacing: '0.1em' }}
                >
                  {t.nav.cv}
                </a>
              </div>
            </LiquidCard>
          </div>

          {/* ───────────────────────────────────────────────────────
              D + E. CATEGORY FILTER + PROJECT CARDS
              Managed by FilterableWork (client component).
              Circles (row 3) act as category selectors;
              cards (row 4) update to match the selection.
          ─────────────────────────────────────────────────────── */}
          <FilterableWork
            allProjects={projects}
            circleProjects={circleProjects}
            lang={lang}
          />

          {/* ───────────────────────────────────────────────────────
              F. CONTACT CTA CARD (row 5, col 1-7)
              Mobile  : full width
              Desktop : 7 cols
          ─────────────────────────────────────────────────────── */}
          <div className="md:col-start-1 md:col-span-7 md:row-start-5">
            <LiquidCard shade="pink" className="p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <span
                  className="block mb-3 font-sans uppercase"
                  style={{ fontSize: '10px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.72)' }}
                >
                  {t.contact.eyebrow}
                </span>
                <h2
                  className="font-display font-light italic leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#ffffff' }}
                >
                  {t.contact.headline}
                </h2>
                <p
                  className="font-sans mt-3 leading-relaxed"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', maxWidth: '34ch' }}
                >
                  {t.contact.subline}
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block mt-6 font-sans uppercase rounded-full px-6 py-3 transition-all duration-300 hover:opacity-90 self-start"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  backgroundColor: '#FAF9F6',
                  color: '#1B1F3B',
                  wordBreak: 'break-all',
                }}
              >
                {siteConfig.email}
              </a>
            </LiquidCard>
          </div>

          {/* ───────────────────────────────────────────────────────
              G. SECONDARY / PROFILE CARD (row 5, col 8-12)
              Mobile  : full width
              Desktop : 5 cols
          ─────────────────────────────────────────────────────── */}
          <div className="md:col-start-8 md:col-span-5 md:row-start-5">
            <LiquidCard shade="cream" className="p-6 md:p-7 h-full flex flex-col">
              <span
                className="block mb-5 font-sans uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.22em', color: '#8A8580' }}
              >
                {t.home.specializationLabel}
              </span>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Branding', 'Product', 'Packaging', 'Experience'].map((tag) => (
                  <span
                    key={tag}
                    className="font-sans uppercase rounded-full border border-[#E8E6E1] px-3 py-1.5"
                    style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#8A8580' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className="font-sans leading-relaxed flex-1"
                style={{ fontSize: '13px', color: 'rgba(26,26,26,0.6)' }}
              >
                {siteConfig.description[lang]}
              </p>

              <div className="mt-6 pt-5 border-t border-[#E8E6E1] flex items-center justify-between">
                <span
                  className="font-display font-light italic"
                  style={{ fontSize: '15px', color: '#1B1F3B' }}
                >
                  {siteConfig.name}
                </span>
                <div className="flex items-center gap-2">
                  <Link
                    href="/es"
                    className="font-sans uppercase transition-opacity duration-300"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      color: '#1B1F3B',
                      opacity: lang === 'es' ? 1 : 0.35,
                    }}
                  >
                    ES
                  </Link>
                  <span style={{ color: '#C0C0BC', fontSize: '11px' }}>/</span>
                  <Link
                    href="/en"
                    className="font-sans uppercase transition-opacity duration-300"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      color: '#1B1F3B',
                      opacity: lang === 'en' ? 1 : 0.35,
                    }}
                  >
                    EN
                  </Link>
                </div>
              </div>
            </LiquidCard>
          </div>

        </div>
        {/* end grid */}

      </div>
    </div>
  )
}
