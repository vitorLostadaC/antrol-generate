import { Locale } from '@/data/locales'
import { AbstractDictionarie } from '@/schemas/locales'
import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: () => import('./dictionaries/en.json'),
    pt: () => import('./dictionaries/pt.json'),
    zh: () => import('./dictionaries/zh.json'),
    ru: () => import('./dictionaries/ru.json'),
    ja: () => import('./dictionaries/ja.json'),
    fr: () => import('./dictionaries/fr.json'),
    es: () => import('./dictionaries/es.json'),
    ar: () => import('./dictionaries/ar.json'),
    de: () => import('./dictionaries/de.json')
  } as const satisfies Record<
    Locale,
    () => Promise<{ default: AbstractDictionarie }>
  >)
