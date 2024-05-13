import { env } from '@/env'

interface StripeProduct {
  priceId: string
  quota: {
    coins: number
  }
}

export type StripeProductName =
  | '10credits'
  | '50credits'
  | '100credits'
  | '200credits'

export const stripeProducts: Record<StripeProductName, StripeProduct> = {
  '10credits': {
    priceId: env.STRIPE_PRODUCT_ID_10,
    quota: {
      coins: 10
    }
  },
  '50credits': {
    priceId: env.STRIPE_PRODUCT_ID_50,
    quota: {
      coins: 50
    }
  },
  '100credits': {
    priceId: env.STRIPE_PRODUCT_ID_100,
    quota: {
      coins: 100
    }
  },
  '200credits': {
    priceId: env.STRIPE_PRODUCT_ID_200,
    quota: {
      coins: 200
    }
  }
}
