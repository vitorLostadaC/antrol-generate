import { TabsContent } from '@radix-ui/react-tabs'
import { ColorSteps } from './data/colors'
import { Input } from '@/components/ui/input'
import { IColors } from '@/schemas/icons.schema'

interface CustomColorPropsShema {
  setValue: (color: string) => void
  currentColor: IColors | string
}
// TODO add mask here to dont allow write a symbos
export const CustomColor = ({ setValue }: CustomColorPropsShema) => {
  return (
    <TabsContent value={ColorSteps.Hex} className="flex flex-wrap gap-4">
      <Input
        onChange={(e) => setValue(e.target.value)}
        maxLength={6}
        placeholder="FFFF00"
      />
    </TabsContent>
  )
}
