import { IShapes } from '@/schemas/icons.schema'
import { StaticImageData } from 'next/image'
import star from '@/assets/imagesShape/star.webp'
import circle from '@/assets/imagesShape/circle.webp'
import square from '@/assets/imagesShape/square.webp'
import triangle from '@/assets/imagesShape/triangle.webp'
import hexagon from '@/assets/imagesShape/hexagon.webp'
import anyshape from '@/assets/imagesShape/anyShape.webp'

interface PredefinedShapeSchema {
  shape: IShapes
  image: StaticImageData
}

export const predefinedShapes: PredefinedShapeSchema[] = [
  {
    shape: 'any shape',
    image: anyshape
  },
  {
    shape: 'square',
    image: square
  },
  {
    shape: 'circle',
    image: circle
  },
  {
    shape: 'hexagon',
    image: hexagon
  },
  {
    shape: 'triangle',
    image: triangle
  },
  {
    shape: 'star',
    image: star
  }
]
