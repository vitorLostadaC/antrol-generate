import logo from '@/assets/logo.webp'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <img src={logo.src} alt="Antrol Generate" className="w-10 rounded-md" />
      <h1>Antrol Generate</h1>
    </Link>
  )
}
