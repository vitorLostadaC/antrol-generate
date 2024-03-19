import { Locale } from '@/data/locales'
import { AbstractDictionarie } from '@/schemas/locales'
import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import('./dictionaries/en.json'),
  pt: () => import('./dictionaries/pt.json')
} as const satisfies Record<
  Locale,
  () => Promise<{ default: AbstractDictionarie }>
>)
