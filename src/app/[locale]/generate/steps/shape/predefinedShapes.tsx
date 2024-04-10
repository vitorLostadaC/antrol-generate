import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { usePredefinedShape } from './hooks/usePredefinedShape'

interface PredefinedShapesPropsShema {
  currentShape: string
  setValue: (shape: string) => void
}

export const PredefinedShapes = ({
  currentShape,
  setValue
}: PredefinedShapesPropsShema) => {
  const predefinedShapes = usePredefinedShape()

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
