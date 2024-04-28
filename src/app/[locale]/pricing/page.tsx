import { PriceCards } from './components/PriceCards'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { AlertTriangleIcon } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl">Buy coins</h1>
        <p className="text-gray-500">
          Buy credits to use our services and get access to the best features
        </p>
      </div>
      <div className="w-full space-y-4">
        <Alert variant="warn" className="w-full">
          <AlertTriangleIcon className="h-4 w-4" />
          <AlertTitle>
            Please review our{' '}
            <Link href={'refund'} className="underline">
              Refund Policy
            </Link>{' '}
            before buying credits. We do not issue refunds at this time.
          </AlertTitle>
        </Alert>
        <PriceCards />
      </div>
    </div>
  )
}
