import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Roboto_Mono } from 'next/font/google'
import { Logo } from './Logo'
import { NavigateLinks } from './NavigateLinks'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const Header = () => {
  const money = 5

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-screen-2xl items-center justify-between py-3">
        {/* Left */}
        <div className="flex items-center gap-8">
          <Logo />
          <NavigateLinks />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <p>{money} credits left</p>
          <Button size={'default'}>Buy credits</Button>
          <Avatar>
            <AvatarImage
              src="https://vitorlostada.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvitor.efd5f725.jpg&w=640&q=75&dpl=dpl_DZ1i3EdhBi4KBCVzAun5xJLb1VD5"
              alt="teste"
            />
            <AvatarFallback>VT</AvatarFallback>
          </Avatar>
          <Button size={'icon'} variant={'ghost'}>
            <SunIcon width={20} height={20} />
          </Button>
        </div>
      </div>
    </header>
  )
}
