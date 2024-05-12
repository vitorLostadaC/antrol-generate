'use server'

import { getScopedI18n } from '@/locales/server'
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
  const t = await getScopedI18n('features')

  //@ts-ignore
  const customizedPrompt = t('prompt', {
    shape,
    primaryColor,
    secondaryColor: secondaryColor
      ? t('secondary-color') + ' ' + secondaryColor
      : '',
    prompt,
    styles: styles.join(', ')
  })

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
