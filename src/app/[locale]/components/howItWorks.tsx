import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getScopedI18n } from '@/locales/server'
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

export const HowItWorks = async () => {
  const t = await getScopedI18n('pages.landing-pages.how-it-works')

  const features: FeatureProps[] = [
    {
      icon: <TypeIcon />,
      title: t('steps.step1.title'),
      description: t('steps.step1.description')
    },
    {
      icon: <Paintbrush2Icon />,
      title: t('steps.step2.title'),
      description: t('steps.step2.description')
    },
    {
      icon: <DiamondIcon />,
      title: t('steps.step3.title'),
      description: t('steps.step3.description')
    },
    {
      icon: <SwatchBookIcon />,
      title: '4. Style',
      description: t('steps.step4.description')
    }
  ]

  return (
    <section id="howItWorks" className="py-24 text-center sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl ">
        {t('title.pt1')}{' '}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          {t('title.pt2')}{' '}
        </span>
        {t('title.pt3')}
      </h2>
      <p className="mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-3/4">
        {t('description')}
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
