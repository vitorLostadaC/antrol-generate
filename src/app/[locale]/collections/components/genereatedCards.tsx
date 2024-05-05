'use client'

import { GeneratedCards } from '@/components/generatedCards/generatedCards'
import { Generation } from '@prisma/client'
import { useRouter } from 'next/navigation'
import router from 'next/router'

interface GeneratedCardsWrapperProps {
  generations: Generation[]
}

export const GeneratedCardsWrapper = ({
  generations
}: GeneratedCardsWrapperProps) => {
  const router = useRouter()
  return (
    <div className="mx-auto grid max-w-3xl">
      <GeneratedCards
        classNames="grid-cols-5"
        generations={generations}
        resetToNewGeneration={() => {
          router.push('/generate')
        }}
      />
    </div>
  )
}
