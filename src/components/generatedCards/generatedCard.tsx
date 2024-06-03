'use client'

import { Generation } from '@prisma/client'
import {
  DnaIcon,
  DownloadIcon,
  Eraser,
  EraserIcon,
  Layers2,
  MenuIcon,
  Share2Icon
} from 'lucide-react'
import { SimpleDropdown } from '../ui/simpleDropdown'
import { useScopedI18n } from '@/locales/client'
import { downloadImage } from '@/lib/image'
import { DefaultFormValuesWebStorageSchema } from '@/app/[locale]/generate/page'
import { getGenerationWithParams } from '@/actions/prisma/getGenerationsWithParams'
import { WebStorage } from '@/data/webStorage'
import { IStyles } from '@/schemas/icons.schema'
import { ColorSteps } from '@/app/[locale]/generate/steps/color/data/colors'
import { useToast } from '../ui/use-toast'
import * as Sentry from '@sentry/nextjs'
import posthog from 'posthog-js'
import { cn } from '@/lib/utils'
import { AwsImage } from '../ui/AwsImage'

interface GeneratedCardPropsSchema {
  generation: Generation
  resetToNewGeneration: (
    defaultValues?: DefaultFormValuesWebStorageSchema
  ) => void
  className?: string
}

export const GeneratedCard = ({
  generation,
  resetToNewGeneration,
  className
}: GeneratedCardPropsSchema) => {
  const t = useScopedI18n('components.generated-cards.dropdown')
  const { toast } = useToast()

  const reuseParams = async () => {
    const currentGeneration = await getGenerationWithParams({
      generationId: generation.id
    })

    const primaryColor = currentGeneration?.generationParams?.primaryColor
    const secondaryColor = currentGeneration?.generationParams?.secondaryColor

    const primaryCustomColor =
      currentGeneration?.generationParams?.primaryCustomColor
    const secondaryCustomColor =
      currentGeneration?.generationParams?.secondaryCustomColor

    const newSessionStorageValues: DefaultFormValuesWebStorageSchema = {
      prompt: currentGeneration?.prompt ?? '',
      primaryColor: primaryCustomColor ?? primaryColor ?? '',
      secondaryColor: secondaryCustomColor ?? secondaryColor ?? '',
      shape: currentGeneration?.generationParams?.shape ?? 'any shape',
      styles: (currentGeneration?.generationParams?.styles as IStyles[]) ?? [],
      tabSelectedColor: {
        primary: primaryCustomColor ? ColorSteps.Picker : ColorSteps.Predefined,
        secondary: secondaryCustomColor
          ? ColorSteps.Picker
          : ColorSteps.Predefined
      },
      step: 4
    }

    sessionStorage.setItem(
      WebStorage.GenerateForm,
      JSON.stringify(newSessionStorageValues)
    )

    resetToNewGeneration(newSessionStorageValues)
  }

  const donwloadImage = (width: number, height: number) => {
    posthog.capture('click-card-feature', { feature: 'download' })
    try {
      downloadImage(
        generation.imagesURL[0],
        generation.prompt.slice(0, 20) + '.png',
        width,
        height
      )
    } catch (e) {
      const error = e as Error
      Sentry.captureException('Error to download image', {
        tags: {
          error: error.message
        }
      })
    }
  }

  return (
    <div className="relative">
      <AwsImage
        className={cn(
          'aspect-square h-full w-full select-none rounded-md bg-foreground/60 bg-contain',
          className
        )}
        alt="Generated Image"
        generationId={generation.id}
      />
      <SimpleDropdown
        items={[
          {
            name: t('download'),
            icon: DownloadIcon,
            subMenu: [
              {
                name: '1024x1024',
                icon: DownloadIcon,
                onClick: () => {
                  donwloadImage(1024, 1024)
                }
              },
              {
                name: '512x512',
                icon: DownloadIcon,
                onClick: () => {
                  donwloadImage(512, 512)
                }
              },
              {
                name: '256x256',
                icon: DownloadIcon,
                onClick: () => {
                  donwloadImage(256, 256)
                }
              },
              {
                name: '128x128',
                icon: DownloadIcon,
                onClick: () => {
                  donwloadImage(128, 128)
                }
              },
              {
                name: '64x64',
                icon: DownloadIcon,
                onClick: () => {
                  donwloadImage(64, 64)
                }
              },
              {
                name: '32x32',
                icon: DownloadIcon,
                onClick: () => {
                  donwloadImage(32, 32)
                }
              },
              {
                name: '16x16',
                icon: DownloadIcon,
                onClick: () => {
                  donwloadImage(16, 16)
                }
              }
            ]
          },

          {
            name: t('reuse-prompt'),
            icon: Layers2,
            onClick: () => {
              posthog.capture('click-card-feature', { feature: 'reuse-prompt' })
              reuseParams()
            }
          },

          {
            name: t('share.name'),
            icon: Share2Icon,
            onClick: async () => {
              posthog.capture('click-card-feature', { feature: 'share' })
              try {
                await navigator.clipboard.writeText(
                  window.location.origin + '/gallery/' + generation.id
                )

                toast({
                  title: t('share.toast.title'),
                  description: t('share.toast.description')
                })
              } catch (err) {
                toast({
                  title: t('share.error-toast.title'),
                  description: t('share.error-toast.description'),
                  variant: 'destructive'
                })
                Sentry.captureException('Error to copy link to clipboard', {
                  tags: {
                    error: (err as Error).message
                  }
                })
              }
            }
          }
          // add on v2
          // {
          //   name: t('remove-bg'),
          //   icon: EraserIcon,
          //   onClick: () => {
          //     console.log('teste')
          //   }
          // }
        ]}
      >
        <div className="absolute -right-2 -top-2 flex cursor-pointer items-center justify-center rounded-full bg-secondary p-1.5">
          <MenuIcon className="text-secondary-foreground" size={20} />
        </div>
      </SimpleDropdown>
    </div>
  )
}
