import { getStaticParams } from '@/locales/server'
import { setStaticParamsLocale } from 'next-international/server'

export function generateStaticParams() {
  return getStaticParams()
}

export default function Payment({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)

  return <h1>Anderson fazer os testes aqui</h1>
}
