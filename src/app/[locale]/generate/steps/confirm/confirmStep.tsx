import { useFormContext } from 'react-hook-form'
import { FormSchema } from '../../page'
import { usePredefinedStyes } from '../style/hooks/usePredefinedStyles'
import { cn } from '@/lib/utils'
import { usePredefinedShape } from '../shape/hooks/usePredefinedShape'
import { useScopedI18n } from '@/locales/client'
import { StepTitle } from '../../components/stepTitle'
import posthog from 'posthog-js'
import { Fragment, useEffect } from 'react'
import { color } from 'framer-motion'

export const ConfirmStep = () => {
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

  const primaryColor = getValues('primaryColor')
  const secondaryColor = getValues('secondaryColor')

  const colors = [
    {
      name: t('steps.primary-color'),
      color: primaryColor
    },
    {
      name: t('steps.secondary-color'),
      color: secondaryColor
    }
  ]

  const mobileShapeAndColors = (
    <div className="block w-full space-y-2 sm:hidden">
      <h2 className="font-semibold">{t('steps.color')}</h2>
      <div className="grid grid-cols-2 gap-6">
        {colors.map((color) => {
          if (!color.color) return <Fragment key={color.name} />

          return (
            <div
              className="flex flex-col justify-center gap-2 text-center"
              key={color.name}
            >
              <div
                className="aspect-square w-full rounded-md"
                style={{ backgroundColor: color.color }}
              />
              <h2 className="text-nowrap text-foreground/80">{color.name}</h2>
            </div>
          )
        })}
      </div>
      <h2 className="font-semibold">{t('steps.shape')}</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="w-full space-y-2 text-center">
          <img
            src={currentShape?.image.src}
            alt={currentShape?.name}
            className={cn('aspect-square rounded-md bg-contain')}
          />

          <p className="text-foreground/80">{currentShape?.name}</p>
        </div>
      </div>
    </div>
  )

  const desktopShapeAndColors = (
    <div className="hidden w-full space-y-2 sm:block">
      <div className="grid grid-cols-4 gap-6">
        <h2 className="font-semibold">{t('steps.shape')}</h2>
        <h2 className="font-semibold">{t('steps.color')}</h2>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="w-full space-y-2 text-center">
          <img
            src={currentShape?.image.src}
            alt={currentShape?.name}
            className={cn('aspect-square rounded-md bg-contain')}
          />

          <p className="text-foreground/80">{currentShape?.name}</p>
        </div>
        {colors.map((color) => {
          if (!color.color) return <Fragment key={color.name} />

          return (
            <div
              key={color.name}
              className="flex flex-col justify-center gap-2 text-center"
            >
              <div
                className="aspect-square w-full rounded-md"
                style={{ backgroundColor: color.color }}
              />
              <h2 className="text-nowrap text-foreground/80">{color.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col gap-2">
      <StepTitle title={t('title')} description={t('description')} />

      <h2 className="font-semibold">{t('steps.prompt')}</h2>
      <p>{getValues('prompt')}</p>

      {mobileShapeAndColors}
      {desktopShapeAndColors}

      <h2 className="font-semibold">{t('steps.style')}</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
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

              <p className="text-foreground/80">{predefinedStyle?.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
