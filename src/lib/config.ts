export const siteConfig = {
  // ─── Designer identity ─────────────────────────────────────
  name: 'Juanita Zapata Ulloa',
  firstName: 'Juanita',
  lastName: 'Zapata',
  title: {
    en: 'Industrial Designer',
    es: 'Diseñadora Industrial',
  },
  tagline: {
    en: 'Creative and strategic design for brands, products, and experiences.',
    es: 'Diseño creativo y estratégico para marcas, productos y experiencias.',
  },

  // ─── Contact ────────────────────────────────────────────────
  email: 'juanitazapataulloa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/juanita-zapata-ulloa-890375347',
  instagram: '',   // puedes ponerlo después
  behance: '',     // opcional

  // ─── CV ─────────────────────────────────────────────────────
  cvPath: '/cv/cv-juanita-zapata.pdf',

  // ─── SEO & Metadata ─────────────────────────────────────────
  url: 'https://yourname.com', // cambia esto cuando tengas dominio
  description: {
    en: 'Industrial designer with a creative and strategic approach, focused on branding, consumer-centered design, and the development of purposeful products and experiences.',
    es: 'Diseñadora industrial con un enfoque creativo y estratégico, enfocada en branding, diseño centrado en el consumidor y el desarrollo de productos y experiencias con propósito.',
  },
  ogImage: '/images/og-image.jpg',

  // ─── Supported languages ────────────────────────────────────
  locales: ['en', 'es'] as const,
  defaultLocale: 'en' as const,
}
export type Locale = typeof siteConfig.locales[number]