import emeraldPlan from '@/assets/imagesPlan/emeraldPlan.png'
import diamondPlan from '@/assets/imagesPlan/diamondPlan.png'
import ironPlan from '@/assets/imagesPlan/ironPlan.png'
import woodPlan from '@/assets/imagesPlan/woodPlan.png'
import { StripeProductName, stripeProducts } from '@/data/stripeProducts'
import { cn } from '@/lib/utils'
import { ButtonClickProduct } from './ButtonClickProduct'
import { getCurrentLocale, getScopedI18n } from '@/locales/server'

interface PlanCardSchema {
  title: string
  priceBRL: number
  priceUSD: number
  productName: StripeProductName
  image: string
  mostPopular?: boolean
}

export const PriceCards = async () => {
  const locale = getCurrentLocale()
  const isBR = locale === 'pt'

  const t = await getScopedI18n('pages.pricing.plans')

  const plans: PlanCardSchema[] = [
    {
      priceBRL: 10,
      priceUSD: 2,
      productName: '10credits',
      title: t('names.starter'),
      image: woodPlan.src
    },
    {
      priceBRL: 35,
      priceUSD: 7.5,
      productName: '50credits',
      title: t('names.builder'),
      image: ironPlan.src,
      mostPopular: true
    },
    {
      priceBRL: 60,
      priceUSD: 12,
      productName: '100credits',
      title: t('names.pro'),
      image: diamondPlan.src
    },
    {
      priceBRL: 100,
      priceUSD: 20,
      productName: '200credits',
      title: t('names.master'),
      image: emeraldPlan.src
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
      {plans.map((plan, index) => {
        const currencySymbol = isBR ? 'R$ ' : '$'
        const price = isBR ? plan.priceBRL : plan.priceUSD
        const coins = stripeProducts[plan.productName].quota.coins

        return (
          <div
            key={index}
            className={cn(
              'flex flex-col items-center justify-center rounded-lg border border-foreground/20 p-6 text-center tracking-wider',
              plan.mostPopular && 'border-primary/40 bg-primary/5'
            )}
          >
            <img src={plan.image} alt={plan.title} className="h-36 w-36" />
            <div className="w-full space-y-6">
              <div className="space-y-2">
                <h2 className="mt-4 text-xl font-semibold uppercase text-foreground/40">
                  {plan.title}
                </h2>

                <p className="text-2xl">
                  {coins} {t('coins')}
                </p>
                <p className="text-foreground/70">
                  {t('coins-cost')} {currencySymbol}
                  {price / coins}
                </p>
              </div>

              <ButtonClickProduct productName={plan.productName}>
                {t('button')} {currencySymbol}
                {price}
              </ButtonClickProduct>
            </div>
          </div>
        )
      })}
    </div>
  )
}
