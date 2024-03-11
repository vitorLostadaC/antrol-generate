'use client'
import { createIcon } from '@/actions/createIcon'
import { Button } from '@/components/ui/button'

export default function Home() {
  const handleClickGenerate = async () => {
    const result = createIcon({
      colorName: 'light brown',
      model: 'dall-e-3',
      prompt: 'bear with beer',
      shape: 'circle',
      styles: ['minimalist']
    })
    console.log(await result)
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <Button onClick={handleClickGenerate}>generate</Button>
    </main>
  )
}
