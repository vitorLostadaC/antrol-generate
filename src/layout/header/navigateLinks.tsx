import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import {
  Atom,
  ImagesIcon,
  LucideIcon,
  MenuIcon,
  SparkleIcon
} from 'lucide-react'
import Link from 'next/link'
import { Logo } from './logo'
import { Divider } from '@/components/ui/Divider'
import { Avatar } from './avatar'
import { Session } from 'next-auth'
import { ThemeButton } from './themeButton'
import { Button } from '@/components/ui/button'
import { SignInButton } from './signInButton'
import { Coins } from './coins'
import { getScopedI18n } from '@/locales/server'

interface Link {
  path: string
  name: string
  icon: LucideIcon
}

interface NavigationLinks {
  session: Session | null
}

export const NavigateLinks = async ({ session }: NavigationLinks) => {
  const t = await getScopedI18n('header')
  const links: Link[] = [
    {
      path: '/generate',
      name: t('navigation.generate'),
      icon: SparkleIcon
    },
    {
      path: '/gallery',
      name: t('navigation.gallery'),
      icon: ImagesIcon
    },
    {
      path: '/retouch',
      name: t('navigation.retouch'),
      icon: Atom
    }
  ]

  return (
    <nav className="flex w-full justify-between">
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
            <Button size={'default'}>{t('buy-credis')}</Button>
            {session && <Avatar session={session} />}
          </>
        ) : (
          <SignInButton />
        )}
        <ThemeButton />
      </div>
    </nav>
  )
}
