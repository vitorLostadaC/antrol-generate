import { GeneratedCards } from '@/components/generatedCards/generatedCards'
import { Generation } from '@prisma/client'
import { DefaultFormValuesWebStorageSchema } from '../../page'

interface GeneratetioonsStepPropsSchema {
  generations: Generation[]
  resetToNewGeneration: (
    defaultValues?: DefaultFormValuesWebStorageSchema
  ) => void
}

export const GenerationsStep = ({
  generations,
  resetToNewGeneration
}: GeneratetioonsStepPropsSchema) => {
  return (
    <GeneratedCards
      generations={generations}
      resetToNewGeneration={resetToNewGeneration}
    />
  )
}
