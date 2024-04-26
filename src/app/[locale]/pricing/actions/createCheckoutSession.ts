'use server'

import { StripeProductName, stripeProducts } from '@/data/stripeProducts'
import { env } from '@/env'
import { getServerAuthSession } from '@/lib/auth'
import { stripe } from '@/services/stripe'

export const createCheckoutSession = async (
  productPriceName: StripeProductName
) => {
  const session = await getServerAuthSession()

  if (!session?.user.id) {
    throw new Error('User not found')
  }

  const currentProduct = stripeProducts[productPriceName]
  const userId = session.user.id

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: currentProduct.priceId,
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${env.NEXT_PUBLIC_APP_URL}/generate`,
      cancel_url: `${env.NEXT_PUBLIC_APP_URL}/pricing`,
      metadata: {
        userId,
        credits: currentProduct.quota.coins
      },
      client_reference_id: userId
    })

    return {
      url: session.url
    }
  } catch (error) {
    console.error((error as Error).message)
    // TODO: Sentry
    throw new Error('Error to create checkout session')
  }
}
