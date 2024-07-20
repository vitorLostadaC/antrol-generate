'use server'

import { StripeProductName, stripeProducts } from '@/data/stripeProducts'
import { env } from '@/env'
import { getServerAuthSession } from '@/lib/auth'
import { stripe } from '@/services/stripe'
import * as Sentry from '@sentry/nextjs'

export const createCheckoutSession = async (
  productPriceName: StripeProductName,
  currency: 'brl' | 'usd'
) => {
  const session = await getServerAuthSession()

  if (!session?.user.id) {
    return { error: { message: 'User not found' } }
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
      currency: currency,
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
  } catch (e) {
    const error = e as Error
    Sentry.captureException('error to create checkout session', {
      tags: {
        error: error.message
      }
    })
    console.log(error.message)
    return { error: { message: 'Error to create checkout session' } }
  }
}
