'use client'

import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { MoonStarIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

interface ThemeButtonPropsSchema {
  variant?: 'default' | 'switch'
}

export const ThemeButton = ({ variant }: ThemeButtonPropsSchema) => {
  // reference: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  const isDarkTheme = theme === 'dark'

  const toogleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (variant === 'switch')
    return (
      <div className="flex items-center gap-2">
        <SunIcon className="h-5 w-5" />
        <Switch checked={isDarkTheme} onClick={toogleTheme} />
        <MoonStarIcon className="h-5 w-5" />
      </div>
    )

  return (
    <Button
      size={'icon'}
      variant={'ghost'}
      onClick={toogleTheme}
      className="absolute hidden sm:static sm:block"
    >
      {isDarkTheme ? (
        <MoonStarIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </Button>
  )
}
