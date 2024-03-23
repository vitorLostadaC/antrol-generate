'use client'

import {
  AvatarFallback,
  Avatar as ShadcnAvatar,
  AvatarImage
} from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useI18n, useScopedI18n } from '@/locales/client'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

type MenuItemSchema =
  | 'divider'
  | {
      name: string
      action: () => void
    }

interface AvatarPropsSchema {
  session: Session
}

export const Avatar = ({ session }: AvatarPropsSchema) => {
  const { user } = session

  const t = useScopedI18n('header.user-menu')

  const menuItems: MenuItemSchema[] = [
    {
      name: t('delete-account'),
      action: () => alert('not implemented')
    },
    'divider',
    {
      name: t('sign-out'),
      action: signOut
    }
  ]

  function getUserInitials() {
    if (!user.name) return 'AN'

    const userNames = user.name?.split(' ')

    let initials = userNames[0].slice(0, 1) + userNames[1].slice(0, 1)

    return initials.toLocaleUpperCase()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ShadcnAvatar>
          {user.image && (
            <AvatarImage src={user.image} alt={user.name ?? 'user image'} />
          )}
          <AvatarFallback>{getUserInitials()}</AvatarFallback>
        </ShadcnAvatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItems.map((menuItem) => {
          if (menuItem === 'divider') return <DropdownMenuSeparator />
          return (
            <DropdownMenuItem onClick={menuItem.action}>
              {menuItem.name}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
