import { getGenerations } from '@/actions/prisma/getGenerations'
import { GeneratedCardsWrapper } from './components/genereatedCards'
import { getServerAuthSession } from '@/lib/auth'

export default async function Gallery() {
  const session = await getServerAuthSession()

  const generations = await getGenerations({
    where: {
      userId: session?.user.id ?? ''
    }
  })

  return <GeneratedCardsWrapper generations={generations} />
}
