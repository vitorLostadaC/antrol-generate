import { getGenerations } from '@/actions/prisma/getGenerations'

import { GeneratedCardsWrapper } from './components/genereatedCards'

export default async function Gallery() {
  const generations = await getGenerations({
    take: 50
  })

  return <GeneratedCardsWrapper generations={generations} />
}
