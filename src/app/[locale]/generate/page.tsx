'use client'

import { useMultistepForm } from '@/hooks/useMultistepForm'
import { shapesSchema, stylesSchema } from '@/schemas/icons.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { PromptStep } from './steps/prompt/promptStep'
import { ColorStep } from './steps/color/colorStep'

export const formSchema = z.object({
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

  const { step, next, back, isFirstStep, isLastStep } = useMultistepForm([
    <PromptStep />,
    <ColorStep />
  ])

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="py-10">
        <h1 className="text-3xl font-semibold">Vamos Começar?</h1>
        <div className="py-4">{step}</div>
        {!isFirstStep && <button onClick={back}>previus</button>}
        {!isLastStep && <button onClick={next}>next</button>}
      </form>
    </FormProvider>
  )
}
