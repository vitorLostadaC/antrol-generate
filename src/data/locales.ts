export const locales = ['en', 'pt', 'zh', 'ru', 'ja', 'fr', 'es', 'ar'] as const
export type Locale = (typeof locales)[number]
