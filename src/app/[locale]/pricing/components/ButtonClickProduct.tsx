'use client'

import { Button } from '@/components/ui/button'
import { StripeProductName } from '@/data/stripeProducts'
import { createCheckoutSession } from '../actions/createCheckoutSession'

interface ButtonClickProductPropsSchema {
  children: React.ReactNode
  productName: StripeProductName
}
export const ButtonClickProduct = ({
  children,
  productName
}: ButtonClickProductPropsSchema) => {
  const handleClickProduct = async (productName: StripeProductName) => {
    try {
      const response = await createCheckoutSession(productName)
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
    <Button className="w-full" onClick={() => handleClickProduct(productName)}>
      {children}
    </Button>
  )
}
