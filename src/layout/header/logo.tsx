import logo from '@/assets/logo.webp'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex w-10 items-center gap-4">
      <img
        src={logo.src}
        alt="Antrol Generate"
        className="h-full w-full rounded-md"
      />
      <h1 className="hidden md:block">Antrol Generate</h1>
    </Link>
  )
}
