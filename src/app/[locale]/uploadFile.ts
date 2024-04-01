'use server'

import { getServerAuthSession } from '@/lib/auth'
import { s3Client } from '@/services/s3'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { randomUUID } from 'crypto'

export const uploadFile = async (form: FormData): Promise<string | null> => {
  const file = form.get('file') as File
  const filename = randomUUID()

  const session = await getServerAuthSession()

  if (!session) return null

  const fileBuffer = Buffer.from(await file.arrayBuffer())

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${session.user.id}/${filename}`,
    Body: fileBuffer,
    ContentType: 'image/jpg'
  }

  try {
    await s3Client.send(new PutObjectCommand(params))
    return filename
  } catch (error) {
    console.log('error:', error)
    return null
  }
}
