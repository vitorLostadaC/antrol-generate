import { getServerAuthSession } from '@/lib/auth'
import { PricingCard } from './pricing-card'

export default async function Payment() {
  const session = await getServerAuthSession()

  const plans = [
    {
      title: 'Plano Básico',
      description: 'Ideal para iniciantes',
      credits: 50,
      price: 'R$25,00',
      features: [
        '50 imagens incluídas',
        'Suporte por e-mail',
        'Acesso 24/7 à nossa biblioteca de imagens',
        'Atualizações regulares'
      ]
    },
    {
      title: 'Plano Padrão',
      description: 'Nosso plano mais popular',
      credits: 100,
      price: 'R$45,00',
      features: [
        '100 imagens incluídas',
        'Suporte por e-mail e telefone',
        'Acesso ilimitado à nossa biblioteca de imagens',
        'Atualizações regulares',
        'Recursos avançados de edição'
      ]
    },
    {
      title: 'Plano Premium',
      description: 'Para usuários avançados',
      credits: 250,
      price: 'R$100,00',
      features: [
        '250 imagens incluídas',
        'Suporte prioritário por e-mail, telefone e chat',
        'Acesso ilimitado à nossa biblioteca de imagens premium',
        'Atualizações regulares',
        'Recursos avançados de edição',
        'Funcionalidades exclusivas'
      ]
    }
  ]

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1>Payment</h1>
      <p>Session: {session?.user.name}</p>
      <div className="mt-10 flex space-x-5">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            credits={plan.credits}
            features={plan.features}
          />
        ))}
      </div>
    </main>
  )
}
