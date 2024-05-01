import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  TypeIcon,
  Paintbrush2Icon,
  DiamondIcon,
  SwatchBookIcon
} from 'lucide-react'

interface FeatureProps {
  icon: JSX.Element
  title: string
  description: string
}

const features: FeatureProps[] = [
  {
    icon: <TypeIcon />,
    title: '1. Prompt',
    description:
      'Enter a brief that guides the AI in creating your personalized icon.'
  },
  {
    icon: <Paintbrush2Icon />,
    title: '2. Color',
    description: 'Choose primary and secondary colors to fit your style.'
  },
  {
    icon: <DiamondIcon />,
    title: '3. Shape',
    description: 'Choose from a variety of shapes to best represent your icon.'
  },
  {
    icon: <SwatchBookIcon />,
    title: '4. Style',
    description: 'Pick a design style that best suits your project’s aesthetic.'
  }
]

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="py-24 text-center sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl ">
        How It{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          Works{' '}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4">
        Create your custom icon in four simple steps: define your concept,
        select your colors, choose your shape, and pick your style to bring your
        vision to life effortlessly.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid place-items-center gap-4">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 overflow-hidden rounded-md border">
        <video controls preload="metadata" muted>
          <source src="/tutorial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
