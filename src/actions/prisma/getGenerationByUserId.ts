'use server'

import { prisma } from '@/services/prisma'

export const getGenerationByUserId = async (generationId: string) => {
  const generations = await prisma.generation.findUnique({
    where: {
      id: generationId
    },
    include: {
      generationParams: true
    }
  })
  return generations
}
