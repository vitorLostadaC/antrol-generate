import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import star from '@/assets/imagesShape/star.webp'
import circle from '@/assets/imagesShape/circle.webp'
import square from '@/assets/imagesShape/square.webp'
import triangle from '@/assets/imagesShape/triangle.webp'
import hexagon from '@/assets/imagesShape/hexagon.webp'
import anyshape from '@/assets/imagesShape/anyShape.webp'
import { IShapes } from '@/schemas/icons.schema'
import { StaticImageData } from 'next/image'
import { useScopedI18n } from '@/locales/client'

interface PredefinedShapesPropsShema {
  currentShape: string
  setValue: (shape: string) => void
}

interface PredefinedShapeSchema {
  shape: IShapes
  name: string
  image: StaticImageData
}

export const PredefinedShapes = ({
  currentShape,
  setValue
}: PredefinedShapesPropsShema) => {
  const t = useScopedI18n('pages.generate.steps.shape.shapes')

  const predefinedShapes: PredefinedShapeSchema[] = [
    {
      shape: 'any shape',
      image: anyshape,
      name: t('any-shape')
    },
    {
      shape: 'square',
      image: square,
      name: t('square')
    },
    {
      shape: 'circle',
      image: circle,
      name: t('circle')
    },
    {
      shape: 'hexagon',
      image: hexagon,
      name: t('hexagon')
    },
    {
      shape: 'triangle',
      image: triangle,
      name: t('triangle')
    },
    {
      shape: 'star',
      image: star,
      name: t('star')
    }
  ]

  return (
    <div className="grid grid-cols-4 gap-4">
      {predefinedShapes.map(({ shape, image, name }) => (
        <div key={shape}>
          <input
            type="radio"
            id={shape}
            name="color"
            className="sr-only"
            onClick={() => {
              setValue(shape === currentShape ? '' : shape)
            }}
          />
          <motion.div
            className="space-y-4 text-center"
            whileHover={{ scale: 1, opacity: 1 }}
            animate={currentShape === shape ? 'active' : ''}
            initial={{ scale: 0.9, opacity: 0.5 }}
            variants={{
              active: { scale: 1, opacity: 1 }
            }}
          >
            <motion.label
              htmlFor={shape}
              style={{ backgroundImage: `url(${image.src})` }}
              className={cn(
                'block aspect-square cursor-pointer rounded-md bg-contain '
              )}
            />
            <p className="text-foreground">{name}</p>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
