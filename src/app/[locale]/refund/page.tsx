import { getScopedI18n } from '@/locales/server'

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
