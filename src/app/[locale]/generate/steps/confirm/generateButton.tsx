import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
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

  if (!session.data?.user)
    return (
      <Button
        type="button"
        className="gap-2 font-medium"
        onClick={() => {
          posthog.capture('sign-in-from-generate-button')
          signIn('google')
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
    <Button className="gap-2 font-medium" disabled={isGenerating} type="submit">
      {isGenerating ? (
        <Spinner color={'secondary'} size={'small'} />
      ) : (
        <>
          <span>{t('buttons.generate')}</span>
          {/* <SparklesIcon size={20} /> */}
        </>
      )}
    </Button>
  )
}
