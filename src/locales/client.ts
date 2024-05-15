'use client'
import { Locale } from '@/data/locales'
import { AbstractDictionarie } from '@/schemas/locales'
import { createI18nClient } from 'next-international/client'

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale } =
  createI18nClient({
    en: () => import('./dictionaries/en.json'),
    pt: () => import('./dictionaries/pt.json'),
    zh: () => import('./dictionaries/zh.json'),
    ru: () => import('./dictionaries/ru.json'),
    ja: () => import('./dictionaries/ja.json'),
    fr: () => import('./dictionaries/fr.json'),
    es: () => import('./dictionaries/es.json'),
    ar: () => import('./dictionaries/ar.json')
  } as const satisfies Record<
    Locale,
    () => Promise<{ default: AbstractDictionarie }>
  >)
