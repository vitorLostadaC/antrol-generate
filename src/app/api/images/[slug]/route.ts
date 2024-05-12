import { prisma } from '@/services/prisma'

export const dynamic = 'force-dynamic'

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const generation = await prisma.generation.findUnique({
    where: {
      id: params.slug
    }
  })

  if (!generation) {
    return Response.json({ error: 'Generation not found' }, { status: 404 })
  }

  try {
    const response = await fetch(generation.imagesURL[0])
    const imageBuffer = await response.arrayBuffer()
    const contentType = response.headers.get('content-type') || 'image/jpeg'

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType
      }
    })
  } catch (error) {
    console.error('Failed to fetch image:', error)
    Response.json({ error: 'Failed to fetch image' }, { status: 500 })
  }
}
