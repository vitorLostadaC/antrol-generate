import { Generation } from '@prisma/client'
import { GeneratedCard } from './generatedCard'
import { DefaultFormValuesWebStorageSchema } from '@/app/[locale]/generate/page'
import { cn } from '@/lib/utils'

interface GeneratedCardsPropsSchema {
  generations: Generation[]
  className?: string
  resetToNewGeneration: (
    defaultValues?: DefaultFormValuesWebStorageSchema
  ) => void
}

export const GeneratedCards = ({
  generations,
  resetToNewGeneration,
  className
}: GeneratedCardsPropsSchema) => {
  return (
    <div className={cn('grid grid-cols-4 gap-4', className)}>
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
