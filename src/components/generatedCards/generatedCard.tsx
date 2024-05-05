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
import { IStyles, colorsSchema } from '@/schemas/icons.schema'
import { ColorSteps } from '@/app/[locale]/generate/steps/color/data/colors'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { env } from '@/env'

interface GeneratedCardPropsSchema {
  generation: Generation
  resetToNewGeneration: (
    defaultValues?: DefaultFormValuesWebStorageSchema
  ) => void
}

export const GeneratedCard = ({
  generation,
  resetToNewGeneration
}: GeneratedCardPropsSchema) => {
  const t = useScopedI18n('components.generated-cards.dropdwon')
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

  return (
    <div className="relative">
      <img
        className="aspect-square h-full w-full rounded-md bg-foreground/60 bg-contain"
        alt="Generated Image"
        src={generation.imagesURL[0]}
      />
      <SimpleDropdown
        items={[
          {
            name: t('donwload'),
            icon: DownloadIcon,
            onClick: () => {
              try {
                downloadImage(
                  generation.imagesURL[0],
                  'generated-by-antrol-generate.png'
                )
              } catch (error) {
                console.error(error)
              }
            }
          },

          {
            name: t('reuse-prompt'),
            icon: Layers2,
            onClick: reuseParams
          },

          {
            name: t('share.name'),
            icon: Share2Icon,
            onClick: async () => {
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
                //TODO add sentry heere
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
