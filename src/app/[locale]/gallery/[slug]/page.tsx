import { getGenerationById } from '@/actions/prisma/getGeneration'
import { AwsImage } from '@/components/ui/AwsImage'

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
        />
      )}
    </div>
  )
}
