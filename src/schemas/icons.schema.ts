import { StaticImageData } from 'next/image'

export type StyleSchema =
  | 'minimalist'
  | 'surrealist'
  | 'realistic'
  | 'art deco'
  | 'steampunk'
  | 'biomorphic'
  | 'polygon'
  | 'gothic'
  | 'futurism'
  | 'pop art'
  | 'digital glitch'
  | 'vaporwave'
  | 'neon noir'
  | 'neon'
  | 'pixelated'
  | 'flat'
  | 'ilustrated'
  | 'hand-drawn'
  | 'watercolor'
  | 'isometric'
  | 'cartoonish'
  | '3d'
  | 'line art'
  | 'doodle'
  | 'grunge'
  | 'sticker'
  | 'oirigami'
  | 'woodblock print'
  | 'cute'

export type ShapeSchema =
  | 'any shape'
  | 'circle'
  | 'square'
  | 'triangle'
  | 'hexagon'
  | 'octagon'

export type ModelSchema = 'dall-e-3'

export interface ImageStyle {
  style: StyleSchema
  image: StaticImageData
  name: string
  model: ModelSchema
}
