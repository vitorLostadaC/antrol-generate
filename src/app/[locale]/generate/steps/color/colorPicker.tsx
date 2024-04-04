import { TabsContent } from '@radix-ui/react-tabs'
import { ColorSteps } from './data/colors'
import { HexColorPicker } from 'react-colorful'
import { ColorGenericPropsShema } from './colorStep'

export const ColorPicker = ({
  currentColor,
  setValue
}: ColorGenericPropsShema) => {
  return (
    <TabsContent value={ColorSteps.Picker} className="flex flex-wrap gap-4">
      <HexColorPicker color={currentColor} onChange={setValue} />
    </TabsContent>
  )
}
