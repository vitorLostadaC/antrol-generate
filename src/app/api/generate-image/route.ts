import { openai } from '@/services/openai'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const bodySchema = z.object({
  prompt: z.string(),
  model: z.enum(['dall-e-3', 'dall-e-2']),
  n: z.number()
})

export async function POST(req: NextRequest) {
  const { model, n, prompt } = bodySchema.parse(await req.json())

  const response = await openai.images.generate({
    model,
    n,
    prompt,
    quality: 'hd',
    response_format: 'url',
    size: '256x256'
  })

  return NextResponse.json({ response })
}
