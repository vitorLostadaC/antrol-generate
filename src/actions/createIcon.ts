'use server'

import { IModel, IShapes, IStyles } from '@/schemas/icons.schema'
import { openai } from '@/services/openai'

interface CreateIconsPropsSchemas {
  styles: IStyles[]
  model: IModel
  colorName: string
  shape: IShapes
  imageNumber?: number
  prompt: string
}

export const createIcon = async ({
  colorName,
  model,
  shape,
  styles,
  prompt,
  imageNumber = 1
}: CreateIconsPropsSchemas) => {
  const customizedPrompt = `A modern icon showcasing a ${shape}, rendered in a ${colorName} palette, visually representing ${prompt}. Aim for a style that combines hyper-realistic textures with vibrant, cinematic lighting, akin to high-quality renders seen in top-rated ArtStation projects and Unreal Engine visuals. Focus on ${styles.join(', ')} to achieve an aesthetic that is both trending and visually stunning`

  const response = await openai.images.generate({
    model,
    n: imageNumber,
    prompt: customizedPrompt,
    quality: 'hd',
    response_format: 'url',
    size: '1024x1024'
  })

  return response
}
