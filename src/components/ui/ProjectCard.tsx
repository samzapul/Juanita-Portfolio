'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'
import type { Locale } from '@/lib/config'
import { translations } from '@/lib/translations'
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
  const t = translations[lang]

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/${lang}/project/${project.slug}`}
        className="group block"
        aria-label={project.title[lang]}
      >
        {/* Image container */}
        <div
          className={clsx(
            'relative overflow-hidden bg-light-gray',
            variant === 'large' ? 'aspect-[4/3]' : 'aspect-[3/4]',
            variant === 'wide' && 'aspect-[16/9]'
          )}
        >
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            fill
            className="object-cover transition-transform duration-800 ease-premium group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-600" />
        </div>

        {/* Meta */}
        <div className="pt-4 pb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="eyebrow">{project.category[lang]}</span>
            <span className="eyebrow">{project.year}</span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-light mt-1">
            {project.title[lang]}
          </h3>
          <p className="font-sans text-sm text-warm-gray mt-2 leading-relaxed line-clamp-2">
            {project.shortDescription[lang]}
          </p>
          <span className="font-sans text-xs tracking-widest uppercase text-clay mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            {t.work.viewProject}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
