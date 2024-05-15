import { getGenerations } from '@/actions/prisma/getGenerations'
import { AwsImage } from '@/components/ui/AwsImage'
import { env } from '@/env'
import { getScopedI18n } from '@/locales/server'
import { Generation } from '@prisma/client'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('metadata.gallery')

  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function Gallery() {
  const generations: Generation[] = await fetch(
    `${env.NEXT_PUBLIC_APP_URL}/api/generations`,
    {
      next: {
        revalidate: 3600
      }
    }
  ).then((res) => res.json())

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 ">
      {generations.map((generation) => (
        <AwsImage
          className="aspect-square h-full w-full select-none rounded-lg bg-foreground/15 object-cover"
          key={generation.id}
          generationId={generation.id}
          alt={generation.prompt}
        />
      ))}
    </div>
  )
}
