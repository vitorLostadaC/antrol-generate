import { cn } from '@/lib/utils'
import { TabsContent } from '@radix-ui/react-tabs'
import { ColorSteps } from './data/colors'
import { colorsSchema } from '@/schemas/icons.schema'
import { ColorGenericPropsShema } from './colorStep'
import { motion } from 'framer-motion'

export const PredefinedColors = ({
  currentColor,
  setValue,
  selectorName
}: ColorGenericPropsShema) => {
  return (
    <TabsContent value={ColorSteps.Predefined}>
      <div className="grid grid-cols-4 gap-4 rounded-lg bg-muted p-2">
        {Object.values(colorsSchema.enum).map((color) => (
          <div key={color}>
            <input
              type="radio"
              id={color + selectorName}
              name="color"
              className="sr-only"
              onClick={() => {
                setValue(color === currentColor ? '' : color)
              }}
            />
            <motion.label
              htmlFor={color + selectorName}
              style={{ backgroundColor: color }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={currentColor === color ? 'active' : ''}
              variants={{
                active: { scale: 1.1, opacity: 1 }
              }}
              className={cn(
                'block aspect-square cursor-pointer rounded-md opacity-50 hover:opacity-100',
                {
                  'scale-110 opacity-100': currentColor === color
                }
              )}
            />
          </div>
        ))}
      </div>
    </TabsContent>
  )
}
