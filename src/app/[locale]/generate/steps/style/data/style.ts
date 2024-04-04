import { IStyles } from '@/schemas/icons.schema'
import { StaticImageData } from 'next/image'
import _3d from '@/assets/imageStyles/3d.webp'
import artDeco from '@/assets/imageStyles/artDeco.webp'
import biomorphic from '@/assets/imageStyles/biomorphic.webp'
import cartoonish from '@/assets/imageStyles/cartoonish.webp'
import cute from '@/assets/imageStyles/cute.webp'
import digitalGlitch from '@/assets/imageStyles/digitalGlitch.webp'
import doodle from '@/assets/imageStyles/doodle.webp'
import flat from '@/assets/imageStyles/flat.webp'
import futurism from '@/assets/imageStyles/futurism.webp'
import gothic from '@/assets/imageStyles/gothic.webp'
import grunge from '@/assets/imageStyles/grunge.webp'
import handDrawn from '@/assets/imageStyles/handDrawn.webp'
import ilustrated from '@/assets/imageStyles/ilustrated.webp'
import isometric from '@/assets/imageStyles/isometric.webp'
import lineArt from '@/assets/imageStyles/lineArt.webp'
import minimalist from '@/assets/imageStyles/minimalist.webp'
import neonNoir from '@/assets/imageStyles/neonNoir.webp'
import neon from '@/assets/imageStyles/neon.webp'
import origami from '@/assets/imageStyles/origami.webp'
import pixelated from '@/assets/imageStyles/pixelated.webp'
import polygon from '@/assets/imageStyles/polygon.webp'
import popArt from '@/assets/imageStyles/popArt.webp'
import realistic from '@/assets/imageStyles/realistic.webp'
import steampunk from '@/assets/imageStyles/steampunk.webp'
import sticker from '@/assets/imageStyles/sticker.webp'
import surrealist from '@/assets/imageStyles/surrealist.webp'
import vaporwave from '@/assets/imageStyles/vaporwave.webp'
import watercolor from '@/assets/imageStyles/watercolor.webp'
import woodblockPrint from '@/assets/imageStyles/woodblockPrint.webp'

interface PredefinedStyleSchema {
  image: StaticImageData
  style: IStyles
}

export const predefinedStyles: PredefinedStyleSchema[] = [
  {
    image: minimalist,
    style: 'minimalist'
  },
  {
    image: surrealist,
    style: 'surrealist'
  },
  {
    image: realistic,
    style: 'realistic'
  },
  {
    image: artDeco,
    style: 'art deco'
  },
  {
    image: steampunk,
    style: 'steampunk'
  },
  {
    image: biomorphic,
    style: 'biomorphic'
  },
  {
    image: polygon,
    style: 'polygon'
  },
  {
    image: gothic,
    style: 'gothic'
  },
  {
    image: futurism,
    style: 'futurism'
  },
  {
    image: popArt,
    style: 'pop art'
  },

  {
    image: digitalGlitch,
    style: 'digital glitch'
  },
  {
    image: vaporwave,
    style: 'vaporwave'
  },
  {
    image: neonNoir,
    style: 'neon noir'
  },
  {
    image: neon,
    style: 'neon'
  },
  {
    image: pixelated,
    style: 'pixelated'
  },
  {
    image: flat,
    style: 'flat'
  },
  {
    image: ilustrated,
    style: 'ilustrated'
  },
  {
    image: handDrawn,
    style: 'hand-drawn'
  },
  {
    image: watercolor,
    style: 'watercolor'
  },
  {
    image: isometric,
    style: 'isometric'
  },
  {
    image: cartoonish,
    style: 'cartoonish'
  },
  {
    image: _3d,
    style: '3d'
  },
  {
    image: lineArt,
    style: 'line art'
  },

  {
    image: doodle,
    style: 'doodle'
  },

  {
    image: grunge,
    style: 'grunge'
  },

  {
    image: sticker,
    style: 'sticker'
  },

  {
    image: origami,
    style: 'origami'
  },
  {
    image: woodblockPrint,
    style: 'woodblock print'
  },
  {
    image: cute,
    style: 'cute'
  }
]
