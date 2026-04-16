import type { Metadata } from 'next'
import { translations } from '@/lib/translations'
import { getAllProjectsSorted } from '@/lib/projects'
import { siteConfig, type Locale } from '@/lib/config'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeIn from '@/components/ui/FadeIn'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const lang = params.lang
  return {
    title: translations[lang].nav.work,
    description: siteConfig.description[lang],
  }
}

export default function WorkPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const t = translations[lang]
  const allProjects = getAllProjectsSorted()

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-10 lg:px-16">
      {/* JZ letterform */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-3 md:top-1 right-0 italic leading-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 'clamp(22rem, 44vw, 54rem)',
          color: 'rgba(192,24,44,0.15)',
        }}
      >
        JZ
      </span>
      <div className="max-w-screen-xl mx-auto relative z-10">

        {/* Header */}
        <FadeIn className="mb-16 md:mb-24">
          <span className="eyebrow block mb-4">{t.work.sectionLabel}</span>
          <h1 className="font-display text-display-lg font-light italic">
            {t.work.sectionLabel}
          </h1>
        </FadeIn>

        {/* Divider */}
        <hr className="rule mb-16" />

        {/* Editorial list layout */}
        <div className="space-y-0">
          {allProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.05}>
              <WorkListItem project={project} lang={lang} t={t} index={i} total={allProjects.length} />
            </FadeIn>
          ))}
        </div>

        {/* Grid view below list */}
        <div className="mt-24 md:mt-32">
          <hr className="rule mb-16" />
          <FadeIn>
            <span className="eyebrow block mb-12">All Projects</span>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {allProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} lang={lang} index={i} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Work list item (editorial row layout) ────────────────────
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/projects'
import type { TranslationKey } from '@/lib/translations'
import clsx from 'clsx'

function WorkListItem({
  project,
  lang,
  t,
  index,
  total,
}: {
  project: Project
  lang: Locale
  t: TranslationKey
  index: number
  total: number
}) {
  return (
    <Link
      href={`/${lang}/project/${project.slug}`}
      className="group flex items-center gap-6 md:gap-10 py-8 border-b border-light-gray hover:border-ink/30 transition-colors duration-400"
    >
      {/* Number */}
      <span className="eyebrow w-8 shrink-0 hidden md:block text-warm-gray/40">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Thumbnail */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 overflow-hidden bg-light-gray">
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          fill
          className="object-cover transition-transform duration-600 group-hover:scale-105"
          sizes="96px"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h2 className="font-display text-2xl md:text-3xl font-light group-hover:italic transition-all duration-300">
          {project.title[lang]}
        </h2>
        <p className="font-sans text-sm text-warm-gray mt-1 line-clamp-1 hidden md:block">
          {project.shortDescription[lang]}
        </p>
      </div>

      {/* Category + year */}
      <div className="text-right shrink-0 hidden sm:block">
        <span className="eyebrow block">{project.category[lang]}</span>
        <span className="eyebrow block mt-1">{project.year}</span>
      </div>

      {/* Arrow */}
      <span className="font-sans text-xs text-warm-gray group-hover:text-clay group-hover:translate-x-1 transition-all duration-300 shrink-0">
        →
      </span>
    </Link>
  )
}
