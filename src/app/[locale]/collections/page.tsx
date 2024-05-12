import { getGenerations } from '@/actions/prisma/getGenerations'
import { GeneratedCardsWrapper } from './components/genereatedCards'
import { getServerAuthSession } from '@/lib/auth'
import { getScopedI18n } from '@/locales/server'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('metadata.collections')

  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function Gallery() {
  const session = await getServerAuthSession()

  const generations = await getGenerations({
    where: {
      userId: session?.user.id ?? ''
    }
  })

  return <GeneratedCardsWrapper generations={generations} />
}
