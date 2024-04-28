'use client'

import { StripeProductName } from '@/data/stripeProducts'
import { createCheckoutSession } from './actions/createCheckoutSession'
import assets1 from './assets/assets1.png'
import assets2 from './assets/assets2.png'
import { PriceCards } from './components/PriceCards'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangleIcon } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
  const handleClickProduct = async (productPriceName: StripeProductName) => {
    try {
      const response = await createCheckoutSession(productPriceName)
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
    <div className="flex flex-col items-center justify-center gap-10 p-5">
      <div className="space-y-1 text-center">
        <h1 className="text-3xl">Buy credits</h1>
        <p className="text-gray-500">
          Buy credits to use our services and get access to the best features
        </p>
      </div>
      <Alert variant="warn">
        <AlertTriangleIcon className="h-4 w-4" />
        <AlertTitle>
          Please review our{' '}
          <Link href={'refund'} className="underline">
            Refund Policy
          </Link>{' '}
          before buying credits. We do not issue refunds at this time.
        </AlertTitle>
      </Alert>
      <PriceCards />

      <img
        src={assets1.src}
        alt="decoration images"
        className="fixed left-0 top-0 -z-10 h-96 sm:h-[] md:h-[40rem]"
      />
      <img
        src={assets2.src}
        alt="decoration images"
        className="fixed bottom-0 right-0 -z-10  h-[35rem]"
      />
    </div>
  )
}
