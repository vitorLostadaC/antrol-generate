import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'
import { PredefinedShapes } from './predefinedShapes'
import { z } from 'zod'
import { FormSchema, MultiFomsSchema } from '../../page'
import { useScopedI18n } from '@/locales/client'

export const shapeValidation: MultiFomsSchema['validation'] = ({
  values,
  setErrors,
  t
}): boolean => {
  if (values.shape !== '') return true
  setErrors('shape', {
    message: t('pages.generate.steps.shape.errors.shape-required')
  })
  return false
}

export const ShapeStep = () => {
  const form = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.shape')
  const currentShape = form.watch('shape')

  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-1">
        <Label>{t('title')}</Label>
        <p className="text-foreground/70">{t('description')}</p>
      </div>

      <PredefinedShapes
        currentShape={currentShape}
        setValue={(shape) => form.setValue('shape', shape)}
      />
    </div>
  )
}
