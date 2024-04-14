import { DownloadIcon, LucideIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './dropdown-menu'

interface SimpleDropdownPropsSchema {
  children: React.ReactNode
  items: SimpleDropdownMenuItemSchema[]
}

interface SimpleDropdownMenuItemSchema {
  name: string
  icon: LucideIcon
  onClick: () => void
}

export const SimpleDropdown = ({
  children,
  items
}: SimpleDropdownPropsSchema) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.name}
            onClick={item.onClick}
            className="gap-2"
          >
            <item.icon size={15} />
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
