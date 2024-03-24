'use client'

import { Button } from '@/components/ui/button'
import { Roboto_Mono } from 'next/font/google'
import { Logo } from './logo'
import { NavigateLinks } from './navigateLinks'
import { Avatar } from './avatar'
import { ThemeButton } from './themeButton'
import { Coins } from './coins'
import { SignInButton } from './signInButton'
import { useSession } from 'next-auth/react'
import { useI18n } from '@/locales/client'
import { getCurrentBreakpoints } from '@/lib/tailwind'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const Header = async () => {
  const { data: session } = useSession()
  const currentBreakpoint = getCurrentBreakpoints()
  const t = useI18n()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="sm flex max-w-screen-2xl items-center justify-between py-3 md:container max-sm:px-3">
        {/* Left */}
        <div className="flex items-center gap-4 sm:gap-8">
          <Logo />
          <NavigateLinks />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Coins session={session} />
              <Button size={'default'}>{t('header.buy-credis')}</Button>
              {currentBreakpoint != 'sm' && <Avatar session={session} />}
            </>
          ) : (
            <SignInButton />
          )}
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}
