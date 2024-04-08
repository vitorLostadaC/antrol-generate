import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'
import { FormSchema, MultiFomsSchema } from '../../page'
import { useScopedI18n } from '@/locales/client'

import { PredefinedStyles } from './predefinedStyles'

export const styleValidation: MultiFomsSchema['validation'] = ({
  values,
  setErrors,
  t
}): boolean => {
  if (values.styles.length !== 0) return true
  setErrors('shape', {
    message: t('pages.generate.steps.style.errors.style-required')
  })
  return false
}

export const StylesStep = () => {
  const form = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.style')

  const stylesSelecteds = form.watch('styles')

  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-1">
        <Label>{t('title')}</Label>
        <p className="text-foreground/70">{t('description')}</p>
      </div>
      <PredefinedStyles
        stylesSelecteds={stylesSelecteds}
        setValue={(style) => form.setValue('styles', style)}
      />
    </div>
  )
}
