import { getScopedI18n } from '@/locales/server'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('metadata.refund')

  return {
    title: t('title')
  }
}

export default async function TermsOfServices() {
  const t = await getScopedI18n('pages.refund-policy')

  const paragraphs = [
    t('paragraphs.ph1'),
    t('paragraphs.ph2'),
    t('paragraphs.ph3'),
    t('paragraphs.ph4')
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-4xl">{t('title')}</h1>
      <p>{t('last-update')}</p>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}
