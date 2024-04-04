import { getServerAuthSession } from '@/lib/auth'
import { prisma } from '@/services/prisma'

export const chargeCoin = async (value: number) => {
  const session = await getServerAuthSession()

  if (!session) return

  const oldCoins = session.user.coins

  if (oldCoins < value) {
    throw new Error('Not enough coins')
  }

  const user = await prisma.user.update({
    data: {
      coins: oldCoins - value
    },
    where: {
      id: session.user.id
    }
  })

  return user
}
