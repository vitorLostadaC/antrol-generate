import { Label } from '@radix-ui/react-dropdown-menu'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { useFormContext } from 'react-hook-form'
import { PredefinedShapes } from './predefinesShapes'
import { z } from 'zod'
import { formSchema } from '../../page'

export const ShapeStep = () => {
  const form = useFormContext<z.infer<typeof formSchema>>()

  const currentShape = form.watch('shape')

  return (
    <div className="flex flex-col justify-center gap-4">
      <Label>3. selecione a forma:</Label>

      <PredefinedShapes
        currentShape={currentShape}
        setValue={(shape) => form.setValue('shape', shape)}
      />
    </div>
  )
}
