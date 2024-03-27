"use server"

import { env } from '@/env'
import { getServerAuthSession } from '@/lib/auth'
import { stripe } from "@/services/stripe"


export async function checkoutAction(credits: number){
  const session = await getServerAuthSession()

  if(!session?.user){
    throw new Error('Você precisa estar logado para realizar essa ação')
  }

  const pricesIds: Record<number, string> = {
    50: env.PRICE_ID_50,
    100: env.PRICE_ID_50,
    250: env.PRICE_ID_50
  }

  const priceId = pricesIds[credits]

  if(!priceId){
    throw new Error('Preço inválido')
  }

  return stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    metadata: {
      userId: session.user.id,
      credits: credits
    },
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    success_url: `${env.HOST_NAME}/`,
    cancel_url: `${env.HOST_NAME}/payment`
  })
}