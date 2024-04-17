import { GeneratedCards } from '@/components/generatedCards/generatedCards'
import { Generation } from '@prisma/client'

interface GeneratetioonsStepPropsSchema {
  generations: Generation[]
}

export const GenerationsStep = ({
  generations
}: GeneratetioonsStepPropsSchema) => {
  return <GeneratedCards generations={generations} />
}
