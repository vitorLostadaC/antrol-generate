import { SketchLogoIcon } from '@radix-ui/react-icons'
import { Session } from 'next-auth'

interface CoinsPropsSchema {
  session: Session
}

export const Coins = ({ session }: CoinsPropsSchema) => {
  return (
    <div className="flex items-center gap-2">
      {session.user.coins} <SketchLogoIcon width={20} height={20} />
    </div>
  )
}
