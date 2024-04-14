import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'

const spinnerVariants = cva('flex-col items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden'
    }
  },
  defaultVariants: {
    show: true
  }
})

const loaderVariants = cva('animate-spin', {
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-foreground'
    },
    size: {
      small: 'size-6',
      medium: 'size-8',
      large: 'size-12'
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium'
  }
})

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string
  children?: React.ReactNode
}

export function Spinner({
  size,
  show,
  children,
  color,
  className
}: SpinnerContentProps) {
  return (
    <span className={spinnerVariants({ show })}>
      <Loader2 className={cn(loaderVariants({ size, color }), className)} />
      {children}
    </span>
  )
}
