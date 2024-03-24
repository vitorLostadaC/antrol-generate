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
        <MoonStarIcon width={20} height={20} />
      ) : (
        <SunIcon width={20} height={20} />
      )}
    </Button>
  )
}
