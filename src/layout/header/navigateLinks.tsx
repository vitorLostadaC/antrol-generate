'use client'

import { getCurrentBreakpoints } from '@/lib/tailwind'
import { cn } from '@/lib/utils'
import { useScopedI18n } from '@/locales/client'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Link {
  path: string
  name: string
}

export const NavigateLinks = async () => {
  const t = useScopedI18n('header.navigation')
  const currentBreakpoint = getCurrentBreakpoints()
  const links: Link[] = [
    {
      path: '/generate',
      name: t('generate')
    },
    {
      path: '/gallery',
      name: t('gallery')
    },
    {
      path: '/retouch',
      name: t('retouch')
    }
  ]
  const pathName = usePathname()

  if (currentBreakpoint === 'sm') {
    return <MenuIcon className="-order-1 h-5 w-5" />
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
