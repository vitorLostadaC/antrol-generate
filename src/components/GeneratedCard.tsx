import { cn } from '@/lib/utils'
import { Generation } from '@prisma/client'
import { motion } from 'framer-motion'
import image from 'next/image'

interface GeneratedCardPropsSchema {
  generation: Generation
}

export const GeneratedCard = ({ generation }: GeneratedCardPropsSchema) => {
  return (
    <div className="h-full">
      <motion.div
        className="aspect-square rounded-md bg-contain"
        whileHover={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.9, opacity: 0.5 }}
        style={{ backgroundImage: `url(${generation.imagesURL})` }}
      ></motion.div>
    </div>
  )
}
