'use client'

import { Button } from '@/components/ui/button'
import { useI18n } from '@/locales/client'
import { signIn } from 'next-auth/react'

export const SignInButton = () => {
  const t = useI18n()

  return <Button onClick={() => signIn('google')}>{t('header.sign-in')}</Button>
}
