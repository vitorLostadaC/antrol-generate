import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '../../page'
import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface DisplayItem {
  name: string
  value: string | ReactNode
}
export const ConfirmStep = () => {
  const { getValues } = useFormContext<z.infer<typeof formSchema>>()

  return (
    <div>
      <h2>Prompt</h2>
      <p>{getValues('prompt')}</p>
      <h2>Primary Color</h2>
      <p>{getValues('color')}</p>
      <h2>Styles</h2>
      <p>{getValues('styles')}</p>
      <h2>Shape</h2>
      <p>{getValues('shape')}</p>
      <Button type="submit">Generate Icon</Button>
    </div>
  )
}
