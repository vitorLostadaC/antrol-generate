'use client'

import { Button } from '@/components/ui/button'
import { loadStripe } from '@stripe/stripe-js'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { checkoutAction } from './actions'
import { env } from '@/env'

interface PricingCardProps {
  title: string
  description: string
  price: string
  credits: number
  features: string[]
}

export function PricingCard({
  title,
  description,
  price,
  credits,
  features
}: PricingCardProps) {
  const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-blue-600 text-lg font-bold"
          onClick={() => {
            checkoutAction(credits).then(async (session) => {
              const stripe = await stripePromise
              if (stripe === null) return
              await stripe.redirectToCheckout({ sessionId: session.id })
            })
          }}
        >
          Comprar por {price}
        </Button>
      </CardFooter>
    </Card>
  )
}
