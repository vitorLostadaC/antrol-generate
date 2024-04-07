'use client'

import { useFormContext } from 'react-hook-form'
import { FormSchema, MultiFomsSchema } from '../../page'
import { useScopedI18n } from '@/locales/client'
import { ColorStepSelector } from './colorStepSelector'
import { WebStorage } from '@/data/webStorage'

export interface ColorGenericPropsShema {
  setValue: (color: string) => void
  currentColor: string
}

export const colorsValidation: MultiFomsSchema['validation'] = ({
  values,
  setErrors,
  t
}): boolean => {
  if (values.primaryColor !== '') return true

  setErrors('primaryColor', {
    message: t('pages.generate.steps.color.erros.color-required')
  })
  return false
}

export const ColorStep = () => {
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.color')

  const currentPrimaryColor = watch('primaryColor')
  const currentSecondaryColor = watch('secondaryColor')

  return (
    <div className="flex flex-col gap-2">
      <ColorStepSelector
        selectorName="primaryColor"
        title={t('primary-color.title')}
        description={t('primary-color.description')}
        currentColor={currentPrimaryColor}
        setValue={(value) =>
          setValue('primaryColor', value, { shouldValidate: true })
        }
        webStorageKey={WebStorage.GeneratePrimaryColorStep}
        errorMessage={errors.primaryColor?.message}
      />
      <ColorStepSelector
        selectorName="secondaryColor"
        title={t('secondary-color.title')}
        description={t('secondary-color.description')}
        currentColor={currentSecondaryColor}
        setValue={(value) =>
          setValue('secondaryColor', value, { shouldValidate: true })
        }
        webStorageKey={WebStorage.GenerateSecondaryColorStep}
      />
    </div>
  )
}
