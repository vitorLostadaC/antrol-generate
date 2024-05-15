import { AwsImage } from '@/components/ui/AwsImage'
import { env } from '@/env'
import { getScopedI18n, getStaticParams } from '@/locales/server'
import { Generation } from '@prisma/client'
import { Metadata } from 'next'
import { setStaticParamsLocale } from 'next-international/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('metadata.gallery')

  return {
    title: t('title'),
    description: t('description')
  }
}
export function generateStaticParams() {
  return getStaticParams()
}

export default async function Gallery({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)
  const t = await getScopedI18n('pages.gallery')
  const generations: Generation[] = await fetch(
    `${env.NEXT_PUBLIC_APP_URL}/api/generations`,
    {
      next: {
        revalidate: 3600
      }
    }
  ).then((res) => res.json())

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl">
        {t('title.pt1')}{' '}
        <span className="text-sm text-foreground/80">({t('title.pt2')})</span>
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 ">
        {generations.map((generation) => (
          <AwsImage
            className="aspect-square h-full w-full select-none rounded-lg bg-foreground/15 object-cover"
            key={generation.id}
            generationId={generation.id}
            alt={generation.prompt}
          />
        ))}
      </div>{' '}
    </div>
  )
}
