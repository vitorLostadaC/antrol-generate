import { getServerAuthSession } from '@/lib/auth'

export default async function Payment() {
  console.log((await getServerAuthSession())?.user)
  return <h1>Anderson fazer os testes aqui</h1>
}
