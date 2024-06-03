import { GeneratedCards } from '@/components/generatedCards/generatedCards'
import { Generation } from '@prisma/client'
import { DefaultFormValuesWebStorageSchema } from '../../page'
import { GeneratedCard } from '@/components/generatedCards/generatedCard'

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
  const generationsWithoutReference = [...generations]

  const lastGeneration = generationsWithoutReference.pop()!

  return (
    <div className="flex flex-col gap-2">
      <GeneratedCard
        generation={lastGeneration}
        resetToNewGeneration={resetToNewGeneration}
        imageSize={{ width: 1024, height: 1024 }}
      />

      <GeneratedCards
        generations={generationsWithoutReference}
        resetToNewGeneration={resetToNewGeneration}
      />
    </div>
  )
}
