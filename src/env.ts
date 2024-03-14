import { z } from 'zod'

const envSchema = z.object({
  OPENAI_API_KEY: z.string(),
  AWS_S3_REGION: z.string(),
  AWS_S3_ACCESS_KEY_ID: z.string(),
  AWS_S3_SECRET_ACCESS_KEY: z.string(),
  AWS_S3_BUCKET_NAME: z.string()
})

export const env = envSchema.parse(process.env)
