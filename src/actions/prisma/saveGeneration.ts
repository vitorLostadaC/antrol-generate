'use server'

import { getServerAuthSession } from '@/lib/auth'
import { IModel, IShapes, IStyles } from '@/schemas/icons.schema'

import { prisma } from '@/services/prisma'
import { Generation } from '@prisma/client'

interface SaveGenerationSchema {
  imagesURL: string[]
  model: IModel
  shape: IShapes
  primaryColor: string
  primaryCustomColor?: string
  secondaryColor?: string
  secondaryCustomColor?: string
  generationsNumber: number
  prompt: string
  styles: IStyles[]
}

export const saveGeneration = async (
  params: SaveGenerationSchema
): Promise<Generation | null> => {
  const {
    primaryColor,
    primaryCustomColor,
    secondaryColor,
    secondaryCustomColor,
    generationsNumber,
    imagesURL,
    shape,
    model,
    prompt,
    styles
  } = params

  const session = await getServerAuthSession()

  if (!session) return null

  const generation = await prisma.generation.create({
    data: {
      userId: session.user.id,
      generationParams: {
        create: {
          primaryColor,
          primaryCustomColor: primaryCustomColor ?? null,
          secondaryColor,
          secondaryCustomColor: secondaryCustomColor ?? null,
          generationsNumber,
          model,
          shape,
          styles
        }
      },
      prompt,
      imagesURL,
      tool: 'generate'
    }
  })

  return generation
}
