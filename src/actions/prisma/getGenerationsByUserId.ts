'use server'

import { prisma } from '@/services/prisma'

export const getGenerationsByUserId = async (userId: string) => {
  const generations = await prisma.generation.findMany({
    where: {
      userId: userId
    }
  })
  return generations
}
