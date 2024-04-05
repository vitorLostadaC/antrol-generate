import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { FormSchema, MultiFomsSchema } from '../../page'
import { PredefinedStyles } from './predefinedStyles'

export const styleValidation: MultiFomsSchema['validation'] = ({
  values,
  setErrors
}): boolean => {
  if (values.styles.length !== 0) return true
  setErrors('shape', {
    message: 'seleciona um estilo'
  })
  return false
}

export const StylesStep = () => {
  const form = useFormContext<FormSchema>()

  const stylesSelecteds = form.watch('styles')

  return (
    <div className="flex flex-col justify-center gap-4">
      <Label>3. selecione a forma:</Label>

      <PredefinedStyles
        stylesSelecteds={stylesSelecteds}
        setValue={(style) => form.setValue('styles', style)}
      />
    </div>
  )
}
