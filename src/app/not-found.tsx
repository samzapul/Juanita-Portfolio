import Link from 'next/link'

// This is the global 404 — it does not have lang context
// For a bilingual 404, we default to English
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow block mb-8">404</span>
      <h1 className="font-display text-display-md font-light italic mb-4">
        Page not found.
      </h1>
      <p className="font-sans text-sm text-warm-gray mb-10 max-w-sm leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/en"
        className="font-sans text-xs tracking-widest uppercase border border-ink hover:bg-ink hover:text-cream px-8 py-4 transition-all duration-400"
      >
        Back to Home
      </Link>
    </div>
  )
}
