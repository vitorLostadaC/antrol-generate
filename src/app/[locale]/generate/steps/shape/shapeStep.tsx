import { useFormContext } from 'react-hook-form'
import { PredefinedShapes } from './predefinedShapes'
import { FormSchema, MultiFomsSchema } from '../../page'
import { useScopedI18n } from '@/locales/client'
import { StepTitle } from '../../components/stepTitle'

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
  const errorMessage = form.formState.errors.shape?.message

  return (
    <div className="flex flex-col justify-center gap-4">
      <StepTitle title={t('title')} description={t('description')} />

      <PredefinedShapes
        currentShape={currentShape}
        setValue={(shape) =>
          form.setValue('shape', shape, { shouldValidate: true })
        }
      />
      <p className="h-6 text-destructive">{errorMessage}</p>
    </div>
  )
}
