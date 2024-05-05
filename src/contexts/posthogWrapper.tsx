'use client'
import { env } from '@/env'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

if (typeof window !== 'undefined') {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST
  })
}
export function PostHogProviderWrapper({
  children
}: {
  children: React.ReactNode
}) {
  // const pathname = usePathname()
  // const searchParams = useSearchParams()

  // useEffect(() => {
  //   if (pathname) {
  //     let url = window.origin + pathname
  //     if (searchParams && searchParams.toString()) {
  //       url = url + `?${searchParams.toString()}`
  //     }
  //     posthog.capture('$pageview', {
  //       $current_url: url
  //     })
  //   }
  // }, [pathname, searchParams])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
