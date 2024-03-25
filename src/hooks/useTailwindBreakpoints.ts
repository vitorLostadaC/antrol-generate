'use client'

import { BreakpointKey, getCurrentBreakpoints } from '@/lib/tailwind'
import { useEffect, useState } from 'react'

export const useTailwindBreakPoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<BreakpointKey>('md')

  useEffect(() => {
    const setCurrentBreakpointFunction = () => {
      const currentBreakpoint = getCurrentBreakpoints()
      setCurrentBreakpoint(currentBreakpoint)
    }

    setCurrentBreakpoint(getCurrentBreakpoints())

    window.addEventListener('resize', setCurrentBreakpointFunction)
    return () => {
      window.removeEventListener('resize', setCurrentBreakpointFunction)
    }
  }, [])

  return currentBreakpoint
}
