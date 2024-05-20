import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/lib/utils'
import { useScopedI18n } from '@/locales/client'
import { LogInIcon, ShoppingCartIcon, SparklesIcon } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import posthog from 'posthog-js'

interface GenerateButtonSchema {
  isGenerating: boolean
}

export const GenerateButton = ({ isGenerating }: GenerateButtonSchema) => {
  const t = useScopedI18n('pages.generate.steps.confirm')
  const router = useRouter()
  const session = useSession()
  const userHasMoney = session.data?.user.coins && session.data?.user.coins >= 2
  const { signInToMyApp } = useAuth()

  if (!session.data?.user)
    return (
      <Button
        type="button"
        className="gap-2 font-medium"
        onClick={() => {
          posthog.capture('sign-in-from-generate-button')
          signInToMyApp()
        }}
      >
        <>
          <span>{t('buttons.sign-in')}</span>
          <LogInIcon size={20} />
        </>
      </Button>
    )

  if (!userHasMoney)
    return (
      <Button
        type="button"
        className="gap-2 font-medium"
        onClick={() => {
          posthog.capture('buy-coin-from-generate-button')
          router.push('/pricing')
        }}
      >
        <>
          <span>{t('buttons.buy-coin')}</span>
          <ShoppingCartIcon size={20} />
        </>
      </Button>
    )

  return (
    <Button
      className="relative gap-2 font-medium"
      disabled={isGenerating}
      type="submit"
    >
      {isGenerating && (
        <div className="absolute left-1/2 -translate-x-1/2">
          <Spinner color={'secondary'} size={'small'} />
        </div>
      )}

      <span className={cn(isGenerating && 'opacity-0')}>
        {t('buttons.generate')}
      </span>
      {/* <SparklesIcon size={20} /> */}
    </Button>
  )
}
