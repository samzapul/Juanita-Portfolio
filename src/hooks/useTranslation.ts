'use client'

import { getTranslations } from '@/lib/translations'
import type { Locale } from '@/lib/config'

export function useTranslation(lang: Locale) {
  return getTranslations(lang)
}
