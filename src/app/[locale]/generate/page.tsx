'use client'

import { useMultistepForm } from '@/hooks/useMultistepForm'
import {
  IShapes,
  colorsSchema,
  shapesSchema,
  stylesSchema
} from '@/schemas/icons.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, UseFormSetError, useForm } from 'react-hook-form'
import { z } from 'zod'
import { PromptStep, promptValidation } from './steps/prompt/promptStep'
import { ColorStep, colorsValidation } from './steps/color/colorStep'
import { ShapeStep, shapeValidation } from './steps/shape/shapeStep'
import { StylesStep, styleValidation } from './steps/style/styleStep'
import { ConfirmStep } from './steps/confirm/ConfirmStep'
import { ReactElement } from 'react'
import { createGeneration } from '@/actions/createGeneration'
import next from 'next'

const formSchema = z.object({
  prompt: z.string().min(3),
  color: colorsSchema.or(z.string()),
  shape: shapesSchema.or(z.string()),
  styles: z.array(stylesSchema)
})

export type FormSchema = z.infer<typeof formSchema>

interface GenericValidationParms {
  values: FormSchema
  setErrors: UseFormSetError<FormSchema>
}

export interface MultiFomsSchema {
  component: ReactElement
  validation: (params: GenericValidationParms) => boolean
}

export default function Generate() {
  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
      color: '',
      shape: '',
      styles: []
    }
  })

  const multiFormSteps: MultiFomsSchema[] = [
    {
      component: <PromptStep />,
      validation: promptValidation
    },
    {
      component: <ColorStep />,
      validation: colorsValidation
    },
    {
      component: <ShapeStep />,
      validation: shapeValidation
    },
    {
      component: <StylesStep />,
      validation: styleValidation
    },
    {
      component: <ConfirmStep />,
      validation: () => true
    }
  ]

  const { currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultistepForm(multiFormSteps.map((forms) => forms.component))

  const onSubmit = methods.handleSubmit((data) => {
    createGeneration({
      colorName: data.color,
      prompt: data.prompt,
      shape: data.shape as IShapes,
      styles: data.styles
    }).then((generation) => console.log(generation))
  })

  const handleValidationNext = () => {
    const validation = multiFormSteps[currentStepIndex].validation({
      setErrors: methods.setError,
      values: methods.getValues()
    })

    if (!validation) {
      return
    }

    next()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="mx-auto max-w-2xl py-10">
        <h1 className="text-3xl font-semibold">Vamos Começar?</h1>
        <div className="py-4">{step}</div>
        {!isFirstStep && <button onClick={back}>previous</button>}
        {!isLastStep && <button onClick={handleValidationNext}>next</button>}
      </form>
    </FormProvider>
  )
}
