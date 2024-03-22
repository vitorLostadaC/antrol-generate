import { getServerAuthSession } from '@/lib/auth'
import { SketchLogoIcon } from '@radix-ui/react-icons'

export const Coins = async () => {
  const session = await getServerAuthSession()

  if (!session) return

  return (
    <div className="flex items-center gap-2">
      {session.user.coins} <SketchLogoIcon width={20} height={20} />
    </div>
  )
}
