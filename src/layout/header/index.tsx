import { Roboto_Mono } from 'next/font/google'
import { NavigateLinks } from './navigateLinks'
import { getServerAuthSession } from '@/lib/auth'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const Header = async () => {
  const session = await getServerAuthSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex max-w-screen-2xl items-center py-3 sm:container max-sm:px-3">
        <NavigateLinks session={session} />
      </div>
    </header>
  )
}
