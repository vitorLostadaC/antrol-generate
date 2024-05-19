import { getScopedI18n } from '@/locales/server'

export default async function Loading() {
  const t = await getScopedI18n('pages.gallery')
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl">{t('title.pt1')} </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 ">
        {[...new Array(50)].map((_, index) => (
          <div
            key={'loading' + index}
            className="aspect-square h-full w-full animate-pulse select-none rounded-lg bg-foreground/15 object-cover"
          />
        ))}
      </div>{' '}
    </div>
  )
}
