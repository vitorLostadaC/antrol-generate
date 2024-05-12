import { getGenerations } from '@/actions/prisma/getGenerations'

export default async function Gallery() {
  const generations = await getGenerations({
    take: 50
  })

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 ">
      {generations.map((generation) => (
        <img
          className="aspect-square h-full w-full select-none rounded-lg bg-foreground/15 object-cover"
          key={generation.id}
          src={generation.imagesURL[0]}
          alt={generation.prompt}
        />
      ))}
    </div>
  )
}
