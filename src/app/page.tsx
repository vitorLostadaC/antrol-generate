'use client'
import { createIcon } from '@/actions/createIcon'
import { getGenerations } from '@/actions/getGenerations'
import { saveGeneration } from '@/actions/saveGeneration'
import { uploadFile } from '@/actions/uploadFile'
import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import { ChangeEvent, ChangeEventHandler } from 'react'

export default function Home() {
  const teste = useSession()
  console.log(teste)
  const handleClick = async () => {
    // const result = createIcon({
    //   colorName: 'light brown',
    //   model: 'dall-e-3',
    //   prompt: 'bear with beer',
    //   shape: 'circle',
    //   styles: ['minimalist']
    // })

    // const result = saveGeneration({
    //   colorName: 'red',
    //   generationsNumber: 1,
    //   imagesURL: ['http:test'],
    //   model: 'dall-e-3',
    //   prompt: 'teste',
    //   shape: 'circle',
    //   styles: ['3d']
    // })

    const result = getGenerations()

    console.log(await result)
  }

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (!files?.[0]) return
    const form = new FormData()
    form.append('file', files[0])

    uploadFile(form)
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <input type="file" name="" id="" onChange={(e) => handleChange(e)} />
      <Button onClick={() => signIn('google')}>Login</Button>
      <Button onClick={handleClick}>generate</Button>
    </main>
  )
}
