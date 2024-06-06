import { getGenerationById } from '@/actions/prisma/getGeneration'
import { AwsImage } from '@/components/ui/AwsImage'
import { getScopedI18n } from '@/locales/server'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const t = await getScopedI18n('metadata.shared-icon')
  const generation = await getGenerationById(slug)

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: generation?.imagesURL,
      type: 'website',
      description: t('description'),
      siteName: 'Antrol AI',
      title: t('title')
    }
  }
}

export default async function GalleryIconPage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const generation = await getGenerationById(slug)

  return (
    <div className="m-auto w-full max-w-2xl">
      {generation && (
        <AwsImage
          className="select-none rounded-lg bg-foreground/20"
          generationId={generation.id}
          alt={generation.prompt}
          width={1024}
          height={1024}
        />
      )}
    </div>
  )
}
