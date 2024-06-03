import { getGenerations } from '@/actions/prisma/getGenerations'
import { AwsImage } from '@/components/ui/AwsImage'
import { env } from '@/env'
import { getScopedI18n } from '@/locales/server'
import { Generation } from '@prisma/client'
import next, { Metadata } from 'next'
import sharp, { cache } from 'sharp'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('metadata.gallery')

  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function Gallery({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getScopedI18n('pages.gallery')
  const result = await getGenerations({
    take: 50
  })

  const generations: Generation[] = result

  const resizedGenerations = await Promise.all(
    generations.map(async (generation) => {
      try {
        const response = await fetch(generation.imagesURL[0])
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.statusText}`)
        }
        const arrayBuffer = await response.arrayBuffer()
        const buffer = await sharp(Buffer.from(arrayBuffer))
          .resize(200, 200)
          .toBuffer()

        const resizedImageUrl = `data:image/png;base64,${buffer.toString('base64')}`

        return {
          ...generation,
          resizedImageUrl
        }
      } catch (error) {
        console.error(
          `Failed to process image ${generation.imagesURL[0]}:`,
          error
        )
        return {
          ...generation,
          resizedImageUrl: null
        }
      }
    })
  )

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl">
        {t('title.pt1')}{' '}
        {/* <span className="text-sm text-foreground/80">({t('title.pt2')})</span> */}
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 ">
        {resizedGenerations.map((generation) => {
          if (generation.resizedImageUrl)
            return (
              <img
                key={generation.id}
                src={generation.resizedImageUrl}
                alt={generation.prompt}
                className="aspect-square h-full w-full select-none rounded-lg bg-foreground/15 object-cover"
              />
            )
          return (
            <AwsImage
              className="aspect-square h-full w-full select-none rounded-lg bg-foreground/15 object-cover"
              key={generation.id}
              generationId={generation.id}
              alt={generation.prompt}
            />
          )
        })}
      </div>{' '}
    </div>
  )
}
