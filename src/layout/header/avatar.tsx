import {
  AvatarFallback,
  Avatar as ShadcnAvatar,
  AvatarImage
} from '@/components/ui/avatar'
import { getServerAuthSession } from '@/lib/auth'

export const Avatar = async () => {
  const session = await getServerAuthSession()

  if (!session) return null

  return (
    <ShadcnAvatar>
      {session.user.image && (
        <AvatarImage
          src={session.user.image}
          alt={session.user.name ?? 'user image'}
        />
      )}
      <AvatarFallback>VT</AvatarFallback>
    </ShadcnAvatar>
  )
}
