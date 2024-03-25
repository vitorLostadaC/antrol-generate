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
import { useScopedI18n } from '@/locales/client'
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
  isInSheet?: boolean
}

export const Avatar = ({ session, isInSheet }: AvatarPropsSchema) => {
  const { user } = session

  const t = useScopedI18n('header.user-menu')

  const menuItems: MenuItemSchema[] = [
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

  const avatar = (
    <ShadcnAvatar>
      {user.image && (
        <AvatarImage src={user.image} alt={user.name ?? 'user image'} />
      )}
      <AvatarFallback>{getUserInitials()}</AvatarFallback>
    </ShadcnAvatar>
  )

  const avatarInSheet = (
    <div className="flex items-center gap-2">
      <ShadcnAvatar>
        {user.image && (
          <AvatarImage src={user.image} alt={user.name ?? 'user image'} />
        )}
        <AvatarFallback>{getUserInitials()}</AvatarFallback>
      </ShadcnAvatar>
      <div className="flex flex-col items-start justify-center">
        <p className="font-medium">{user.name}</p>
        <p className="text-sm text-foreground/50">{user.email}</p>
      </div>
    </div>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {isInSheet ? avatarInSheet : avatar}
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