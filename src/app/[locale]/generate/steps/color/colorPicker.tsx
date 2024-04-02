import { TabsContent } from '@radix-ui/react-tabs'
import { ColorSteps } from './data/colors'
import { HexColorPicker } from 'react-colorful'
import { IColors } from '@/schemas/icons.schema'

interface ColorPickerPropsShema {
  currentColor: IColors | string
  setValue: (color: string) => void
}

export const ColorPicker = ({
  currentColor,
  setValue
}: ColorPickerPropsShema) => {
  return (
    <TabsContent value={ColorSteps.Picker} className="flex flex-wrap gap-4">
      <HexColorPicker color={currentColor} onChange={setValue} />
    </TabsContent>
  )
}
