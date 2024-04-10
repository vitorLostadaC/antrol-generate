import { Label } from '@radix-ui/react-dropdown-menu'
import { motion } from 'framer-motion'
import { ColorSteps } from './data/colors'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import { ColorPicker } from './colorPicker'
import { CustomColor } from './customColor'
import { PredefinedColors } from './predefinedColors'
import { StepTitle } from '../../components/stepTitle'

interface ColorStepSelectorPropsSchema {
  selectorName: string
  title: string
  description: string
  errorMessage?: string
  currentColor: string
  setValue: (color: string) => void
  webStorageKey: string
}

interface TabsTrigger {
  value: ColorSteps
  name: string
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

export const ColorStepSelector = ({
  selectorName,
  currentColor,
  description,
  setValue,
  title,
  errorMessage,
  webStorageKey
}: ColorStepSelectorPropsSchema) => {
  const [tabValue, setTabValue] = useState(() => {
    return sessionStorage.getItem(webStorageKey) ?? ColorSteps.Predefined
  })

  return (
    <div className="flex flex-col justify-center gap-2">
      <StepTitle title={title} description={description} />
      <Tabs
        value={tabValue}
        defaultValue="account"
        className="flex flex-col gap-3"
        onValueChange={(value) => {
          setTabValue(value as ColorSteps)
          sessionStorage.setItem(webStorageKey, value)
          setValue('')
        }}
      >
        <TabsList>
          {tabsTriggers.map((trigger) => (
            <TabsTrigger
              key={trigger.value + selectorName}
              value={trigger.value}
            >
              {trigger.name}
              {tabValue === trigger.value && (
                <motion.span
                  layoutId={selectorName}
                  className="absolute inset-0 z-10 rounded-sm bg-background mix-blend-soft-light"
                  transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
                />
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="min-h-52">
          {tabContents.map((TabContent) => (
            <TabContent
              key={TabContent.name + selectorName}
              selectorName={selectorName}
              currentColor={currentColor}
              setValue={(color) => setValue(color)}
            />
          ))}
        </div>
        <p className="h-6 text-destructive">{errorMessage}</p>
      </Tabs>
    </div>
  )
}
