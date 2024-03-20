import logo from '@/assets/logo.webp'
import Link from 'next/link'

export const Header = () => {
  const money = 5

  return (
    <header className="bg-emerald-500">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between bg-red-400">
        {/* Left */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <img
              src={logo.src}
              alt="Antrol Generate"
              className="w-10 rounded-md"
            />
            <h1>Antrol Generate</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href={'/generate'}>Generate</Link>
            <Link href={'/gallery'}>Gallery</Link>
            <Link href={'/collection'}>Collection</Link>
            <Link href={'/retouch'}>Retouch</Link>
          </nav>
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <p>{money} credits left</p>
          <button>Buy credits</button>
          <p>avatar</p>
        </div>
      </div>
    </header>
  )
}
