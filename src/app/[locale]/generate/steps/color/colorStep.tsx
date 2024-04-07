'use client'

import { useFormContext } from 'react-hook-form'
import { FormSchema, MultiFomsSchema } from '../../page'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ColorSteps } from './data/colors'
import { PredefinedColors } from './predefinedColors'
import { ColorPicker } from './colorPicker'
import { CustomColor } from './customColor'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScopedI18n } from '@/locales/client'
import { WebStorage } from '@/data/webStorage'

export interface ColorGenericPropsShema {
  setValue: (color: string) => void
  currentColor: string
}
interface TabsTrigger {
  value: ColorSteps
  name: string
}

export const colorsValidation: MultiFomsSchema['validation'] = ({
  values,
  setErrors,
  t
}): boolean => {
  if (values.color !== '') return true

  setErrors('color', {
    message: t('pages.generate.steps.color.erros.color-required')
  })
  return false
}

const tabContents = [PredefinedColors, ColorPicker, CustomColor]

const tabsTriggers: TabsTrigger[] = [
  {
    value: ColorSteps.Predefined,
    name: 'Predefined'
  },
  {
    value: ColorSteps.Picker,
    name: 'Picker'
  },
  {
    value: ColorSteps.Hex,
    name: 'Hex'
  }
]

export const ColorStep = () => {
  const [tabValue, setTabValue] = useState(() => {
    return (
      localStorage.getItem(WebStorage.GenerateColorStep) ??
      ColorSteps.Predefined
    )
  })
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.color')

  const currentColor = watch('color')

  return (
    <div className="flex flex-col justify-center gap-4">
      <Label>{t('title')}</Label>
      <Tabs
        value={tabValue}
        defaultValue="account"
        className="flex flex-col gap-5"
        onValueChange={(value) => {
          setTabValue(value as ColorSteps)
          localStorage.setItem(WebStorage.GenerateColorStep, value)
          setValue('color', '', { shouldValidate: true })
        }}
      >
        <TabsList>
          {tabsTriggers.map((trigger) => (
            <TabsTrigger key={trigger.value} value={trigger.value}>
              {trigger.name}
              {tabValue === trigger.value && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 rounded-sm bg-background mix-blend-soft-light"
                  transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
                />
              )}
            </TabsTrigger>
          ))}
        </TabsList>
        {errors.color && (
          <p className="text-destructive">{errors.color.message}</p>
        )}
        {tabContents.map((TabContent) => (
          <TabContent
            key={TabContent.name}
            currentColor={currentColor}
            setValue={(color) =>
              setValue('color', color, { shouldValidate: true })
            }
          />
        ))}
      </Tabs>
    </div>
  )
}
