import logo from '@/assets/logo.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Header = () => {
  const money = 5

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-screen-2xl items-center justify-between py-3">
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
        <div className="flex items-center gap-4">
          <p>{money} credits left</p>
          <Button size={'sm'}>Buy credits</Button>
          <Avatar>
            <AvatarImage
              src="https://vitorlostada.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvitor.efd5f725.jpg&w=640&q=75&dpl=dpl_DZ1i3EdhBi4KBCVzAun5xJLb1VD5"
              alt="teste"
            />
            <AvatarFallback>VT</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
