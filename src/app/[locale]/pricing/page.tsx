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
        <h2 className="text-3xl font-bold md:text-4xl">
          {t('title.pt1')}
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
            {' '}
            {t('title.pt2')}
          </span>
        </h2>

        <p className="pb-6 pt-4 text-xl text-muted-foreground">
          {t('description')}
        </p>
      </div>
      <div className="w-full space-y-4">
        <Alert className="w-full">
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
