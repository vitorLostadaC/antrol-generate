import { PriceCards } from './components/PriceCards'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { getScopedI18n } from '@/locales/server'
import { AlertTriangleIcon } from 'lucide-react'
import Link from 'next/link'

export default async function Pricing() {
  const t = await getScopedI18n('pages.pricing')

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl">{t('title')}</h1>
        <p className="text-gray-500">{t('description')}</p>
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
