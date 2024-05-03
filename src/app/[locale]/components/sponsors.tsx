import { Radar } from 'lucide-react'

interface SponsorProps {
  icon: JSX.Element
  name: string
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 1'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 2'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 3'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 4'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 5'
  },
  {
    icon: <Radar size={34} />,
    name: 'Sponsor 6'
  }
]

export const Sponsors = () => {
  return (
    <section id="sponsors" className="pt-24 sm:py-32">
      <h2 className="text-md mb-8 text-center font-bold text-primary lg:text-xl">
        Investors and founders
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
