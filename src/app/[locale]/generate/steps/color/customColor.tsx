import { TabsContent } from '@radix-ui/react-tabs'
import { ColorSteps } from './data/colors'
import { Input } from '@/components/ui/input'
import { ColorGenericPropsShema } from './colorStep'
import { ChangeEvent, use, useState } from 'react'

const COLOR_LENGTH = 6
const COLOR_WITH_HASH_LENGTH = 7

export const CustomColor = ({
  setValue,
  currentColor
}: ColorGenericPropsShema) => {
  const [draftColor, setDraftColor] = useState(currentColor)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value
    const hexPattern = /^[0-9A-Fa-f]+$/

    if (inputValue.length !== COLOR_WITH_HASH_LENGTH)
      inputValue = inputValue.replace('#', '')

    if (inputValue === '' || hexPattern.test(inputValue)) {
      if (inputValue.length === COLOR_LENGTH) {
        inputValue = '#' + inputValue
        setValue(inputValue.toUpperCase())
      } else {
        setValue('')
      }
      setDraftColor(inputValue.toUpperCase())
    }
  }

  return (
    <TabsContent value={ColorSteps.Hex}>
      <Input
        value={draftColor}
        onChange={handleChange}
        maxLength={COLOR_LENGTH}
        placeholder="FFFF00"
      />
    </TabsContent>
  )
}
