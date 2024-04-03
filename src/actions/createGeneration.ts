'use server'

import { Cost } from '@/data/costs'
import { chargeCoin } from './chargeCoin'
import { createIcon } from './createIcon'
import { ImagesResponse } from 'openai/resources/images.mjs'
import { reimbursementCoin } from './reimbursementCoin'
import { saveGeneration } from './saveGeneration'
import { IStyles, IShapes } from '@/schemas/icons.schema'
import { Generation } from '@prisma/client'

interface CreateGenerationProps {
  styles: IStyles[]
  colorName: string
  shape: IShapes
  prompt: string
}
// TODO improve this erros handling
export const createGeneration = async ({
  colorName,
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
    iconResponse = await createIcon({
      colorName,
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

  const iconURL = iconResponse?.data[0].url ?? ''

  let generation: Generation | null = null

  try {
    generation = await saveGeneration({
      colorName,
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
  console.log(generation)

  return generation
}
