import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'
import { locales } from './data/locales'

const I18nMiddleware = createI18nMiddleware({
  locales: locales,
  defaultLocale: 'en',
  resolveLocaleFromRequest(request) {
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage && acceptLanguage.includes('pt')) {
      return 'pt'
    }

    return 'en'
  }
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
