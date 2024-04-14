import { Generation } from '@prisma/client'
import { GeneratedCard } from './generatedCard'

interface GeneratedCardsPropsSchema {
  generations: Generation[]
}

export const GeneratedCards = ({ generations }: GeneratedCardsPropsSchema) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {generations.map((generation) => (
        <GeneratedCard key={generation.id} generation={generation} />
      ))}
    </div>
  )
}
