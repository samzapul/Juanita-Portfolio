'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project, FilterCategory } from '@/lib/projects'
import type { Locale } from '@/lib/config'
import { getTranslations } from '@/lib/translations'
import ProjectCard from '@/components/ui/ProjectCard'
import LiquidCard from '@/components/ui/LiquidCard'

const CATEGORIES: FilterCategory[] = ['experiencia', 'producto', 'identidad']

// Grid placement for 1, 2, or 3 cards on desktop
const CARD_COLS: Record<number, string[]> = {
  1: ['md:col-start-5 md:col-span-4'],
  2: ['md:col-start-3 md:col-span-4', 'md:col-start-7 md:col-span-4'],
  3: ['md:col-start-1 md:col-span-4', 'md:col-start-5 md:col-span-4', 'md:col-start-9 md:col-span-4'],
}

interface Props {
  allProjects: Project[]
  circleProjects: Project[] // the 3 featured projects whose thumbnails appear in the circles
  lang: Locale
}

export default function FilterableWork({ allProjects, circleProjects, lang }: Props) {
  const t = getTranslations(lang)
  const [selected, setSelected] = useState<FilterCategory>('experiencia')

  const filtered = allProjects
    .filter((p) => p.filterCategory === selected)
    .sort((a, b) => a.order - b.order)

  const colClasses = CARD_COLS[Math.min(filtered.length, 3)] ?? CARD_COLS[3]

  return (
    <>
      {/* ── Section D: category selector circles ─────────────── */}
      <div className="md:col-start-1 md:col-span-12 md:row-start-3">
        <LiquidCard shade="cream" className="px-6 md:px-10 pt-5 pb-6">
          <p
            className="font-sans uppercase mb-5"
            style={{ fontSize: '16px', letterSpacing: '0.18em', color: '#1B1F3B' }}
          >
            {t.home.projectsTitle}
          </p>
          <div className="flex items-center justify-around gap-3 md:gap-6">
            {CATEGORIES.map((cat, i) => {
              const isActive = selected === cat
              const project = circleProjects[i]
              return (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className="flex flex-col items-center gap-2 flex-1 min-w-0 group cursor-pointer"
                >
                  <div
                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: '#E8E6E1',
                      boxShadow: isActive
                        ? '0 0 0 2.5px #F19DAF, 0 0 0 5px rgba(241,157,175,0.2)'
                        : 'none',
                    }}
                  >
                    {project?.thumbnail && (
                      <Image
                        src={project.thumbnail}
                        alt={t.home.thumbnailLabels[i]}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    )}
                  </div>
                  <span
                    className="font-sans text-center leading-tight line-clamp-2 w-full transition-all duration-200"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: isActive ? '#1B1F3B' : '#8A8580',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {t.home.thumbnailLabels[i]}
                  </span>
                </button>
              )
            })}
          </div>
        </LiquidCard>
      </div>

      {/* ── Section E: filtered project cards ────────────────── */}
      <div className="md:col-start-1 md:col-span-12 md:row-start-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3"
          >
            {filtered.map((project, i) => (
              <div key={project.slug} className={colClasses[i] ?? 'md:col-span-4'}>
                <ProjectCard project={project} lang={lang} index={i} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
