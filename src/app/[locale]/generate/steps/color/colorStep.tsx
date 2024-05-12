'use client'

import { useFormContext } from 'react-hook-form'
import { FormSchema, MultiFomsSchema } from '../../page'
import { useScopedI18n } from '@/locales/client'
import { ColorStepSelector } from './colorStepSelector'
import { Dispatch, SetStateAction } from 'react'
import { ColorSteps } from './data/colors'

export interface ColorGenericPropsShema {
  setValue: (color: string) => void
  selectorName: string
  currentColor: string
  tabSelected: ColorSteps
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

interface ColorStepPropsSchema {
  tabSelected: {
    primary: ColorSteps
    secondary: ColorSteps
  }
  setTabSelected: Dispatch<
    SetStateAction<{ primary: ColorSteps; secondary: ColorSteps }>
  >
}

export const ColorStep = ({
  setTabSelected,
  tabSelected
}: ColorStepPropsSchema) => {
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.color')

  const currentPrimaryColor = watch('primaryColor')
  const currentSecondaryColor = watch('secondaryColor')

  return (
    <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
      <ColorStepSelector
        selectorName="primaryColor"
        title={t('primary-color.title')}
        description={t('primary-color.description')}
        currentColor={currentPrimaryColor}
        setValue={(value) => {
          setValue('primaryColor', value, { shouldValidate: true })
        }}
        errorMessage={errors.primaryColor?.message}
        tabSelected={tabSelected.primary}
        setTabSelected={(currentTab) => {
          setTabSelected({
            primary: currentTab,
            secondary: tabSelected.secondary
          })
        }}
      />
      <ColorStepSelector
        selectorName="secondaryColor"
        title={t('secondary-color.title')}
        description={t('secondary-color.description')}
        currentColor={currentSecondaryColor}
        setValue={(value) => {
          setValue('secondaryColor', value, { shouldValidate: true })
        }}
        tabSelected={tabSelected.secondary}
        setTabSelected={(currentTab) => {
          setTabSelected({
            primary: tabSelected.primary,
            secondary: currentTab
          })
        }}
      />
    </div>
  )
}
