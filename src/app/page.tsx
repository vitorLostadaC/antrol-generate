'use client'
import { Button } from '@/components/ui/button'

export default function Home() {
  const handleClickGenerate = () => {}

  return (
    <main className="flex h-screen items-center justify-center">
      <Button onClick={handleClickGenerate}>generate</Button>
    </main>
  )
}
