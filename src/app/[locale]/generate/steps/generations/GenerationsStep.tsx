import { GeneratedCard } from '@/components/GeneratedCard'
import { Generation } from '@prisma/client'

interface GeneratetioonsStepPropsSchema {
  generations: Generation[]
}

export const GenerationsStep = ({
  generations
}: GeneratetioonsStepPropsSchema) => {
  return (
    <div className="grid grid-cols-3">
      {generations.map((generation) => (
        <GeneratedCard key={generation.id} generation={generation} />
      ))}
    </div>
  )
}
