import icon1 from '@/assets/landingPage/icons/icon1.webp'
import icon2 from '@/assets/landingPage/icons/icon2.webp'
import icon3 from '@/assets/landingPage/icons/icon3.webp'
import icon4 from '@/assets/landingPage/icons/icon4.webp'
import icon5 from '@/assets/landingPage/icons/icon5.webp'
import icon6 from '@/assets/landingPage/icons/icon6.webp'
import icon7 from '@/assets/landingPage/icons/icon7.webp'
import icon8 from '@/assets/landingPage/icons/icon8.webp'
import icon9 from '@/assets/landingPage/icons/icon9.webp'
import icon10 from '@/assets/landingPage/icons/icon10.webp'
import icon11 from '@/assets/landingPage/icons/icon11.webp'
import icon12 from '@/assets/landingPage/icons/icon12.webp'
import icon13 from '@/assets/landingPage/icons/icon13.webp'
import icon14 from '@/assets/landingPage/icons/icon14.webp'
import icon15 from '@/assets/landingPage/icons/icon15.webp'
import icon16 from '@/assets/landingPage/icons/icon16.webp'
import icon17 from '@/assets/landingPage/icons/icon17.webp'
import icon18 from '@/assets/landingPage/icons/icon18.webp'
import icon19 from '@/assets/landingPage/icons/icon19.webp'
import icon20 from '@/assets/landingPage/icons/icon20.webp'

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
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon14,
    icon15,
    icon16,
    icon17,
    icon18,
    icon19,
    icon20
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
