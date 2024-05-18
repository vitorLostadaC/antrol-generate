'use client'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { FormSchema, MultiFomsSchema } from '../../page'
import { useScopedI18n } from '@/locales/client'

export const promptValidation: MultiFomsSchema['validation'] = ({
  values,
  setErrors,
  t
}): boolean => {
  if (values.prompt.trim().length !== 0) return true
  setErrors('prompt', {
    message: t('pages.generate.steps.prompt.errors.min-length')
  })
  return false
}

export const PromptStep = () => {
  const { control } = useFormContext<FormSchema>()
  const t = useScopedI18n('pages.generate.steps.prompt')

  return (
    <FormField
      control={control}
      name="prompt"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('title')}</FormLabel>
          <FormControl>
            <Input placeholder={t('placeholder')} {...field} />
          </FormControl>

          <FormMessage />

          <FormDescription className="space-y-1">
            <li>{t('description.simple-prompt')}</li>
            <li>{t('description.industrial-specification')}</li>
            <li>{t('description.materials')}</li>
          </FormDescription>
        </FormItem>
      )}
    />
  )
}
