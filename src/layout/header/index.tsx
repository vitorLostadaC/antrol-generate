import { getServerAuthSession } from '@/lib/auth'
import { Divider } from '@/components/ui/Divider'
import { Button } from '@/components/ui/button'
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
  Sheet
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { getScopedI18n } from '@/locales/server'
import {
  SparkleIcon,
  ImagesIcon,
  Atom,
  MenuIcon,
  LucideIcon
} from 'lucide-react'
import { Logo } from './logo'
import { SignInButton } from './signInButton'
import { ThemeButton } from './themeButton'
import { Avatar } from './avatar'
import { Coins } from './coins'
import Link from 'next/link'

interface LinkItemSchema {
  path: string
  name: string
  icon: LucideIcon
  conditional: boolean
}

export const Header = async () => {
  const session = await getServerAuthSession()
  const t = await getScopedI18n('header')

  const links: LinkItemSchema[] = [
    {
      path: '/generate',
      name: t('navigation.generate'),
      icon: SparkleIcon,
      conditional: true
    },
    {
      path: '/gallery',
      name: t('navigation.gallery'),
      icon: ImagesIcon,
      conditional: true
    },
    // {
    //   path: '/retouch',
    //   name: t('navigation.retouch'),
    //   icon: Atomm,
    //   conditional: true
    // },
    {
      path: '/collections',
      name: t('navigation.collections'),
      icon: Atom,
      conditional: !!session?.user
    }
  ].filter((link) => link.conditional)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex max-w-screen-2xl items-center justify-between py-3 sm:container max-sm:px-3">
        {/* menu on mobile */}
        <Sheet>
          <SheetTrigger className="-order-1 block md:hidden">
            <MenuIcon className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent
            side={'left'}
            className="flex max-w-80  flex-col sm:max-w-80 "
          >
            <SheetHeader>
              <Logo isInSheet />
            </SheetHeader>
            <Divider />
            <SheetDescription>{t('side-bar.navigation')}</SheetDescription>
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col gap-8">
                {links.map((link) => (
                  <Link
                    href={link.path}
                    key={link.path}
                    className={cn(
                      'flex items-center gap-2 text-lg text-foreground hover:text-foreground/80'
                    )}
                  >
                    <link.icon className="h-5 w-5 text-foreground/50" />
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-4">
                <ThemeButton variant="switch" />
                {session && (
                  <>
                    <Divider />
                    <Avatar isInSheet session={session} />
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        {/* Link on lg */}
        <div className="hidden items-center gap-4 md:flex">
          <Logo />
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={cn('text-foreground/70 hover:text-foreground')}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Coins session={session} />
              <Button size={'default'} asChild>
                <Link href={'/pricing'}>{t('buy-credis')}</Link>
              </Button>
              {session && <Avatar session={session} />}
            </>
          ) : (
            <SignInButton />
          )}
          <ThemeButton />
        </div>
      </nav>
    </header>
  )
}
