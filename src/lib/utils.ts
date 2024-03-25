import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import theme from '../../tailwind.config'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
