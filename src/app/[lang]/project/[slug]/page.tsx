import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectBySlug, getAllProjectsSorted, type ProjectSection } from '@/lib/projects'
import { type Locale } from '@/lib/config'
import { translations } from '@/lib/translations'
import FadeIn from '@/components/ui/FadeIn'

interface Params {
  lang: Locale
  slug: string
}

export async function generateStaticParams() {
  const projects = getAllProjectsSorted()
  const locales: Locale[] = ['en', 'es']
  return locales.flatMap((lang) =>
    projects.map((p) => ({ lang, slug: p.slug }))
  )
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Not Found' }
  return {
    title: project.title[params.lang],
    description: project.shortDescription[params.lang],
  }
}

export default function ProjectPage({ params }: { params: Params }) {
  const { lang, slug } = params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const t = translations[lang]
  const sections = project.sections[lang]
  const allProjects = getAllProjectsSorted()
  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  return (
    <article>
      {/* ─── HERO ───────────────────────────────────────────── */}
      <div className="relative w-full h-[55vh] md:h-[88vh] bg-light-gray overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.heroImageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 pb-14 md:pb-20">
          <div className="max-w-screen-xl mx-auto">
            <span className="eyebrow text-cream/60 block mb-4">
              {project.category[lang]} · {project.year}
            </span>
            <h1 className="font-display text-display-lg font-light italic text-cream leading-tight max-w-3xl">
              {project.title[lang]}
            </h1>
          </div>
        </div>
      </div>

      {/* ─── INTRO ──────────────────────────────────────────── */}
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-16 border-b border-light-gray">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 lg:col-span-6">
              <FadeIn>
                <p className="font-display text-editorial-sm font-light leading-snug">
                  {project.shortDescription[lang]}
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-5 lg:col-span-5 lg:col-start-8">
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs tracking-widest uppercase border border-light-gray px-3 py-1 text-warm-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CONTENT SECTIONS ───────────────────────────────── */}
      <div>
        {sections.map((section, i) => (
          <Section key={i} section={section} index={i} />
        ))}
      </div>

      {/* ─── PROJECT NAVIGATION ─────────────────────────────── */}
      <nav className="border-t border-light-gray px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/${lang}/project/${prevProject.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="eyebrow text-warm-gray">{t.work.prevProject}</span>
              <span className="font-display text-base md:text-2xl font-light group-hover:italic transition-all duration-300 line-clamp-2">
                ← {prevProject.title[lang]}
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href={`/${lang}/work`}
            className="eyebrow text-warm-gray hover:text-ink transition-colors duration-300 hidden md:block"
          >
            {t.work.backToWork}
          </Link>

          {nextProject ? (
            <Link
              href={`/${lang}/project/${nextProject.slug}`}
              className="group flex flex-col gap-1 text-right"
            >
              <span className="eyebrow text-warm-gray">{t.work.nextProject}</span>
              <span className="font-display text-base md:text-2xl font-light group-hover:italic transition-all duration-300 line-clamp-2">
                {nextProject.title[lang]} →
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </article>
  )
}

// ─── Section renderer ─────────────────────────────────────────
function Section({ section, index }: { section: ProjectSection; index: number }) {
  const sectionNum = String(index + 1).padStart(2, '0')

  switch (section.type) {
    case 'metadata':
      return (
        <div className="px-6 md:px-10 lg:px-16 py-10 md:py-12 border-b border-light-gray">
          <div className="max-w-screen-xl mx-auto">
            <FadeIn>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {section.items?.map((item) => (
                  <div key={item.label}>
                    <dt className="font-sans text-xs tracking-widest uppercase text-clay mb-2">{item.label}</dt>
                    <dd className="font-sans text-sm text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      )

    case 'text':
      return (
        <div className="px-6 md:px-10 lg:px-16 py-10 md:py-14 border-b border-light-gray">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <FadeIn className="md:col-span-7 lg:col-span-7">
                {section.eyebrow && (
                  <span className="font-sans text-xs tracking-widest uppercase text-clay block mb-4">
                    {section.eyebrow}
                  </span>
                )}
                {section.title && (
                  <h2 className="font-display text-display-md font-light italic mb-6 leading-tight">
                    {section.title}
                  </h2>
                )}
                {section.body && (
                  <p className="font-sans text-sm md:text-base leading-relaxed text-ink/75 max-w-xl">
                    {section.body}
                  </p>
                )}
              </FadeIn>
              <div className="hidden md:flex md:col-span-3 md:col-start-10 justify-end items-start">
                <span
                  className="font-display font-light italic text-clay/30 select-none"
                  style={{ fontSize: 'clamp(5rem, 10vw, 9rem)', lineHeight: 1 }}
                >
                  {sectionNum}
                </span>
              </div>
            </div>
          </div>
        </div>
      )

    case 'image':
      return (
        <div className="px-6 md:px-10 lg:px-16 py-8 md:py-10 border-b border-light-gray">
          <div className="max-w-screen-xl mx-auto">
            <FadeIn>
              <div className="relative aspect-[16/9] overflow-hidden bg-light-gray">
                <Image
                  src={section.src!}
                  alt={section.alt || ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              {section.caption && (
                <p className="font-sans text-xs text-warm-gray mt-3 flex items-center gap-2">
                  <span className="inline-block w-4 h-px bg-clay/50" />
                  {section.caption}
                </p>
              )}
            </FadeIn>
          </div>
        </div>
      )

    case 'full-image':
      return (
        <FadeIn className="w-full border-b border-light-gray">
          <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden bg-light-gray">
            <Image
              src={section.src!}
              alt={section.alt || ''}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </FadeIn>
      )

    case 'image-text':
      return (
        <div className="px-6 md:px-10 lg:px-16 py-10 md:py-14 border-b border-light-gray">
          <div className="max-w-screen-xl mx-auto">
            <div
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                section.imageLeft ? '' : 'md:[&>*:first-child]:order-2'
              }`}
            >
              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden bg-light-gray">
                  <Image
                    src={section.imageSrc!}
                    alt={section.imageAlt || ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div>
                  {section.eyebrow && (
                    <span className="font-sans text-xs tracking-widest uppercase text-clay block mb-4">
                      {section.eyebrow}
                    </span>
                  )}
                  {section.title && (
                    <h3 className="font-display text-xl md:text-3xl font-light italic mb-4 leading-tight">
                      {section.title}
                    </h3>
                  )}
                  {section.body && (
                    <p className="font-sans text-sm leading-relaxed text-ink/75">
                      {section.body}
                    </p>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      )

    case 'gallery':
      return (
        <div className="px-6 md:px-10 lg:px-16 py-8 md:py-10 border-b border-light-gray">
          <div className="max-w-screen-xl mx-auto">
            <div
              className={`grid gap-4 md:gap-6 ${
                section.cols === 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'
              }`}
            >
              {section.images?.map((img, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="relative aspect-square overflow-hidden bg-light-gray">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  {img.caption && (
                    <p className="font-sans text-xs text-warm-gray mt-2 flex items-center gap-2">
                      <span className="inline-block w-4 h-px bg-clay/50" />
                      {img.caption}
                    </p>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      )

    case 'quote':
      return (
        <div className="px-6 md:px-10 lg:px-16 py-10 md:py-14 border-b border-light-gray">
          <div className="max-w-screen-xl mx-auto">
            <FadeIn>
              <blockquote className="border-l-2 border-clay pl-8 py-2 max-w-2xl">
                <p className="font-display text-xl md:text-3xl font-light italic text-ink/70 leading-snug">
                  "{section.body}"
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      )

    case 'reflection':
      return (
        <div className="px-6 md:px-10 lg:px-16 py-10 md:py-14">
          <div className="max-w-screen-xl mx-auto">
            <FadeIn>
              <div className="border-l-2 border-clay pl-6 md:pl-12 py-2 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7">
                  {section.eyebrow && (
                    <span className="font-sans text-xs tracking-widest uppercase text-clay block mb-4">
                      {section.eyebrow}
                    </span>
                  )}
                  {section.title && (
                    <h3 className="font-display text-xl md:text-3xl font-light italic mb-5 leading-tight">
                      {section.title}
                    </h3>
                  )}
                  {section.body && (
                    <p className="font-sans text-sm leading-relaxed text-ink/75">
                      {section.body}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      )

    default:
      return null
  }
}
