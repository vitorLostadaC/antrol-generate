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
  'pop art',
  'digital glitch',
  'neon noir',
  'neon',
  'pixelated',
  'flat',
  'illustrated',
  'hand-drawn',
  'watercolor',
  'isometric',
  'cartoonish',
  '3d',
  'line art',
  'doodle',
  'grunge',
  'sticker',
  'origami',
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
  'star'
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

export const colorsSchema = z.enum([
  'black',
  'brown',
  'maroon',
  'red',
  'coral',
  'salmon',
  'orange',
  'gold',
  'yellow',
  'lime',
  'green',
  'olive',
  'teal',
  'cyan',
  'blue',
  'navy',
  'indigo',
  'violet',
  'purple',
  'magenta',
  'pink',
  'gray',
  'white',
  'turquoise'
])
export type IColors = z.infer<typeof colorsSchema>
