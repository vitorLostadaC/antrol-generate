'use client'

import { useFormContext, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '../../page'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

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
          <TabsTrigger value={ColorValues.Predefined}>Predefined</TabsTrigger>
          <TabsTrigger value={ColorValues.Picker}>Picker</TabsTrigger>
          <TabsTrigger value={ColorValues.Hex}>Hex</TabsTrigger>
        </TabsList>
        <TabsContent
          value={ColorValues.Predefined}
          className="flex flex-wrap gap-4"
        >
          {predefinedColors.map((color) => (
            <div key={color}>
              <input
                type="radio"
                id={color}
                name="color"
                className="sr-only"
                onChange={() => setValue('color', color)}
              />
              <label
                htmlFor={color}
                style={{ backgroundColor: color }}
                className={cn(
                  'block h-10 w-10 scale-90 cursor-pointer rounded-md opacity-50 hover:opacity-100',
                  {
                    'scale-110 opacity-100': currentColor === color
                  }
                )}
              />
            </div>
          ))}
        </TabsContent>
        <TabsContent value={ColorValues.Picker}>
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  )
}
