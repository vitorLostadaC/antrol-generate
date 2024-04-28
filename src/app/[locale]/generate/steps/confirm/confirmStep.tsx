import { useFormContext } from 'react-hook-form'
import { FormSchema } from '../../page'
import { usePredefinedStyes } from '../style/hooks/usePredefinedStyles'
import { cn } from '@/lib/utils'
import { usePredefinedShape } from '../shape/hooks/usePredefinedShape'
import { useScopedI18n } from '@/locales/client'
import { StepTitle } from '../../components/stepTitle'
import { ShoppingCartIcon, SparklesIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface ConfirmStepPropsSchema {
  isGenerating: boolean
}

export const ConfirmStep = ({ isGenerating }: ConfirmStepPropsSchema) => {
  const { getValues } = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.confirm')
  const predefinedStyles = usePredefinedStyes()
  const predefinedShapes = usePredefinedShape()
  const { data } = useSession()
  const router = useRouter()
  const userHasMoney = data?.user.coins && data?.user.coins >= 2

  const currentShape = predefinedShapes.find(
    (shape) => shape.shape === getValues('shape')
  )

  return (
    <div className="flex flex-col gap-2">
      <StepTitle title={t('title')} description={t('description')} />

      <h2>{t('steps.prompt')}</h2>
      <p>{getValues('prompt')}</p>

      <div className="flex items-start justify-start gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2>{t('steps.primary-color')}</h2>
          <div
            className="aspect-square w-28 rounded-md"
            style={{ backgroundColor: getValues('primaryColor') }}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2>{t('steps.secondary-color')}</h2>
          <div
            className="aspect-square w-28 rounded-md"
            style={{ backgroundColor: getValues('secondaryColor') }}
          />
        </div>
      </div>

      <h2>{t('steps.shape')}</h2>

      <div className="w-28 space-y-2 text-center">
        <img
          src={currentShape?.image.src}
          alt={currentShape?.name}
          className={cn('aspect-square rounded-md bg-contain')}
        />

        <p className="text-foreground">{currentShape?.name}</p>
      </div>

      <h2>{t('steps.style')}</h2>
      <div className="grid grid-cols-4 gap-6">
        {getValues('styles').map((style) => {
          const predefinedStyle = predefinedStyles.find(
            (s) => s.style === style
          )
          return (
            <div key={style} className="space-y-2 text-center">
              <img
                src={predefinedStyle?.image.src}
                alt={style}
                className={cn('aspect-square rounded-md bg-contain')}
              />

              <p className="text-foreground">{predefinedStyle?.name}</p>
            </div>
          )
        })}
      </div>

      {userHasMoney ? (
        <Button
          className="gap-2 font-medium"
          disabled={isGenerating}
          type="submit"
        >
          {isGenerating ? (
            <Spinner color={'secondary'} size={'small'} />
          ) : (
            <>
              <span>{t('buttons.generate')}</span>
              <SparklesIcon size={20} />
            </>
          )}
        </Button>
      ) : (
        <Button
          type="button"
          className="gap-2 font-medium"
          onClick={() => router.push('/pricing')}
        >
          <>
            <span>{t('buttons.buy-coin')}</span>
            <ShoppingCartIcon size={20} />
          </>
        </Button>
      )}
    </div>
  )
}
