'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'
import type { Locale } from '@/lib/config'
import { getTranslations } from '@/lib/translations'
import clsx from 'clsx'

interface ProjectCardProps {
  project: Project
  lang: Locale
  variant?: 'default' | 'large' | 'wide'
  index?: number
}

export default function ProjectCard({
  project,
  lang,
  variant = 'default',
  index = 0,
}: ProjectCardProps) {
  const t = getTranslations(lang)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={`/${lang}/project/${project.slug}`}
        className="group block h-full"
        aria-label={project.title[lang]}
      >
        <div className="rounded-[20px] overflow-hidden border border-[#E8E6E1] shadow-[0_2px_16px_rgba(26,26,26,0.06)] h-full flex flex-col">
          {/* Image */}
          <div
            className={clsx(
              'relative overflow-hidden bg-light-gray flex-shrink-0',
              variant === 'large' ? 'aspect-[4/3]' : 'aspect-[3/4]',
              variant === 'wide' && 'aspect-[16/9]'
            )}
          >
            <Image
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              fill
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
          </div>

          {/* Meta */}
          <div className="px-4 pt-4 pb-5 bg-[#FAF9F6] flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="font-subtitle text-[12px] font-medium uppercase text-warm-gray" style={{ letterSpacing: '0.08em' }}>
                {project.category[lang]}
              </span>
              <span className="font-subtitle text-[12px] font-medium uppercase text-warm-gray">
                {project.year}
              </span>
            </div>
            <h3 className="font-display text-lg md:text-xl font-light mt-1 leading-tight">
              {project.title[lang]}
            </h3>
            <p className="font-sans text-xs text-warm-gray mt-2 leading-relaxed line-clamp-2 flex-1">
              {project.shortDescription[lang]}
            </p>
            <span className="font-sans text-[10px] tracking-widest uppercase text-clay mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {t.work.viewProject}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
