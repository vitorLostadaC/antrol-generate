import { env } from '@/env'
import Stripe from 'stripe'

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10',
  httpClient: Stripe.createFetchHttpClient()
})

export const getStripeCustomerByEmail = async (email: string) => {
  const customers = await stripe.customers.list({ email })
  return customers.data[0]
}

interface CreateCheckoutSession {
  productPriceId: string
  userId: string
}

export const createCheckoutSession = async ({
  productPriceId,
  userId
}: CreateCheckoutSession) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: productPriceId,
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${env.NEXT_PUBLIC_APP_URL}/cancel`,
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

// export const handleProcessWebhookUpdatedSubscription = async (event: {
//   object: Stripe.Subscription
// }) => {
//   const stripeCustomerId = event.object.customer as string
//   const stripeSubscriptionId = event.object.id as string
//   const stripeSubscriptionStatus = event.object.status
//   const stripePriceId = event.object.items.data[0].price.id

//   const userExists = await prisma.user.findFirst({
//     where: {
//       OR: [
//         {
//           stripeSubscriptionId
//         },
//         {
//           stripeCustomerId
//         }
//       ]
//     },
//     select: {
//       id: true
//     }
//   })

//   if (!userExists) {
//     throw new Error('user of stripeCustomerId not found')
//   }

//   await prisma.user.update({
//     where: {
//       id: userExists.id
//     },
//     data: {
//       stripeCustomerId,
//       stripeSubscriptionId,
//       stripeSubscriptionStatus,
//       stripePriceId
//     }
//   })
// }

// type Plan = {
//   priceId: string
//   quota: {
//     TASKS: number
//   }
// }

// type Plans = {
//   [key: string]: Plan
// }

// export const getPlanByPrice = (priceId: string) => {
//   const plans: Plans = config.stripe.plans

//   const planKey = Object.keys(plans).find(
//     (key) => plans[key].priceId === priceId
//   ) as keyof Plans | undefined

//   const plan = planKey ? plans[planKey] : null

//   if (!plan) {
//     throw new Error(`Plan not found for priceId: ${priceId}`)
//   }

//   return {
//     name: planKey,
//     quota: plan.quota
//   }
// }

// export const getUserCurrentPlan = async (userId: string) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId
//     },
//     select: {
//       stripePriceId: true
//     }
//   })

//   if (!user || !user.stripePriceId) {
//     throw new Error('User or user stripePriceId not found')
//   }

//   const plan = getPlanByPrice(user.stripePriceId)

//   const tasksCount = await prisma.todo.count({
//     where: {
//       userId
//     }
//   })

//   const availableTasks = plan.quota.TASKS
//   const currentTasks = tasksCount
//   const usage = (currentTasks / availableTasks) * 100

//   return {
//     name: plan.name,
//     quota: {
//       TASKS: {
//         available: availableTasks,
//         current: currentTasks,
//         usage
//       }
//     }
//   }
// }
