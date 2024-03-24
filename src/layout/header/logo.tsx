import logo from '@/assets/logo.webp'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface LogoPropsSchema {
  isInSheet?: boolean
}

export const Logo = ({ isInSheet }: LogoPropsSchema) => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <img
        src={logo.src}
        alt="Antrol Generate"
        className="h-10 w-10 rounded-md"
      />
      <h1
        className={cn('hidden text-nowrap md:block', {
          'block text-lg font-medium': isInSheet
        })}
      >
        Antrol Generate
      </h1>
    </Link>
  )
}
