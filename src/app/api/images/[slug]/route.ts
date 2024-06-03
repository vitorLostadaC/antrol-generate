import { prisma } from '@/services/prisma'
import { NextApiHandler, NextApiRequest } from 'next'
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

  const url = new URL(req.url)
  const width = Number(url.searchParams.get('width') ?? 200)
  const height = Number(url.searchParams.get('height') ?? 200)

  if (!generation) {
    return Response.json({ error: 'Generation not found' }, { status: 404 })
  }

  try {
    const response = await fetch(generation.imagesURL[0])
    const imageBuffer = await response.arrayBuffer()
    const resizedImageBuffer = await sharp(Buffer.from(imageBuffer))
      .resize(width, height)
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
