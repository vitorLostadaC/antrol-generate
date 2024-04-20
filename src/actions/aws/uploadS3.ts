'use server'

import { env } from '@/env'
import { getServerAuthSession } from '@/lib/auth'
import { s3Client } from '@/services/s3'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { randomUUID } from 'crypto'

export const uploadS3 = async (imageURL: string): Promise<string | null> => {
  const filename = randomUUID()

  const session = await getServerAuthSession()

  if (!session) return null

  const response = await fetch(imageURL)
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`)
  }

  const imageBuffer = Buffer.from(await response.arrayBuffer())

  const filePath = `${session.user.id}/${filename}`

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: filePath,
    Body: imageBuffer,
    ContentType: 'image/jpg'
  }

  await s3Client.send(new PutObjectCommand(params))

  return `https://${env.AWS_S3_BUCKET_NAME}.s3.${env.AWS_S3_REGION}.amazonaws.com/${filePath}`
}
