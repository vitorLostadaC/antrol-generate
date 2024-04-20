'use server'

import { prisma } from '@/services/prisma'

interface GetGenerationWithParamsPropsSchema {
  generationId: string
}

export const getGenerationWithParams = async ({
  generationId
}: GetGenerationWithParamsPropsSchema) => {
  const generation = await prisma.generation.findUnique({
    where: {
      id: generationId
    },
    include: {
      generationParams: true
    }
  })
  return generation
}
