import star from '@/assets/imagesShape/star.webp'
import circle from '@/assets/imagesShape/circle.webp'
import square from '@/assets/imagesShape/square.webp'
import triangle from '@/assets/imagesShape/triangle.webp'
import hexagon from '@/assets/imagesShape/hexagon.webp'
import anyshape from '@/assets/imagesShape/anyShape.webp'
import { IShapes } from '@/schemas/icons.schema'
import { StaticImageData } from 'next/image'
import { useScopedI18n } from '@/locales/client'

interface PredefinedShapeSchema {
  shape: IShapes
  name: string
  image: StaticImageData
}

export const usePredefinedShape = () => {
  const t = useScopedI18n('pages.generate.steps.shape.shapes')

  const predefinedShapes: PredefinedShapeSchema[] = [
    {
      shape: 'any shape',
      image: anyshape,
      name: t('any-shape')
    },
    {
      shape: 'circle',
      image: circle,
      name: t('circle')
    },
    {
      shape: 'triangle',
      image: triangle,
      name: t('triangle')
    },
    {
      shape: 'square',
      image: square,
      name: t('square')
    },

    {
      shape: 'hexagon',
      image: hexagon,
      name: t('hexagon')
    },

    {
      shape: 'star',
      image: star,
      name: t('star')
    }
  ]
  return predefinedShapes
}
