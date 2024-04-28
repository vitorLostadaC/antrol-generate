'use client'

import { Button } from '@/components/ui/button'
import { StripeProductName, stripeProducts } from '@/data/stripeProducts'
import { createCheckoutSession } from '../actions/createCheckoutSession'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { signIn } from 'next-auth/react'
import { useScopedI18n } from '@/locales/client'

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
  const t = useScopedI18n('pages.pricing.erros')
  const handleClickProduct = async (productName: StripeProductName) => {
    try {
      const response = await createCheckoutSession(
        productName,
        isBRl ? 'brl' : 'usd'
      )
      if (response.url) {
        window.location.href = response.url
      }
    } catch (error) {
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
          title: t('unespected-error.title'),
          description: t('unespected-error.description'),
          variant: 'destructive'
        })
        //Todo sentry error message
      }
    }
  }

  return (
    <Button className="w-full" onClick={() => handleClickProduct(productName)}>
      {children}
    </Button>
  )
}
