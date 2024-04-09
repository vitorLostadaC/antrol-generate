import { useFormContext } from 'react-hook-form'
import { ReactNode } from 'react'
import { FormSchema } from '../../page'
import { useStyes } from '../style/hooks/useStyles'
import { cn } from '@/lib/utils'
import image from 'next/image'
import style from 'styled-jsx/style'

interface DisplayItem {
  name: string
  value: string | ReactNode
}
export const ConfirmStep = () => {
  const { getValues } = useFormContext<FormSchema>()
  const predefinedStyles = useStyes()

  return (
    <div className="flex flex-col gap-2">
      <h2>Prompt</h2>
      <p>{getValues('prompt')}</p>
      <div className="flex items-start justify-start gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2>Primary Color</h2>
          <div
            className="h-24 w-24 rounded-md"
            style={{ backgroundColor: getValues('primaryColor') }}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2>Secondary Color</h2>
          <div
            className="h-24 w-24 rounded-md"
            style={{ backgroundColor: getValues('secondaryColor') }}
          />
        </div>
      </div>

      <h2>Styles</h2>

      <div className="grid grid-cols-4 gap-6">
        {getValues('styles').map((style) => {
          const predefinedStyle = predefinedStyles.find(
            (s) => s.style === style
          )
          return (
            <div key={style} className="space-y-2 text-center">
              <img
                src={predefinedStyle?.image.src}
                alt={style}
                className={cn('aspect-square rounded-md bg-contain')}
              />

              <p className="text-foreground">{predefinedStyle?.name}</p>
            </div>
          )
        })}
      </div>

      <h2>Shape</h2>
      <p>{getValues('shape')}</p>
    </div>
  )
}

// Add image here
// Change the color to color name
// Add a button to load more
// Add a button to generate icon
