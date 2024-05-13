import Stripe from 'stripe'

import { stripe } from '@/services/stripe'
import { headers } from 'next/headers'
import { prisma } from '@/services/prisma'
import { env } from '@/env'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    )
  } catch (e) {
    const error = e as Error
    console.error(`Webhook Error: ${error.message}`)
    return new Response(`Webhook Error: ${error.message}`, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const userId = event.data.object.metadata!.userId
      const credits = parseInt(event.data.object.metadata!.credits)

      await prisma.user.update({
        where: {
          id: userId
        },
        data: {
          coins: {
            increment: credits
          }
        }
      })
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return new Response('{ "received": true }', { status: 200 })
}
