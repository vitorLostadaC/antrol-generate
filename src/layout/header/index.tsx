import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Roboto_Mono } from 'next/font/google'
import { Logo } from './logo'
import { NavigateLinks } from './navigateLinks'
import { Avatar } from './avatar'
import { ThemeButton } from './themeButton'
import { Coins } from './coins'
import { SignInButton } from './signInButton'
import { getServerAuthSession } from '@/lib/auth'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const Header = async () => {
  const session = await getServerAuthSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-screen-2xl items-center justify-between py-3">
        {/* Left */}
        <div className="flex items-center gap-8">
          <Logo />
          <NavigateLinks />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Coins />
              <Button size={'default'}>Buy credits</Button>
              <Avatar session={session} />
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
