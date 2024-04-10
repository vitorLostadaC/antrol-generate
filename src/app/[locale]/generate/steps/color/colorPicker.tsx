import { TabsContent } from '@radix-ui/react-tabs'
import { ColorSteps } from './data/colors'
import { HexColorPicker } from 'react-colorful'
import { ColorGenericPropsShema } from './colorStep'

export const ColorPicker = ({
  currentColor,
  setValue
}: ColorGenericPropsShema) => {
  return (
    <TabsContent value={ColorSteps.Picker}>
      <HexColorPicker
        className="mx-auto"
        color={currentColor}
        onChange={setValue}
      />
    </TabsContent>
  )
}
