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

interface TestimonialProps {
  image: string
  name: string
  userName: string
  comment: string
}

const testimonials: TestimonialProps[] = [
  {
    image: person1.src,
    name: 'Jake Martell',
    userName: '@JakeM',
    comment:
      'Absolutely love the ease of use. Creating icons has never been simpler!'
  },
  {
    image: person2.src,
    name: 'Samantha Bee',
    userName: '@SamBee',
    comment:
      'Fantastic results! The color customization options are a game-changer.'
  },

  {
    image: person3.src,
    name: 'Mia Wong',
    userName: '@MiaW',
    comment:
      "I'm impressed with the premium outputs from such a straightforward tool. Highly recommend!"
  },
  {
    image: person4.src,
    name: 'Ethan Hunt',
    userName: '@EthanH',
    comment:
      'The user interface is so intuitive. Great job on making design accessible to everyone!'
  },
  {
    image: person5.src,
    name: 'Nora Klint',
    userName: '@NoraK',
    comment:
      'Top-quality icons every time. The AI features really help fine-tune the designs.'
  },
  {
    image: person6.src,
    name: 'Liam Quigley',
    userName: '@LiamQ',
    comment:
      'Quick, easy, and efficient—exactly what I needed for my project deadlines.'
  }
]

export const Testimonials = () => {
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
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
