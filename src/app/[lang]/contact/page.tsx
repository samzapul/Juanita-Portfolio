import type { Metadata } from 'next'
import { translations } from '@/lib/translations'
import { siteConfig, type Locale } from '@/lib/config'
import FadeIn from '@/components/ui/FadeIn'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const t = translations[params.lang]
  return { title: t.nav.contact }
}

export default function ContactPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang
  const t = translations[lang].contact

  const links = [
    { label: t.emailLabel, href: `mailto:${siteConfig.email}`, value: siteConfig.email, show: !!siteConfig.email },
    { label: t.linkedinLabel, href: siteConfig.linkedin, value: 'LinkedIn', show: !!siteConfig.linkedin },
    { label: t.instagramLabel, href: siteConfig.instagram, value: 'Instagram', show: !!siteConfig.instagram },
    { label: t.behanceLabel, href: siteConfig.behance, value: 'Behance', show: !!siteConfig.behance },
  ].filter((l) => l.show)

  return (
    <div className="min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-10 lg:px-16 flex flex-col">
      <div className="max-w-screen-xl mx-auto w-full flex-1 flex flex-col justify-between">

        {/* Header */}
        <div>
          <FadeIn>
            <span className="eyebrow block mb-6">{t.eyebrow}</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-light italic mb-4 text-[#C0182C] whitespace-nowrap" style={{ fontSize: 'clamp(2rem, 4.8vw, 5.5rem)' }}>
              {t.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-sm text-warm-gray max-w-md leading-relaxed">
              {t.subline}
            </p>
          </FadeIn>
        </div>

        {/* Links */}
        <div className="mt-20 md:mt-0">
          <hr className="rule mb-0" />
          {links.map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.07}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-8 border-b border-light-gray hover:border-ink/30 transition-colors duration-400"
              >
                <span className="eyebrow">{link.label}</span>
                <span className="font-display text-2xl md:text-4xl font-light group-hover:italic group-hover:text-[#C0182C] transition-all duration-400">
                  {link.value}
                </span>
                <span className="font-sans text-xs text-warm-gray group-hover:text-[#C0182C] group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  )
}
