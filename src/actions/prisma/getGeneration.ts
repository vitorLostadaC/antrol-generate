'use server'

import { prisma } from '@/services/prisma'
import { Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { cache } from 'react'

export const getGenerationById = cache(async (id: string) => {
  const generations = await prisma.generation.findUnique({
    where: {
      id
    }
  })
  return generations
})
