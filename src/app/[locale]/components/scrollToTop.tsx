'use client'

import { useState, useEffect } from 'react'
import { ArrowUpToLine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  return (
    <>
      {showTopBtn && (
        <Button
          className="fixed bottom-4 right-4 opacity-90 shadow-md"
          size="icon"
          asChild
        >
          <Link href={'#'}>
            <ArrowUpToLine className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </>
  )
}
