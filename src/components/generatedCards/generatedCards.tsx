import { Generation } from '@prisma/client'
import { GeneratedCard } from './generatedCard'
import { DefaultFormValuesWebStorageSchema } from '@/app/[locale]/generate/page'

interface GeneratedCardsPropsSchema {
  generations: Generation[]
  resetToNewGeneration: (
    defaultValues?: DefaultFormValuesWebStorageSchema
  ) => void
}

export const GeneratedCards = ({
  generations,
  resetToNewGeneration
}: GeneratedCardsPropsSchema) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {generations.map((generation) => (
        <GeneratedCard
          key={generation.id}
          generation={generation}
          resetToNewGeneration={resetToNewGeneration}
        />
      ))}
    </div>
  )
}
