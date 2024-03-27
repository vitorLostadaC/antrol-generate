'use client'

import { useFormContext, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '../../page'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ColorSteps } from './data/colors'
import { PredefinedColors } from './predefinedColors'

// colocar uma sombra aqui
export const ColorStep = () => {
  const { setValue, control, watch } =
    useFormContext<z.infer<typeof formSchema>>()

  const currentColor = watch('color')

  return (
    <div className="flex flex-col justify-center gap-4">
      <Label>2. selecione a cor principal:</Label>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value={ColorSteps.Predefined}>Predefined</TabsTrigger>
          <TabsTrigger value={ColorSteps.Picker}>Picker</TabsTrigger>
          <TabsTrigger value={ColorSteps.Hex}>Hex</TabsTrigger>
        </TabsList>

        <PredefinedColors
          currentColor={currentColor}
          setValue={(color) => setValue('color', color)}
        />

        <TabsContent value={ColorSteps.Picker}>
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  )
}
