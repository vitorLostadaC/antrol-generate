'use server'

import { prisma } from '@/services/prisma'
import { Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { cache } from 'react'

export const getGenerations = cache(
  async (options?: Prisma.GenerationFindManyArgs<DefaultArgs>) => {
    const generations = await prisma.generation.findMany(options)
    return { generations, date: new Date() }
  }
)
