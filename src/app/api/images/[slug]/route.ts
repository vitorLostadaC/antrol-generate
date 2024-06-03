import { prisma } from '@/services/prisma'
import sharp from 'sharp'

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
    const resizedImageBuffer = await sharp(Buffer.from(imageBuffer))
      .resize(200, 200)
      .toBuffer()
    const contentType = response.headers.get('content-type') || 'image/jpeg'

    return new Response(resizedImageBuffer, {
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
