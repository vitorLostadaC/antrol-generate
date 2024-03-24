'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { getCurrentBreakpoints } from '@/lib/tailwind'
import { cn } from '@/lib/utils'
import { useScopedI18n } from '@/locales/client'
import {
  Atom,
  ImagesIcon,
  LucideIcon,
  MenuIcon,
  SparkleIcon
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './logo'
import { Divider } from '@/components/ui/Divider'
import { Avatar } from './avatar'
import { Session } from 'next-auth'
import { ThemeButton } from './themeButton'

interface Link {
  path: string
  name: string
  icon: LucideIcon
}

interface NavigationLinks {
  session: Session | null
}

export const NavigateLinks = async ({ session }: NavigationLinks) => {
  const t = useScopedI18n('header')
  const currentBreakpoint = getCurrentBreakpoints()
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
  const pathName = usePathname()

  if (currentBreakpoint === 'sm') {
    return (
      <Sheet>
        <SheetTrigger className="-order-1">
          <MenuIcon className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent side={'left'} className="flex flex-col">
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
                    'flex items-center gap-2 text-lg text-foreground hover:text-foreground',
                    {
                      'text-foreground/80': pathName !== link.path
                    }
                  )}
                >
                  <link.icon className="h-5 w-5 text-foreground/50" />{' '}
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
    )
  }

  return (
    <nav className="flex items-center gap-4">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={cn('text-foreground hover:text-foreground', {
            'text-foreground/60': pathName !== link.path
          })}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
