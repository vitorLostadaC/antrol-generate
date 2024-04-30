'use server'

import { Cost } from '@/data/costs'
import { chargeCoin } from '../prisma/chargeCoin'
import { createOpenaiIcon } from '../ai/createOpenaiIcon'
import { ImagesResponse } from 'openai/resources/images.mjs'
import { reimbursementCoin } from '../prisma/reimbursementCoin'
import { saveGeneration } from '../prisma/saveGeneration'
import { IStyles, IShapes } from '@/schemas/icons.schema'
import { Generation } from '@prisma/client'
import { uploadS3 } from '../aws/uploadS3'
import { openai } from '../ai'

interface generationProps {
  styles: IStyles[]
  primaryColor: string
  primaryCustomColor?: string
  secondaryColor?: string
  secondaryCustomColor?: string
  shape: IShapes
  prompt: string
}
// TODO improve this erros handling
export const generate = async ({
  primaryColor,
  secondaryColor,
  primaryCustomColor,
  secondaryCustomColor,
  prompt,
  shape,
  styles
}: generationProps) => {
  try {
    await chargeCoin(Cost.Generation)
  } catch (e) {
    throw new Error('Failed to charge coin')
  }

  let iconResponse: ImagesResponse | null = null

  try {
    // talvez verificar o tipo do erro aqui e fazer ele demorar mais de um minuto
    // iconResponse = await openai.createOpenaiIcon({
    //   primaryColor,
    //   secondaryColor,
    //   prompt,
    //   shape,
    //   styles
    // })
    iconResponse = {
      data: [
        {
          url: 'https://static.vecteezy.com/ti/vetor-gratis/p1/9127014-gra-logo-gra-letter-gra-letter-logo-design-initials-gra-logo-linked-with-circle-and-monograma-maiusculo-logo-gra-typography-for-technology-business-and-real-marca-imobiliaria-vetor.jpg'
        }
      ]
    } as any
  } catch (error) {
    try {
      await reimbursementCoin(Cost.Generation)
    } catch {
      // adicionar alguma coisa aqui, como um analitics ou um email pra mim
      throw new Error('Failed to reimbursemen coin')
    }
    // talvez implementar um sistema de mensageria aqui
    throw new Error('Failed to createIcon')
  }

  const iconGPTURL = iconResponse?.data[0].url ?? ''

  let iconURL: string = ''

  try {
    iconURL = (await uploadS3(iconGPTURL)) ?? ''
  } catch {
    console.log('depois eu vejo')
  }

  let generation: Generation | null = null

  try {
    generation = await saveGeneration({
      primaryColor,
      primaryCustomColor,
      secondaryColor,
      secondaryCustomColor,
      generationsNumber: 1,
      imagesURL: [iconURL] ?? [],
      model: 'dall-e-3',
      prompt,
      shape,
      styles
    })
  } catch (error) {
    console.log(error.message)
    // adicionar alguma coisa aqui, como um analitics ou um email pra mim
  }

  if (!generation) {
    throw new Error('User not authenticated')
  }

  return generation
}
