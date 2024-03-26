import { StaticImageData } from 'next/image'
import { z } from 'zod'

export const stylesSchema = z.enum([
  'minimalist',
  'surrealist',
  'realistic',
  'art deco',
  'steampunk',
  'biomorphic',
  'polygon',
  'gothic',
  'futurism',
  'pop art',
  'digital glitch',
  'vaporwave',
  'neon noir',
  'neon',
  'pixelated',
  'flat',
  'ilustrated',
  'hand-drawn',
  'watercolor',
  'isometric',
  'cartoonish',
  '3d',
  'line art',
  'doodle',
  'grunge',
  'sticker',
  'oirigami',
  'woodblock print',
  'cute'
])

export type IStyles = z.infer<typeof stylesSchema>

export const shapesSchema = z.enum([
  'any shape',
  'circle',
  'square',
  'triangle',
  'hexagon',
  'octagon'
])

export type IShapes = z.infer<typeof shapesSchema>

export const modelSchema = z.enum(['dall-e-3'])

export type IModel = z.infer<typeof modelSchema>

export interface ImageStyle {
  style: IStyles
  image: StaticImageData
  name: string
  model: IModel
}
