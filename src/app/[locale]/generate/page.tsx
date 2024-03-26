'use client'

import { shapesSchema, stylesSchema } from '@/schemas/icons.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  prompt: z.string().min(3),
  color: z.string(),
  shape: z.enum(shapesSchema.options),
  styles: z.array(stylesSchema)
})

export default function Generate() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
      color: '',
      shape: 'any shape',
      styles: []
    }
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}></form>
    </FormProvider>
  )
}
