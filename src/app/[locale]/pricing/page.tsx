'use client'

import { StripeProductName } from '@/data/stripeProducts'
import { createSubscribeSession } from './actions/createSubscribeSession'

export default function Pricing() {
  const handleClickProduct = async (productPriceName: StripeProductName) => {
    try {
      const response = await createSubscribeSession(productPriceName)
      if (response.url) {
        window.location.href = response.url
      }
    } catch (error) {
      if ((error as Error).message === 'User not found') {
        console.log('User not found')
        //Todo login
      } else if (
        (error as Error).message === 'Error to create checkout session'
      ) {
        console.log('Error to create checkout session')
        //Todo error message
      }
    }
  }

  return (
    <div>
      <button onClick={() => handleClickProduct('10credits')}>
        10 credits
      </button>
      <button>50 reais</button>
      <button>100 reais</button>
    </div>
  )
}
