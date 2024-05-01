import icon1 from '@/assets/landingPage/staticIcons/icon1.webp'
import icon2 from '@/assets/landingPage/staticIcons/icon2.webp'
import icon3 from '@/assets/landingPage/staticIcons/icon3.webp'

export const HeroCards = () => {
  const icons = [
    icon1,
    icon2,
    icon3,
    icon1,
    icon2,
    icon3,
    icon1,
    icon2,
    icon3,
    icon1,
    icon2,
    icon3,
    icon1,
    icon2,
    icon3,
    icon1,
    icon2,
    icon3,
    icon1,
    icon2
  ]

  return (
    <div className="grid grid-cols-5 gap-4">
      {icons.map((icon) => (
        <img
          key={icon.src}
          src={icon.src}
          alt="icon"
          className="w-20 select-none rounded-md"
        />
      ))}
    </div>
  )
}
