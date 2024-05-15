export const locales = [
  'en',
  'pt',
  'zh',
  'ru',
  'ja',
  'fr',
  'es',
  'ar',
  'de'
] as const
export type Locale = (typeof locales)[number]
