'use server'

import { openai } from '@/services/openai'
import fs from 'fs'

interface CreateOpenaiIconsPropsSchemas {
  image: string
}

export const variantOpenaiIcon = async ({
  image
}: CreateOpenaiIconsPropsSchemas) => {
  const response = await openai.images.createVariation({
    model: 'dall-e-3',
    n: 1,
    size: '1024x1024',
    image: fs.createReadStream(image)
  })

  return response
}
