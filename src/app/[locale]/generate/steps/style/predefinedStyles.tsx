import { cn } from '@/lib/utils'
import { IStyles } from '@/schemas/icons.schema'
import { StaticImageData } from 'next/image'
import { useScopedI18n } from '@/locales/client'
import { motion } from 'framer-motion'
import { SimpleTooltip } from '@/components/ui/simpletootip'
import { useStyes } from './hooks/useStyles'

interface PredefinedShapesPropsShema {
  stylesSelecteds: IStyles[]
  setValue: (shape: IStyles[]) => void
}

export const PredefinedStyles = ({
  stylesSelecteds,
  setValue
}: PredefinedShapesPropsShema) => {
  const predefinedStyles = useStyes()

  const handleChange = (style: IStyles) => {
    if (stylesSelecteds.includes(style)) {
      setValue(stylesSelecteds.filter((s) => s !== style))
    } else {
      setValue([...stylesSelecteds, style])
    }
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {predefinedStyles.map(({ style, image, name, description }) => (
        <div key={style}>
          <input
            type="checkbox"
            id={style}
            name="shape"
            className="sr-only"
            onChange={() => handleChange(style)}
          />
          <SimpleTooltip content={description}>
            <motion.div
              className="space-y-4 text-center"
              whileHover={{ scale: 1, opacity: 1 }}
              animate={stylesSelecteds.includes(style) ? 'active' : ''}
              initial={{ scale: 0.9, opacity: 0.5 }}
              variants={{
                active: { scale: 1, opacity: 1 }
              }}
            >
              <label
                htmlFor={style}
                style={{ backgroundImage: `url(${image.src})` }}
                className={cn(
                  'block aspect-square cursor-pointer rounded-md bg-contain'
                )}
              />

              <p className="text-foreground">{name}</p>
            </motion.div>
          </SimpleTooltip>
        </div>
      ))}
    </div>
  )
}
