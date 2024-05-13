import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'
// STRIPE_PRODCUT_ID_10="price_1P9El91kGQ7kv7j2Axs3AlqT"
// STRIPE_PRODCUT_ID_50="price_1P9Elq1kGQ7kv7j2FWeUIpo2"
// STRIPE_PRODCUT_ID_100="price_1P9EmU1kGQ7kv7j2NGuM1ycY"
// STRIPE_PRODCUT_ID_200="price_1P9EnJ1kGQ7kv7j2rFp9vNjD"
export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    OPENAI_API_KEY: z.string(),
    AWS_S3_REGION: z.string(),
    AWS_S3_ACCESS_KEY_ID: z.string(),
    AWS_S3_SECRET_ACCESS_KEY: z.string(),
    AWS_S3_BUCKET_NAME: z.string(),
    DATABASE_URL: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    JWT_SECRET: z.string(),
    STRIPE_PUBLIC_KEY: z.string(),
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),
    STRIPE_PRODUCT_ID_10: z.string(),
    STRIPE_PRODUCT_ID_50: z.string(),
    STRIPE_PRODUCT_ID_100: z.string(),
    STRIPE_PRODUCT_ID_200: z.string()
  },
  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
    NEXT_PUBLIC_POSTHOG_KEY: z.string(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string()
  },
  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    AWS_S3_REGION: process.env.AWS_S3_REGION,
    AWS_S3_ACCESS_KEY_ID: process.env.AWS_S3_ACCESS_KEY_ID,
    AWS_S3_SECRET_ACCESS_KEY: process.env.AWS_S3_SECRET_ACCESS_KEY,
    AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
    DATABASE_URL: process.env.DATABASE_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    STRIPE_PRODUCT_ID_10: process.env.STRIPE_PRODUCT_ID_10,
    STRIPE_PRODUCT_ID_50: process.env.STRIPE_PRODUCT_ID_50,
    STRIPE_PRODUCT_ID_100: process.env.STRIPE_PRODUCT_ID_100,
    STRIPE_PRODUCT_ID_200: process.env.STRIPE_PRODUCT_ID_200
  }
})
