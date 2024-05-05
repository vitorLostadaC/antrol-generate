import { useFormContext } from 'react-hook-form'
import { FormSchema } from '../../page'
import { usePredefinedStyes } from '../style/hooks/usePredefinedStyles'
import { cn } from '@/lib/utils'
import { usePredefinedShape } from '../shape/hooks/usePredefinedShape'
import { useScopedI18n } from '@/locales/client'
import { StepTitle } from '../../components/stepTitle'
import { GenerateButton } from './generateButton'
import posthog from 'posthog-js'
import { useEffect } from 'react'

interface ConfirmStepPropsSchema {
  isGenerating: boolean
}

export const ConfirmStep = ({ isGenerating }: ConfirmStepPropsSchema) => {
  const { getValues } = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.confirm')
  const predefinedStyles = usePredefinedStyes()
  const predefinedShapes = usePredefinedShape()
  useEffect(() => {
    posthog.capture('join-confirm-page')
  }, [])

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
            className="aspect-square w-28 rounded-md"
            style={{ backgroundColor: getValues('primaryColor') }}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2>{t('steps.secondary-color')}</h2>
          <div
            className="aspect-square w-28 rounded-md"
            style={{ backgroundColor: getValues('secondaryColor') }}
          />
        </div>
      </div>

      <h2>{t('steps.shape')}</h2>

      <div className="w-28 space-y-2 text-center">
        <img
          src={currentShape?.image.src}
          alt={currentShape?.name}
          className={cn('aspect-square rounded-md bg-contain')}
        />

        <p className="text-foreground">{currentShape?.name}</p>
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

      <GenerateButton isGenerating={isGenerating} />
    </div>
  )
}
