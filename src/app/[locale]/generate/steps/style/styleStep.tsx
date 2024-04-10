import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'
import { FormSchema, MultiFomsSchema } from '../../page'
import { useScopedI18n } from '@/locales/client'

import { PredefinedStyles } from './predefinedStyles'
import { StepTitle } from '../../components/stepTitle'

export const styleValidation: MultiFomsSchema['validation'] = ({
  values,
  setErrors,
  t
}): boolean => {
  if (values.styles.length !== 0) return true
  setErrors('styles', {
    message: t('pages.generate.steps.style.errors.style-required')
  })
  return false
}

export const StylesStep = () => {
  const form = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.style')

  const stylesSelecteds = form.watch('styles')
  const errorMessage = form.formState.errors.styles?.message

  return (
    <div className="flex flex-col justify-center gap-4">
      <StepTitle title={t('title')} description={t('description')} />

      <PredefinedStyles
        stylesSelecteds={stylesSelecteds}
        setValue={(style) =>
          form.setValue('styles', style, { shouldValidate: true })
        }
      />
      <p className="h-6 text-destructive">{errorMessage}</p>
    </div>
  )
}
