import { cn } from '@/lib/utils'
import { IShapes, IStyles } from '@/schemas/icons.schema'
import { predefinedStyles } from './data/style'

interface PredefinedShapesPropsShema {
  stylesSelecteds: IStyles[]
  setValue: (shape: IStyles[]) => void
}

export const PredefinedStyles = ({
  stylesSelecteds,
  setValue
}: PredefinedShapesPropsShema) => {
  const handleChange = (style: IStyles) => {
    if (stylesSelecteds.includes(style)) {
      setValue(stylesSelecteds.filter((s) => s !== style))
    } else {
      setValue([...stylesSelecteds, style])
    }
  }

  return (
    <div className="flex flex-wrap gap-4">
      {predefinedStyles.map(({ style, image }) => (
        <div key={style}>
          <input
            type="checkbox"
            id={style}
            name="shape"
            className="sr-only"
            onChange={() => handleChange(style)}
          />
          <div></div>
          <label
            htmlFor={style}
            className={cn('flex flex-col gap-1', {
              'gap-2': stylesSelecteds.includes(style)
            })}
          >
            <div
              style={{ backgroundImage: `url(${image.src})` }}
              className={cn(
                'block h-20 w-20 scale-90 cursor-pointer rounded-md bg-cover opacity-50 hover:opacity-100',
                {
                  'scale-110 opacity-100': stylesSelecteds.includes(style)
                }
              )}
            />
            <p
              className={cn(
                'scale-90 text-center text-foreground/60 hover:text-foreground/80',
                {
                  'scale-100 text-foreground': stylesSelecteds.includes(style)
                }
              )}
            >
              {style}
            </p>
          </label>
        </div>
      ))}
    </div>
  )
}
