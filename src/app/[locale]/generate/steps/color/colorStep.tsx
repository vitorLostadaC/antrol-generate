'use client'

import { useFormContext } from 'react-hook-form'
import { FormSchema, MultiFomsSchema } from '../../page'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ColorSteps } from './data/colors'
import { PredefinedColors } from './predefinedColors'
import { ColorPicker } from './colorPicker'
import { CustomColor } from './customColor'
import { useState } from 'react'

export interface ColorGenericPropsShema {
  setValue: (color: string) => void
  currentColor: string
}

export const colorsValidation: MultiFomsSchema['validation'] = ({
  values,
  setErrors
}): boolean => {
  if (values.color !== '') return true
  setErrors('color', {
    message: 'seleciona uma cor'
  })
  return false
}

export const ColorStep = () => {
  const [tabValue, setTabValue] = useState(ColorSteps.Predefined)
  const { setValue, watch } = useFormContext<FormSchema>()

  const currentColor = watch('color')

  const tabContents = [PredefinedColors, ColorPicker, CustomColor]

  return (
    <div className="flex flex-col justify-center gap-4">
      <Label>2. selecione a cor principal:</Label>
      <Tabs
        value={tabValue}
        defaultValue="account"
        className="w-[400px]"
        onValueChange={(value) => {
          setTabValue(value as ColorSteps)
          setValue('color', '')
        }}
      >
        <TabsList>
          <TabsTrigger value={ColorSteps.Predefined}>Predefined</TabsTrigger>
          <TabsTrigger value={ColorSteps.Picker}>Picker</TabsTrigger>
          <TabsTrigger value={ColorSteps.Hex}>Hex</TabsTrigger>
        </TabsList>

        {tabContents.map((TabContent) => (
          <TabContent
            key={TabContent.name}
            currentColor={currentColor}
            setValue={(color) => setValue('color', color)}
          />
        ))}
      </Tabs>
    </div>
  )
}
