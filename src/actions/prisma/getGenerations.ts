'use server'

import { getServerAuthSession } from '@/lib/auth'
import { prisma } from '@/services/prisma'

export const getGenerations = async () => {
  const session = await getServerAuthSession()

  if (!session) return

  const generations = await prisma.generation.findMany({
    where: {
      userId: session?.user.id
    }
  })
  return generations
}
