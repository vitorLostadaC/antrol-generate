'use server'

import { ModelSchema, ShapeSchema, StyleSchema } from '@/schemas/icons.schema'
import { prisma } from '@/services/prisma'

interface SaveGenerationSchema {
  imagesURL: string[]
  model: ModelSchema
  shape: ShapeSchema
  colorName: string
  generationsNumber: number
  prompt: string
  styles: StyleSchema[]
}

export const saveGeneration = async (params: SaveGenerationSchema) => {
  const {
    colorName,
    generationsNumber,
    imagesURL,
    shape,
    model,
    prompt,
    styles
  } = params

  const generation = await prisma.generation.create({
    data: {
      userId: 'test',
      generationParams: {
        create: {
          colorName,
          generationsNumber,
          model,
          shape,
          styles
        }
      },
      prompt,
      imagesURL
    }
  })

  return generation
}
