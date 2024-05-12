'use client'

import { GeneratedCards } from '@/components/generatedCards/generatedCards'
import { Input } from '@/components/ui/input'
import { useScopedI18n } from '@/locales/client'
import { Generation } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface GeneratedCardsWrapperProps {
  generations: Generation[]
}
// no icons found, try generating one
export const GeneratedCardsWrapper = ({
  generations
}: GeneratedCardsWrapperProps) => {
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()
  const t = useScopedI18n('pages.collections')

  const filtredGenerations = generations.filter((generations) =>
    generations.prompt.includes(searchInput)
  )

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8">
      <Input
        className="w-full py-6"
        placeholder={t('placeholder')}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {filtredGenerations.length === 0 && (
        <p className="text-muted-foreground">{t('notFound')}</p>
      )}
      <GeneratedCards
        className=" grid-cols-2 sm:grid-cols-4 md:grid-cols-5"
        generations={filtredGenerations}
        resetToNewGeneration={() => {
          router.push('/generate')
        }}
      />
    </div>
  )
}
