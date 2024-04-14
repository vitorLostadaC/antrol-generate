'use client'

import { useMultistepForm } from '@/hooks/useMultistepForm'
import {
  IShapes,
  colorsSchema,
  shapesSchema,
  stylesSchema
} from '@/schemas/icons.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { UseFormSetError, useForm } from 'react-hook-form'
import { z } from 'zod'
import { PromptStep, promptValidation } from './steps/prompt/promptStep'
import { ColorStep, colorsValidation } from './steps/color/colorStep'
import { ShapeStep, shapeValidation } from './steps/shape/shapeStep'
import { StylesStep, styleValidation } from './steps/style/styleStep'
import { ConfirmStep } from './steps/confirm/ConfirmStep'
import { ReactElement, useState } from 'react'
import { createGeneration } from '@/actions/createGeneration'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useI18n, useScopedI18n } from '@/locales/client'
import { GetColorName } from 'hex-color-to-color-name'
import { Generation } from '@prisma/client'
import next from 'next'
import { GenerationsStep } from './steps/generations/GenerationsStep'
import { ColorSteps } from './steps/color/data/colors'

const formSchema = z.object({
  prompt: z.string().min(3),
  primaryColor: colorsSchema.or(z.string()),
  secondaryColor: colorsSchema.or(z.string()),
  shape: shapesSchema.or(z.string()),
  styles: z.array(stylesSchema)
})

export type FormSchema = z.infer<typeof formSchema>

interface GenericValidationParms {
  values: FormSchema
  setErrors: UseFormSetError<FormSchema>
  // reference: https://github.com/QuiiBz/next-international/issues/43
  t: ReturnType<typeof useI18n>
}

export interface MultiFomsSchema {
  component: ReactElement
  validation: (params: GenericValidationParms) => boolean
}

export default function Generate() {
  const t = useI18n()
  const [generations, setGenerations] = useState<Generation[]>([])
  const [tabSelectedColor, setTabSelectedColor] = useState({
    primary: ColorSteps.Predefined,
    secondary: ColorSteps.Predefined
  })
  const methods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
      primaryColor: '',
      secondaryColor: '',
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
      component: (
        <ColorStep
          tabSelected={tabSelectedColor}
          setTabSelected={setTabSelectedColor}
        />
      ),
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
    },
    {
      component: <GenerationsStep generations={generations} />,
      validation: () => true
    }
  ]

  const {
    currentStepIndex,
    step,
    next,
    back,
    isFirstStep,
    isLastStep,
    isPenultimate,
    goTo,
    steps
  } = useMultistepForm(multiFormSteps.map((forms) => forms.component))

  const onSubmit = methods.handleSubmit(async (data) => {
    const primaryColor = data.primaryColor.includes('#')
      ? GetColorName(data.primaryColor)
      : data.primaryColor

    const secondaryColor = data.secondaryColor.includes('#')
      ? GetColorName(data.secondaryColor)
      : data.secondaryColor

    try {
      const generation = await createGeneration({
        primaryColor,
        secondaryColor,
        prompt: data.prompt,
        shape: data.shape as IShapes,
        styles: data.styles
      })
      setGenerations([...generations, generation])
      goTo(steps.length - 1)
    } catch (e) {
      const error = e as Error
      console.log(error.message)
    }
  })

  const handleValidationNext = () => {
    const validation = multiFormSteps[currentStepIndex].validation({
      setErrors: methods.setError,
      values: methods.getValues(),
      t
    })

    if (!validation) {
      return
    }

    next()
  }

  return (
    <Form {...methods}>
      <form
        onSubmit={onSubmit}
        className="mx-auto flex h-full w-full max-w-xl flex-1 flex-col justify-between gap-2 py-4"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">
            {t('pages.generate.title.shall-we-begin')}
          </h1>

          <div className="">{step}</div>
        </div>
        <div className="flex justify-between">
          {!isFirstStep && (
            <Button type="button" variant={'secondary'} onClick={back}>
              {isLastStep
                ? t('pages.generate.buttons.generate-other-icon')
                : t('pages.generate.buttons.previous')}
            </Button>
          )}
          {!isLastStep && !isPenultimate && (
            <Button
              type="button"
              onClick={handleValidationNext}
              className="ml-auto"
            >
              {t('pages.generate.buttons.next')}
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
