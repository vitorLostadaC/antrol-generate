'use client'

import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '../../page'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const enum ColorValues {
  Predefined = 'Predefined',
  Picker = 'Picker',
  Hex = 'Hex'
}

const predefinedColors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'pink',
  'black',
  'white',
  'gray',
  'orange',
  'brown',
  'cyan',
  'magenta',
  'lime',
  'teal',
  'indigo',
  'violet',
  'fuchsia',
  'gold',
  'coral',
  'navy',
  'salmon',
  'turquoise'
]

export const ColorStep = () => {
  const { register } = useFormContext<z.infer<typeof formSchema>>()
  return (
    <div className="flex flex-col justify-center gap-4">
      <Label>2. selecione a cor principal:</Label>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value={ColorValues.Predefined}>Predefined</TabsTrigger>
          <TabsTrigger value={ColorValues.Picker}>Picker</TabsTrigger>
          <TabsTrigger value={ColorValues.Hex}>Hex</TabsTrigger>
        </TabsList>
        <TabsContent
          value={ColorValues.Predefined}
          className="flex flex-wrap gap-4"
        >
          {predefinedColors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="h-10 w-10 rounded-md opacity-50 shadow-red-700 hover:opacity-100 hover:shadow-xl"
            />
          ))}
        </TabsContent>
        <TabsContent value={ColorValues.Picker}>
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  )
}
