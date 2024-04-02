import { cn } from '@/lib/utils'
import { TabsContent } from '@radix-ui/react-tabs'
import { ColorSteps, predefinedColors } from './data/colors'
import { IColors, colorsSchema } from '@/schemas/icons.schema'

interface PredefinedColorsPropsShema {
  currentColor: IColors | string
  setValue: (color: IColors) => void
}

export const PredefinedColors = ({
  currentColor,
  setValue
}: PredefinedColorsPropsShema) => {
  return (
    <TabsContent value={ColorSteps.Predefined} className="flex flex-wrap gap-4">
      {Object.values(colorsSchema.enum).map((color) => (
        <div key={color}>
          <input
            type="radio"
            id={color}
            name="color"
            className="sr-only"
            onChange={() => setValue(color)}
          />
          <label
            htmlFor={color}
            style={{ backgroundColor: color }}
            className={cn(
              'block h-10 w-10 scale-90 cursor-pointer rounded-md opacity-50 hover:opacity-100',
              {
                'scale-110 opacity-100': currentColor === color
              }
            )}
          />
        </div>
      ))}
    </TabsContent>
  )
}
