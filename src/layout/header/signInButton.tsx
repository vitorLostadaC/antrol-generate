'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useI18n } from '@/locales/client'

export const SignInButton = () => {
  const t = useI18n()
  const { signInToMyApp } = useAuth()

  return <Button onClick={() => signInToMyApp()}>{t('header.sign-in')}</Button>
}
