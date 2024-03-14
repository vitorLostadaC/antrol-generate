'use server'

import { s3Client } from '@/services/s3'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { randomUUID } from 'crypto'

export const uploadFile = async (form: FormData): Promise<string | null> => {
  // TODO save in user id folder
  const file = form.get('file') as File
  const filename = randomUUID()

  const fileBuffer = Buffer.from(await file.arrayBuffer())

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: filename,
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
