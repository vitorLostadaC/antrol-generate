import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { SessionWrapper } from '@/contexts/sessionWrapper'
import { Locale } from '@/data/locales'
import { I18nProviderClient } from '@/locales/client'
import { Header } from '@/layout/header/'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  // TODO generate metada by language
  title: 'Create Next App',
  description: 'Generated by create next app'
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
      <html lang={params.locale}>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <Header />
          <I18nProviderClient locale={params.locale}>
            <main className="container">{children}</main>
          </I18nProviderClient>
        </body>
      </html>
    </SessionWrapper>
  )
}
