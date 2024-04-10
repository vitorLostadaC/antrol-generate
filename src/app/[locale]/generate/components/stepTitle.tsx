import { Label } from '@radix-ui/react-dropdown-menu'

interface TitlePropsSchema {
  title: string
  description: string
}

export const StepTitle = ({ title, description }: TitlePropsSchema) => {
  return (
    <div className="flex flex-col gap-1">
      <Label>{title}</Label>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  )
}
