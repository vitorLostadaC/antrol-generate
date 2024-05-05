import { getGenerationById } from '@/actions/prisma/getGeneration'

export default async function GalleryIconPage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const generation = await getGenerationById(slug)

  return (
    <div className="m-auto w-full max-w-2xl">
      <img
        className="select-none rounded-lg bg-foreground/20"
        src={generation?.imagesURL[0]}
        alt={generation?.prompt}
      />
    </div>
  )
}
