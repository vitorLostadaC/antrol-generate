'use server'

import { Cost } from '@/data/costs'
import { chargeCoin } from './chargeCoin'
import { createIcon } from './createIcon'
import { ImagesResponse } from 'openai/resources/images.mjs'
import { reimbursementCoin } from './reimbursementCoin'
import { saveGeneration } from './saveGeneration'
import { IStyles, IShapes } from '@/schemas/icons.schema'
import { Generation } from '@prisma/client'
import { uploadFile } from './uploadFile'

interface CreateGenerationProps {
  styles: IStyles[]
  primaryColor: string
  secondaryColor: string
  shape: IShapes
  prompt: string
}
// TODO improve this erros handling
export const createGeneration = async ({
  primaryColor,
  secondaryColor,
  prompt,
  shape,
  styles
}: CreateGenerationProps) => {
  try {
    await chargeCoin(Cost.Generation)
  } catch (e) {
    return { error: true, message: 'Failed to charge coin' }
  }

  let iconResponse: ImagesResponse | null = null

  try {
    // talvez verificar o tipo do erro aqui e fazer ele demorar mais de um minuto
    iconResponse = await createIcon({
      primaryColor,
      secondaryColor,
      prompt,
      shape,
      styles
    })
  } catch (error) {
    try {
      await reimbursementCoin(Cost.Generation)
    } catch {
      // adicionar alguma coisa aqui, como um analitics ou um email pra mim
    }

    return { error: true, message: 'Failed to createIcon coin' }
  }

  const iconGPTURL = iconResponse?.data[0].url ?? ''

  let iconURL: string = ''

  try {
    iconURL = (await uploadFile(iconGPTURL)) ?? ''
  } catch {
    console.log('depois eu vejo')
  }

  let generation: Generation | null = null

  try {
    generation = await saveGeneration({
      primaryColor,
      secondaryColor,
      generationsNumber: 1,
      imagesURL: [iconURL] ?? [],
      model: 'dall-e-3',
      prompt,
      shape,
      styles
    })
  } catch {
    // adicionar alguma coisa aqui, como um analitics ou um email pra mim
  }
  return generation
}
