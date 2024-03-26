import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from '../page'

export const PromptStep = () => {
  const { register } = useFormContext<z.infer<typeof formSchema>>()
  return (
    <FormItem>
      <FormLabel>1. Descreva seu ícone:</FormLabel>
      <FormControl>
        <Input placeholder="bear with beer" {...register('prompt')} />
      </FormControl>
      <FormDescription>
        <ul>
          <li>Simple prompts often work best</li>
          <li>Use variants once you find a starting icon you like</li>
          <li>Experiment with adding words, such as happy or vibrant</li>
          <li>melhorar isso aqui depois</li>
        </ul>
      </FormDescription>
      <FormMessage />
    </FormItem>
  )
}
