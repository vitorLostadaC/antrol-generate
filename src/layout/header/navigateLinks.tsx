'use client'

import { cn } from '@/lib/utils'
import { useScopedI18n } from '@/locales/client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Link {
  path: string
  name: string
}

export const NavigateLinks = async () => {
  const t = useScopedI18n('header.navigation')

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
