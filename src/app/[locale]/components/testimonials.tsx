import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import person1 from '@/assets/landingPage/persons/person1.webp'
import person2 from '@/assets/landingPage/persons/person2.webp'
import person3 from '@/assets/landingPage/persons/person3.webp'
import person4 from '@/assets/landingPage/persons/person4.webp'
import person5 from '@/assets/landingPage/persons/person5.webp'
import person6 from '@/assets/landingPage/persons/person6.webp'
import { getScopedI18n } from '@/locales/server'

interface TestimonialProps {
  image: string
  name: string
  userName: string
  comment: string
}

export const Testimonials = async () => {
  const t = await getScopedI18n('pages.landing-pages.testimonials')

  const testimonials: TestimonialProps[] = [
    {
      image: person1.src,
      name: t('testimonials.testimonial1.name'),
      userName: '@JakeM',
      comment: t('testimonials.testimonial1.description')
    },
    {
      image: person2.src,
      name: t('testimonials.testimonial2.name'),
      userName: '@SamBee',
      comment: t('testimonials.testimonial2.description')
    },

    {
      image: person3.src,
      name: t('testimonials.testimonial3.name'),
      userName: '@MiaW',
      comment: t('testimonials.testimonial3.description')
    },
    {
      image: person4.src,
      name: t('testimonials.testimonial4.name'),
      userName: '@EthanH',
      comment: t('testimonials.testimonial4.description')
    },
    {
      image: person5.src,
      name: t('testimonials.testimonial5.name'),
      userName: '@NoraK',
      comment: t('testimonials.testimonial5.description')
    },
    {
      image: person6.src,
      name: t('testimonials.testimonial6.name'),
      userName: '@LiamQ',
      comment: t('testimonials.testimonial6.description')
    }
  ]

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          {' '}
          People Love{' '}
        </span>
        This Landing Page
      </h2>

      <p className="pb-8 pt-4 text-xl text-muted-foreground">
        {t('description')}
      </p>

      <div className="mx-auto grid columns-2 space-y-4 sm:block  md:grid-cols-2 lg:columns-3 lg:grid-cols-4 lg:gap-6 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md overflow-hidden md:break-inside-avoid"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    alt={name}
                    src={image}
                    className="object-cover"
                  />
                  <AvatarFallback>{name.split('')[0]}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  )
}
