import tailwindConfig from '../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const {
  theme: { screens }
} = resolveConfig(tailwindConfig)

type Key = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export function getCurrentBreakpoints(): Key {
  const currentScreen = Object.keys(screens).find((key) => {
    window.innerWidth > Number(screens[key as Key].replace('px', ''))
  })

  if (!currentScreen) return 'sm'
  return currentScreen as Key
}
