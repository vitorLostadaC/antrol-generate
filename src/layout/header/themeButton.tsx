'use client'

import { Button } from '@/components/ui/button'
import { MoonStarIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeButton = () => {
  const { setTheme, theme } = useTheme()

  const isDarkTheme = theme === 'dark'

  return (
    <Button
      size={'icon'}
      variant={'ghost'}
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
    >
      {isDarkTheme ? (
        <MoonStarIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </Button>
  )
}
