import { Generation } from '@prisma/client'
import {
  DnaIcon,
  DownloadIcon,
  Eraser,
  EraserIcon,
  Layers2,
  MenuIcon
} from 'lucide-react'
import { SimpleDropdown } from '../ui/simpleDropdown'
import { useScopedI18n } from '@/locales/client'
import { downloadImage } from '@/lib/image'

interface GeneratedCardPropsSchema {
  generation: Generation
}

export const GeneratedCard = ({ generation }: GeneratedCardPropsSchema) => {
  const t = useScopedI18n('components.generated-cards.dropdwon')

  return (
    <div className="relative">
      <img
        className="aspect-square h-full rounded-md bg-foreground/60 bg-contain"
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
            name: t('variant'),
            icon: DnaIcon,
            onClick: () => {
              console.log('teste')
            }
          },
          {
            name: t('reuse-prompt'),
            icon: Layers2,
            onClick: () => {
              console.log('teste')
            }
          },
          {
            name: t('remove-bg'),
            icon: EraserIcon,
            onClick: () => {
              console.log('teste')
            }
          }
        ]}
      >
        <div className="absolute -right-2 -top-2 flex cursor-pointer items-center justify-center rounded-full bg-secondary p-1.5">
          <MenuIcon className="text-secondary-foreground" size={20} />
        </div>
      </SimpleDropdown>
    </div>
  )
}
