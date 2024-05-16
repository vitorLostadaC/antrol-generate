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
import * as Sentry from '@sentry/nextjs'
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
    Sentry.captureException('Failed to charge coin', {
      tags: {
        error: (e as Error).message
      }
    })
    return { error: { message: 'Failed to charge coin' } }
  }

  let iconResponse: ImagesResponse | null = null

  try {
    iconResponse = await openai.createOpenaiIcon({
      primaryColor,
      secondaryColor,
      prompt,
      shape,
      styles
    })
    // iconResponse = {
    //   data: [
    //     {
    //       url: 'https://static.vecteezy.com/ti/vetor-gratis/p1/9127014-gra-logo-gra-letter-gra-letter-logo-design-initials-gra-logo-linked-with-circle-and-monograma-maiusculo-logo-gra-typography-for-technology-business-and-real-marca-imobiliaria-vetor.jpg'
    //     }
    //   ]
    // } as any
  } catch (error) {
    try {
      await reimbursementCoin(Cost.Generation)
    } catch {
      Sentry.captureException('Failed to reimbursement coin', {
        tags: {
          error: (error as Error).message
        }
      })
      return { error: { message: 'Failed to reimbursement coin' } }
    }
    Sentry.captureException('Failed to create icon', {
      tags: {
        error: (error as Error).message
      }
    })
    return { error: { message: 'Failed to create icon' } }
  }

  const iconGPTURL = iconResponse?.data[0].url ?? ''

  try {
    const iconURL = (await uploadS3(iconGPTURL)) ?? ''
    const generation = await saveGeneration({
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

    if (!generation) {
      return { error: { message: 'User not authenticated' } }
    }

    return { generation }
  } catch (e) {
    const error = e as Error
    Sentry.captureException('Failed to save generation', {
      tags: {
        error: error.message
      }
    })
    return { error: { message: 'Failed to save generation' } }
  }
}
