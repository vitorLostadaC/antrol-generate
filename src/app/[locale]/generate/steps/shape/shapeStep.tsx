import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'
import { PredefinedShapes } from './predefinedShapes'
import { z } from 'zod'
import { FormSchema, MultiFomsSchema } from '../../page'

export const shapeValidation: MultiFomsSchema['validation'] = ({
  values,
  setErrors
}): boolean => {
  if (values.shape !== '') return true
  setErrors('shape', {
    message: 'seleciona um shape'
  })
  return false
}

export const ShapeStep = () => {
  const form = useFormContext<FormSchema>()

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
