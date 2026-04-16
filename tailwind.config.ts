import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─── EDIT PALETTE HERE ───────────────────────────────
        cream: '#F7F7F5',
        ink: '#1A1A1A',
        clay: '#C0182C',
        'warm-gray': '#8A8580',
        'light-gray': '#E8E6E1',
        'mid-gray': '#D0CEC9',
        // ─────────────────────────────────────────────────────
      },
      fontFamily: {
        // ─── EDIT FONTS HERE ─────────────────────────────────
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        // ─────────────────────────────────────────────────────
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'reveal': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
}

export default config
