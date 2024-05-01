import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { SendIcon, Settings2Icon, StarIcon } from 'lucide-react'
import inovation from '@/assets/landingPage/Innovation.svg'

interface ServiceProps {
  title: string
  description: string
  icon: JSX.Element
}

const serviceList: ServiceProps[] = [
  {
    title: 'Premium Experience',
    description:
      'We focus entirely on delivering the best possible icon generation experience, combining intuitive design with top-tier performance for seamless creation.',
    icon: <StarIcon />
  },
  {
    title: 'Streamlined Process',
    description:
      'Our user-friendly platform and smart AI simplify your design process, enabling you to create complex icons quickly and easily.',
    icon: <SendIcon />
  },
  {
    title: 'Tailored Customization',
    description:
      'Customize every detail of your icon to fit your exact needs, from colors to dimensions, ensuring a perfect match for your project.',
    icon: <Settings2Icon />
  }
]

export const Services = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="grid place-items-center gap-8 lg:grid-cols-[1fr,1fr]">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              Client-Centric{' '}
            </span>
            Services
          </h2>

          <p className="mb-8 mt-4 text-xl text-muted-foreground ">
            Focused on your needs, our platform offers personalized, efficient
            icon design. Experience seamless creation, every step of the way.
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
          className="w-[300px] select-none object-contain md:w-[500px] lg:w-[600px]"
          alt="About services"
        />
      </div>
    </section>
  )
}
