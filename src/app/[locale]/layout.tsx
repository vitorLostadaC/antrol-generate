import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { SessionWrapper } from '@/contexts/sessionWrapper'
import { Locale } from '@/data/locales'
import { I18nProviderClient } from '@/locales/client'
import { Header } from '@/layout/header/'
import { ThemeWrapper } from '@/contexts/themeWrapper'
import { Toaster } from '@/components/ui/toaster'
import { Footer } from './components/footer'
import { PostHogProviderWrapper } from '@/contexts/posthogWrapper'
import { getScopedI18n } from '@/locales/server'
import logo from '@/assets/icon.webp'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('metadata.layout')

  return {
    title: 'Antrol AI',
    description: t('description'),
    icons: [{ rel: 'icon', url: logo.src }]
  }
}

type Props = {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}

export default function RootLayout({ children, params }: Props) {
  return (
    <SessionWrapper>
      <html
        lang={params.locale}
        className="scroll-smooth"
        suppressHydrationWarning
      >
        <body
          className={cn(
            'flex min-h-screen flex-col bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeWrapper
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <I18nProviderClient locale={params.locale}>
              <PostHogProviderWrapper>
                <Header />
                <main className="container flex flex-1 flex-col py-4 max-sm:px-3">
                  {children}
                </main>
                <Footer />
                <Toaster />
              </PostHogProviderWrapper>
            </I18nProviderClient>
          </ThemeWrapper>
        </body>
      </html>
    </SessionWrapper>
  )
}
