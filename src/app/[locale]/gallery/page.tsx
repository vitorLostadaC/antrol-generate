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

export default async function Gallery({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getScopedI18n('pages.gallery')
  const response = await getGenerations({
    take: 50
  })

  const generations: Generation[] = response.generations

  const date = response.date

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl">
        {new Date(date).toLocaleString()}
        <span className="text-sm text-foreground/80">({t('title.pt2')})</span>
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 "></div>{' '}
    </div>
  )
}
