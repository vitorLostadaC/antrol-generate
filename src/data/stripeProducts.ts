interface StripeProduct {
  priceId: string
  quota: {
    coins: number
  }
}

export type StripeProductName =
  | '10credits'
  | '50credits'
  | '100credits'
  | '200credits'

export const stripeProducts: Record<StripeProductName, StripeProduct> = {
  '10credits': {
    priceId: 'price_1P9El91kGQ7kv7j2Axs3AlqT',
    quota: {
      coins: 10
    }
  },
  '50credits': {
    priceId: 'price_1P9Elq1kGQ7kv7j2FWeUIpo2',
    quota: {
      coins: 50
    }
  },
  '100credits': {
    priceId: 'price_1P9EmA1kGQ7kv7j2b3cGJj4K',
    quota: {
      coins: 100
    }
  },
  '200credits': {
    priceId: 'price_1P9EmM1kGQ7kv7j2s4Lj5V7O',
    quota: {
      coins: 200
    }
  }
}
