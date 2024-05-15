import { prisma } from '@/services/prisma'

export async function GET(req: Request) {
  const generations = await prisma.generation.findMany({
    take: 50
  })

  return Response.json(generations)
}
