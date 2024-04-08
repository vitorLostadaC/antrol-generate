import { cn } from '@/lib/utils'
import { IShapes, IStyles } from '@/schemas/icons.schema'
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
import { StaticImageData } from 'next/image'
import { useScopedI18n } from '@/locales/client'
import { motion } from 'framer-motion'
import { Tooltip } from '@/components/ui/tooltip'
import { SimpleTooltip } from '@/components/ui/simpletootip'

interface PredefinedShapesPropsShema {
  stylesSelecteds: IStyles[]
  setValue: (shape: IStyles[]) => void
}

interface PredefinedStyleSchema {
  image: StaticImageData
  style: IStyles
  name: string
  description: string
}

export const PredefinedStyles = ({
  stylesSelecteds,
  setValue
}: PredefinedShapesPropsShema) => {
  const t = useScopedI18n('pages.generate.steps.style.styles')
  const predefinedStyles: PredefinedStyleSchema[] = [
    {
      image: minimalist,
      style: 'minimalist',
      name: t('minimalist.name'),
      description: t('minimalist.description')
    },
    {
      image: surrealist,
      style: 'surrealist',
      name: t('surrealist.name'),
      description: t('surrealist.description')
    },
    {
      image: realistic,
      style: 'realistic',
      name: t('realistic.name'),
      description: t('realistic.description')
    },
    {
      image: pixelated,
      style: 'pixelated',
      name: t('pixelated.name'),
      description: t('pixelated.description')
    },
    {
      image: artDeco,
      style: 'art deco',
      name: t('art-deco.name'),
      description: t('art-deco.description')
    },
    {
      image: cartoonish,
      style: 'cartoonish',
      name: t('cartoonish.name'),
      description: t('cartoonish.description')
    },
    {
      image: woodblockPrint,
      style: 'woodblock print',
      name: t('woodblock.name'),
      description: t('woodblock.description')
    },
    {
      image: ilustrated,
      style: 'ilustrated',
      name: t('ilustrated.name'),
      description: t('ilustrated.description')
    },
    {
      image: neon,
      style: 'neon',
      name: t('neon.name'),
      description: t('neon.description')
    },

    {
      image: cute,
      style: 'cute',
      name: t('cute.name'),
      description: t('cute.description')
    },
    {
      image: popArt,
      style: 'pop art',
      name: t('pop-art.name'),
      description: t('pop-art.description')
    },

    {
      image: handDrawn,
      style: 'hand-drawn',
      name: t('hand-drawn.name'),
      description: t('hand-drawn.description')
    },
    {
      image: watercolor,
      style: 'watercolor',
      name: t('watercolor.name'),
      description: t('watercolor.description')
    },
    {
      image: isometric,
      style: 'isometric',
      name: t('isometric.name'),
      description: t('isometric.description')
    },
    {
      image: sticker,
      style: 'sticker',
      name: t('sticker.name'),
      description: t('sticker.description')
    },
    {
      image: lineArt,
      style: 'line art',
      name: t('line-art.name'),
      description: t('line-art.description')
    },

    {
      image: origami,
      style: 'origami',
      name: t('origami.name'),
      description: t('origami.description')
    },

    // {
    //   image: futurism,
    //   style: 'futuris',
    //   name: t('futurism.name'),
    //   description: t('futurism.description')
    // },

    {
      image: gothic,
      style: 'gothic',
      name: t('gothic.name'),
      description: t('gothic.description')
    },

    {
      image: digitalGlitch,
      style: 'digital glitch',
      name: t('digital-glitch.name'),
      description: t('digital-glitch.description')
    },
    // {
    //   image: vaporwave,
    //   style: 'vaporwavex',
    //   name: t('vaporwave.name'),
    //   description: t('vaporwave.description')
    // },
    {
      image: neonNoir,
      style: 'neon noir',
      name: t('neon-noir.name'),
      description: t('neon-noir.description')
    },

    {
      image: _3d,
      style: '3d',
      name: t('3d.name'),
      description: t('3d.description')
    },
    {
      image: polygon,
      style: 'polygon',
      name: t('polygon.name'),
      description: t('polygon.description')
    },

    {
      image: biomorphic,
      style: 'biomorphic',
      name: t('biomorphic.name'),
      description: t('biomorphic.description')
    },
    {
      image: flat,
      style: 'flat',
      name: t('flat.name'),
      description: t('flat.description')
    },

    {
      image: steampunk,
      style: 'steampunk',
      name: t('steampunk.name'),
      description: t('steampunk.description')
    },

    {
      image: doodle,
      style: 'doodle',
      name: t('doodle.name'),
      description: t('doodle.description')
    },

    {
      image: grunge,
      style: 'grunge',
      name: t('grunge.name'),
      description: t('grunge.description')
    }
  ]

  const handleChange = (style: IStyles) => {
    if (stylesSelecteds.includes(style)) {
      setValue(stylesSelecteds.filter((s) => s !== style))
    } else {
      setValue([...stylesSelecteds, style])
    }
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {predefinedStyles.map(({ style, image, name, description }) => (
        <div key={style}>
          <input
            type="checkbox"
            id={style}
            name="shape"
            className="sr-only"
            onChange={() => handleChange(style)}
          />
          <SimpleTooltip content={description}>
            <motion.div
              className="space-y-4 text-center"
              whileHover={{ scale: 1, opacity: 1 }}
              animate={stylesSelecteds.includes(style) ? 'active' : ''}
              initial={{ scale: 0.9, opacity: 0.5 }}
              variants={{
                active: { scale: 1, opacity: 1 }
              }}
            >
              <label
                htmlFor={style}
                style={{ backgroundImage: `url(${image.src})` }}
                className={cn(
                  'block aspect-square cursor-pointer rounded-md bg-contain '
                )}
              />

              <p className="text-foreground">{name}</p>
            </motion.div>
          </SimpleTooltip>
        </div>
      ))}
    </div>
  )
}
