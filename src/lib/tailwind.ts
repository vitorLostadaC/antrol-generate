'use client'

import tailwindConfig from '../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const {
  theme: { screens }
} = resolveConfig(tailwindConfig)

export type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export function getCurrentBreakpoints(): BreakpointKey {
  const sorted = Object.entries(screens).sort(
    (x, y) => parseInt(y[1]) - parseInt(x[1])
  )

  const currentScreen = sorted.find(([screen, value]) => {
    return window.innerWidth > parseInt(value)
  })

  if (!currentScreen) return 'sm'
  return currentScreen[1] as BreakpointKey
}
