import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface TestimonialProps {
  image: string
  name: string
  userName: string
  comment: string
}

const testimonials: TestimonialProps[] = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'Jake Martell',
    userName: '@JakeM',
    comment:
      'Absolutely love the ease of use. Creating icons has never been simpler!'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Samantha Bee',
    userName: '@SamBee',
    comment:
      'Fantastic results! The color customization options are a game-changer.'
  },

  {
    image: 'https://github.com/shadcn.png',
    name: 'Mia Wong',
    userName: '@MiaW',
    comment:
      "I'm impressed with the premium outputs from such a straightforward tool. Highly recommend!"
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Ethan Hunt',
    userName: '@EthanH',
    comment:
      'The user interface is so intuitive. Great job on making design accessible to everyone!'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Nora Klint',
    userName: '@NoraK',
    comment:
      'Top-quality icons every time. The AI features really help fine-tune the designs.'
  },
  {
    image: 'https://github.com/shadcn.png',
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
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
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
