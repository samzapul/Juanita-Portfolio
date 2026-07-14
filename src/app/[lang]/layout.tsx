import { notFound } from 'next/navigation'
import { siteConfig, type Locale } from '@/lib/config'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export function generateStaticParams() {
  return siteConfig.locales.map((lang) => ({ lang }))
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = params.lang as Locale

  if (!siteConfig.locales.includes(lang)) {
    notFound()
  }

  return (
    <>
      <Nav lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  )
}
