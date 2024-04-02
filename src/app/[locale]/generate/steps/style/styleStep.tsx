import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '../../page'
import { PredefinedStyles } from './predefinedStyles'

export const StylesStep = () => {
  const form = useFormContext<z.infer<typeof formSchema>>()

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
