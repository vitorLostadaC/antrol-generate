import { cn } from '@/lib/utils'
import { predefinedShapes } from './data/shape'

interface PredefinedShapesPropsShema {
  currentShape: string
  setValue: (shape: string) => void
}

export const PredefinedShapes = ({
  currentShape,
  setValue
}: PredefinedShapesPropsShema) => {
  return (
    <div className="flex flex-wrap gap-4">
      {predefinedShapes.map(({ shape, image }) => (
        <div key={shape}>
          <input
            type="radio"
            id={shape}
            name="shape"
            className="sr-only"
            onChange={() => setValue(shape)}
          />
          <label
            htmlFor={shape}
            style={{ backgroundImage: `url(${image.src})` }}
            className={cn(
              'block h-20 w-20 scale-90 cursor-pointer rounded-md bg-cover opacity-50 hover:opacity-100',
              {
                'scale-110 opacity-100': currentShape === shape
              }
            )}
          />
        </div>
      ))}
    </div>
  )
}
