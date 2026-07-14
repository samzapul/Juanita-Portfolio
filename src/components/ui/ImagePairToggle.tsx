'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ProjectSection } from '@/lib/projects'

interface Props {
  section: ProjectSection
  bodyClass: string
  bodyFont: 'display' | 'subtitle' | 'sans'
}

export default function ImagePairToggle({ section, bodyClass, bodyFont }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const panels = section.panels ?? []

  return (
    <div className="px-6 md:px-10 lg:px-16 py-10 md:py-14 border-b border-light-gray">
      <div className="max-w-screen-xl mx-auto">
        {section.eyebrow && (
          <span
            className="font-sans uppercase text-clay block mb-6"
            style={{ fontSize: '16px', letterSpacing: '0.18em' }}
          >
            {section.eyebrow}
          </span>
        )}

        {/* Two image frames */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {panels.map((panel, i) => (
            <div key={i} className="flex flex-col gap-3">
              {/* Title above image */}
              <span
                className="font-sans uppercase text-ink"
                style={{ fontSize: '13px', letterSpacing: '0.12em' }}
              >
                {panel.buttonLabel}
              </span>

              {/* Image as clickable button */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="overflow-hidden rounded-[8px] w-full transition-all duration-300 group"
                style={{
                  outline: open === i ? '2.5px solid #1B1F3B' : '2.5px solid transparent',
                  outlineOffset: '3px',
                  backgroundColor: panel.imageSrc ? 'transparent' : '#E8E6E1',
                  minHeight: panel.imageSrc ? undefined : '120px',
                }}
              >
                {panel.imageSrc ? (
                  <div className="relative overflow-hidden">
                    <Image
                      src={panel.imageSrc}
                      alt={panel.imageAlt ?? ''}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 50vw, 40vw"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-all duration-300" />
                  </div>
                ) : null}
              </button>
            </div>
          ))}
        </div>

        {/* Expanded text — shown below both frames */}
        {open !== null && panels[open] && (
          <div className="mt-6 space-y-4">
            {panels[open].body.split('\n\n').map((para, i) => (
              <p
                key={i}
                className={`${bodyClass} leading-relaxed text-ink/75`}
                style={{
                  fontSize: '16px',
                  letterSpacing: bodyFont === 'subtitle' ? 'normal' : '0.18em',
                }}
              >
                {para}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
