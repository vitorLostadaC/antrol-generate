import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '../../page'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const ColorStep = () => {
  const { register } = useFormContext<z.infer<typeof formSchema>>()
  return (
    <div className="flex flex-col justify-center gap-4">
      <Label>2. selecione a cor principal:</Label>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Predefined</TabsTrigger>
          <TabsTrigger value="password">Picker</TabsTrigger>
          <TabsTrigger value="password">Hex</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}
