import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { SendIcon, Settings2Icon, StarIcon } from 'lucide-react'
import inovation from '@/assets/landingPage/Innovation.svg'
import { getScopedI18n } from '@/locales/server'

interface ServiceProps {
  title: string
  description: string
  icon: JSX.Element
}

export const Services = async () => {
  const t = await getScopedI18n('pages.landing-pages.services')

  const serviceList: ServiceProps[] = [
    {
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      icon: <StarIcon />
    },
    {
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      icon: <SendIcon />
    },
    {
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      icon: <Settings2Icon />
    }
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="grid place-items-center gap-8 lg:grid-cols-[1fr,1fr]">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              {t('title.pt1')}{' '}
            </span>
            {t('title.pt2')}
          </h2>

          <p className="mb-8 mt-4 text-xl text-muted-foreground ">
            {t('description')}
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                  <div className="mt-1 rounded-2xl p-1 text-primary-foreground/80">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={inovation.src}
          className="hidden w-[300px] select-none object-contain md:block md:w-[500px] lg:w-[600px]"
          alt="About services"
        />
      </div>
    </section>
  )
}
