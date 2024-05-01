import { PriceCards } from './components/PriceCards'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { getScopedI18n, getStaticParams } from '@/locales/server'
import { AlertTriangleIcon } from 'lucide-react'
import { setStaticParamsLocale } from 'next-international/server'
import Link from 'next/link'

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Pricing({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)
  const t = await getScopedI18n('pages.pricing')

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        {/* <h1 className="text-3xl">{t('title')}</h1>
        <p className="text-gray-500">{t('description')}</p> */}

        <h2 className="text-3xl font-bold md:text-4xl">
          Buy
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
            {' '}
            Coins!
          </span>
        </h2>

        <p className="pb-6 pt-4 text-xl text-muted-foreground">
          Buy credits to use our services and get access to the best features
        </p>
      </div>
      <div className="w-full space-y-4">
        <Alert variant="warn" className="w-full">
          <AlertTriangleIcon className="h-4 w-4" />
          <AlertTitle>
            {t('alert.title1')}{' '}
            <Link href={'refund'} className="underline">
              {t('alert.refund')}
            </Link>{' '}
            {t('alert.title2')}
          </AlertTitle>
        </Alert>
        <PriceCards />
      </div>
    </div>
  )
}
