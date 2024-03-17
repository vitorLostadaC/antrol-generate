'use server'

import { prisma } from '@/services/prisma'

export const getGenerations = async () => {
  const generations = await prisma.generation.findMany({
    where: {
      userId: 'test'
    }
  })
  return generations
}
