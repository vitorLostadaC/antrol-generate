'use client'

import { Button } from '@/components/ui/button'
import { Roboto_Mono } from 'next/font/google'
import { Logo } from './logo'
import { Avatar } from './avatar'
import { ThemeButton } from './themeButton'
import { Coins } from './coins'
import { SignInButton } from './signInButton'
import { useSession } from 'next-auth/react'
import { useI18n } from '@/locales/client'
import { useTailwindBreakPoint } from '@/hooks/useTailwindBreakpoints'
import { NavigateLinks } from './navigateLinks'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const Header = () => {
  const { data: session } = useSession()
  let currentBreakpoint = useTailwindBreakPoint()
  const t = useI18n()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex max-w-screen-2xl items-center py-3 sm:container max-sm:px-3">
        <NavigateLinks session={session} />
      </div>
    </header>
  )
}
