import { cn } from '@/lib/utils'
import { IStyles } from '@/schemas/icons.schema'
import { StaticImageData } from 'next/image'
import { useScopedI18n } from '@/locales/client'
import { motion } from 'framer-motion'
import { SimpleTooltip } from '@/components/ui/simpletootip'
import { usePredefinedStyes } from './hooks/usePredefinedStyles'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface PredefinedShapesPropsShema {
  stylesSelecteds: IStyles[]
  setValue: (shape: IStyles[]) => void
}

const MAX_STYLES_PER_PAGE = 8

export const PredefinedStyles = ({
  stylesSelecteds,
  setValue
}: PredefinedShapesPropsShema) => {
  const [page, setPage] = useState(1)
  const predefinedStyles = usePredefinedStyes()
  const filtredStyles = predefinedStyles.filter((style, index) => {
    if (index < page * MAX_STYLES_PER_PAGE) return true
    return false
  })

  const handleChange = (style: IStyles) => {
    if (stylesSelecteds.includes(style)) {
      setValue(stylesSelecteds.filter((s) => s !== style))
    } else {
      setValue([...stylesSelecteds, style])
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {filtredStyles.map(({ style, image, name, description }) => (
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
      {predefinedStyles.length >= page * MAX_STYLES_PER_PAGE && (
        <Button
          variant={'secondary'}
          className="w-full"
          onClick={() => setPage(page + 1)}
        >
          Load more...
        </Button>
      )}
    </div>
  )
}
