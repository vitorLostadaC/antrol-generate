import {
  AvatarFallback,
  Avatar as ShadcnAvatar,
  AvatarImage
} from '@/components/ui/avatar'
import { getServerAuthSession } from '@/lib/auth'

export const Avatar = async () => {
  const session = await getServerAuthSession()

  if (!session) return null

  const { user } = session

  function getUserInitials() {
    if (!user.name) return 'AN'

    const userNames = user.name?.split(' ')

    let initials = userNames[0].slice(0, 1) + userNames[1].slice(0, 1)

    return initials.toLocaleUpperCase()
  }

  return (
    <ShadcnAvatar>
      {user.image && (
        <AvatarImage src={user.image} alt={user.name ?? 'user image'} />
      )}
      <AvatarFallback>{getUserInitials()}</AvatarFallback>
    </ShadcnAvatar>
  )
}
