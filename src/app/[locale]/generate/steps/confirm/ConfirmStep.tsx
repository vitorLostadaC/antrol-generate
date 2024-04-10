import { useFormContext } from 'react-hook-form'
import { ReactNode } from 'react'
import { FormSchema } from '../../page'
import { usePredefinedStyes } from '../style/hooks/usePredefinedStyles'
import { cn } from '@/lib/utils'
import image from 'next/image'
import style from 'styled-jsx/style'
import { usePredefinedShape } from '../shape/hooks/usePredefinedShape'
import { Label } from '@radix-ui/react-dropdown-menu'
import { useScopedI18n } from '@/locales/client'
import { StepTitle } from '../../components/stepTitle'

interface DisplayItem {
  name: string
  value: string | ReactNode
}
export const ConfirmStep = () => {
  const { getValues } = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.confirm')
  const predefinedStyles = usePredefinedStyes()
  const predefinedShapes = usePredefinedShape()

  const currentShape = predefinedShapes.find(
    (shape) => shape.shape === getValues('shape')
  )

  return (
    <div className="flex flex-col gap-2">
      <StepTitle title={t('title')} description={t('description')} />

      <h2>{t('steps.prompt')}</h2>
      <p>{getValues('prompt')}</p>

      <div className="flex items-start justify-start gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2>{t('steps.primary-color')}</h2>
          <div
            className="aspect-square w-32 rounded-md"
            style={{ backgroundColor: getValues('primaryColor') }}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2>{t('steps.secondary-color')}</h2>
          <div
            className="aspect-square w-32 rounded-md"
            style={{ backgroundColor: getValues('secondaryColor') }}
          />
        </div>
      </div>

      <h2>{t('steps.style')}</h2>
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

      <h2>{t('steps.shape')}</h2>

      <div className="w-32 space-y-2 text-center">
        <img
          src={currentShape?.image.src}
          alt={currentShape?.name}
          className={cn('aspect-square rounded-md bg-contain')}
        />

        <p className="text-foreground">{currentShape?.name}</p>
      </div>
    </div>
  )
}
