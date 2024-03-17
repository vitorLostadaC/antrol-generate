'use server'

import { getServerAuthSession } from '@/lib/auth'
import { prisma } from '@/services/prisma'

export const getGenerations = async () => {
  const user = await getServerAuthSession()

  if (!user) return

  const generations = await prisma.generation.findMany({
    where: {
      userId: user?.user.id
    }
  })
  return generations
}
