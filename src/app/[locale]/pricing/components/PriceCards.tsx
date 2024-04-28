import { Button } from '@/components/ui/button'
import emeraldPlan from '@/assets/imagesPlan/emeraldPlan.png'
import diamondPlan from '@/assets/imagesPlan/diamondPlan.png'
import ironPlan from '@/assets/imagesPlan/ironPlan.png'
import woodPlan from '@/assets/imagesPlan/woodPlan.png'
import { StripeProductName, stripeProducts } from '@/data/stripeProducts'
import { cn } from '@/lib/utils'
import { ButtonClickProduct } from './ButtonClickProduct'
import { getCurrentLocale } from '@/locales/server'

interface PlanCardSchema {
  title: string
  priceBRL: number
  priceUSD: number
  productName: StripeProductName
  image: string
  mostPopular?: boolean
}

export const PriceCards = () => {
  const locale = getCurrentLocale()
  const isBR = locale === 'pt'

  const plans: PlanCardSchema[] = [
    {
      priceBRL: 10,
      priceUSD: 2,
      productName: '10credits',
      title: 'Starter',
      image: woodPlan.src
    },
    {
      priceBRL: 35,
      priceUSD: 7.5,
      productName: '50credits',
      title: 'Builder',
      image: ironPlan.src,
      mostPopular: true
    },
    {
      priceBRL: 60,
      priceUSD: 12,
      productName: '100credits',
      title: 'Pro',
      image: diamondPlan.src
    },
    {
      priceBRL: 100,
      priceUSD: 20,
      productName: '200credits',
      title: 'Master',
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
            <img src={plan.image} alt={plan.title} className="w-36" />
            <div className="w-full space-y-6">
              <div className="space-y-2">
                <h2 className="mt-4 text-xl font-semibold uppercase text-foreground/40">
                  {plan.title}
                </h2>

                <p className="text-2xl">{coins} coins</p>
                <p className="text-foreground/70">
                  Each credit costs {currencySymbol}
                  {price / coins}
                </p>
              </div>

              <ButtonClickProduct productName={plan.productName}>
                Buy for {currencySymbol}
                {price}
              </ButtonClickProduct>
            </div>
          </div>
        )
      })}
    </div>
  )
}
