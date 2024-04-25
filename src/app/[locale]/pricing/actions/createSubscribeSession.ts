'use server'

import { StripeProductName, stripeProducts } from '@/data/stripeProducts'
import { getServerAuthSession } from '@/lib/auth'
import { createCheckoutSession } from '@/services/stripe'

export const createSubscribeSession = async (
  productPriceName: StripeProductName
) => {
  const session = await getServerAuthSession()

  if (!session?.user.id) {
    throw new Error('User not found')
  }

  const stripeSession = await createCheckoutSession({
    productPriceId: stripeProducts[productPriceName].priceId,
    userId: session.user.id
  })
  return stripeSession
}
