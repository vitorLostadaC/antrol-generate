'use server'

import { IShapes, IStyles } from '@/schemas/icons.schema'
import { openai } from '@/services/openai'

interface CreateOpenaiIconsPropsSchemas {
  styles: IStyles[]
  // model: IModel
  primaryColor: string
  secondaryColor?: string
  shape: IShapes
  prompt: string
}

export const createOpenaiIcon = async ({
  primaryColor,
  secondaryColor,
  shape,
  styles,
  prompt
}: CreateOpenaiIconsPropsSchemas) => {
  const customizedPrompt = `A modern icon showcasing a ${shape}, rendered with primary color ${primaryColor} ${secondaryColor ? 'and secondary ' + secondaryColor : ''}, visually representing ${prompt}. Aim for a style that combines hyper-realistic textures with vibrant, cinematic lighting, akin to high-quality renders seen in top-rated ArtStation projects and Unreal Engine visuals. Focus on ${styles.join(', ')} to achieve an aesthetic that is both trending and visually stunning`

  const response = await openai.images.generate({
    model: 'dall-e-3',
    n: 1,
    prompt: customizedPrompt,
    quality: 'hd',
    response_format: 'url',
    size: '1024x1024'
  })

  return response
}
