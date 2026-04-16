'use client'

import { translations } from '@/lib/translations'
import type { Locale } from '@/lib/config'

export function useTranslation(lang: Locale) {
  return translations[lang]
}
