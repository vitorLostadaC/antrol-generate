import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '../page'
import { Label } from '@/components/ui/label'

export const ColorStep = () => {
  const { register } = useFormContext<z.infer<typeof formSchema>>()
  return <Label>2. cor:</Label>
}
