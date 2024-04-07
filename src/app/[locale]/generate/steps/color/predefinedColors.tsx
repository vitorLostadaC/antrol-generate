import { cn } from '@/lib/utils'
import { TabsContent } from '@radix-ui/react-tabs'
import { ColorSteps } from './data/colors'
import { colorsSchema } from '@/schemas/icons.schema'
import { ColorGenericPropsShema } from './colorStep'

export const PredefinedColors = ({
  currentColor,
  setValue
}: ColorGenericPropsShema) => {
  return (
    <TabsContent value={ColorSteps.Predefined}>
      <div className="grid grid-cols-8 grid-rows-3 gap-4">
        {Object.values(colorsSchema.enum).map((color) => (
          <div key={color}>
            <input
              type="radio"
              id={color}
              name="color"
              className="sr-only"
              onClick={() => {
                setValue(color === currentColor ? '' : color)
              }}
            />
            <label
              htmlFor={color}
              className={cn(
                'block aspect-square cursor-pointer p-1 opacity-50 hover:opacity-100',
                {
                  'p-0 opacity-100': currentColor === color
                }
              )}
            >
              <div
                className={cn('h-full w-full rounded-md')}
                style={{ backgroundColor: color }}
              />
            </label>
          </div>
        ))}
      </div>
    </TabsContent>
  )
}
