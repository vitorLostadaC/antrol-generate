'use client'
import { Locale } from '@/data/locales'
import { AbstractDictionarie } from '@/schemas/locales'
import { createI18nClient } from 'next-international/client'

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale } =
  createI18nClient({
    en: () => import('./dictionaries/en.json'),
    pt: () => import('./dictionaries/pt.json')
  } as const satisfies Record<
    Locale,
    () => Promise<{ default: AbstractDictionarie }>
  >)
