import icon1 from '@/assets/landingPage/icons/icon1.webp'
import icon2 from '@/assets/landingPage/icons/icon2.webp'
import icon3 from '@/assets/landingPage/icons/icon3.webp'
import icon4 from '@/assets/landingPage/icons/icon4.png'
import icon5 from '@/assets/landingPage/icons/icon5.png'
import icon6 from '@/assets/landingPage/icons/icon6.png'
import icon7 from '@/assets/landingPage/icons/icon7.png'
import icon8 from '@/assets/landingPage/icons/icon8.png'

export const HeroCards = () => {
  const icons = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
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
