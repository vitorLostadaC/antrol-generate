'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Link {
  path: string
  name: string
}

const links: Link[] = [
  {
    path: '/generate',
    name: 'Generate'
  },
  {
    path: '/gallery',
    name: 'Gallery'
  },
  {
    path: '/collection',
    name: 'Collection'
  },
  {
    path: '/retouch',
    name: 'Retouch'
  }
]

export const NavigateLinks = async () => {
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
