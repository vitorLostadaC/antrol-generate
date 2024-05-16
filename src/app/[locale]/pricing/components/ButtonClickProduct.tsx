'use client'

import { Button } from '@/components/ui/button'
import { StripeProductName, stripeProducts } from '@/data/stripeProducts'
import { createCheckoutSession } from '../actions/createCheckoutSession'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { signIn } from 'next-auth/react'
import { useScopedI18n } from '@/locales/client'
import posthog from 'posthog-js'
import { Spinner } from '@/components/ui/spinner'
import { useState } from 'react'

interface ButtonClickProductPropsSchema {
  children: React.ReactNode
  productName: StripeProductName
  isBRl: boolean
}
export const ButtonClickProduct = ({
  children,
  productName,
  isBRl
}: ButtonClickProductPropsSchema) => {
  const { toast } = useToast()
  const t = useScopedI18n('pages.pricing.errors')
  const [loading, setLoading] = useState(false)

  const handleClickProduct = async (productName: StripeProductName) => {
    setLoading(true)
    posthog.capture('click-product', { productName })
    try {
      const response = await createCheckoutSession(
        productName,
        isBRl ? 'brl' : 'usd'
      )
      if (response.error) {
        throw new Error(response.error.message)
      }
      if (response.url) {
        window.location.href = response.url
      }
    } catch (error) {
      console.log(error)
      if ((error as Error).message === 'User not found') {
        toast({
          title: t('login-required.title'),
          description: t('login-required.description'),
          variant: 'destructive',
          action: (
            <ToastAction altText="sign in" onClick={() => signIn('google')}>
              {t('login-required.action')}
            </ToastAction>
          )
        })
      } else if (
        (error as Error).message === 'Error to create checkout session'
      ) {
        toast({
          title: t('unexpected-error.title'),
          description: t('unexpected-error.description'),
          variant: 'destructive'
        })
      }
    }
  }

  return (
    <Button
      className="w-full gap-2"
      onClick={() => handleClickProduct(productName)}
      disabled={loading}
    >
      {loading ? <Spinner color={'secondary'} size={'small'} /> : children}
    </Button>
  )
}
