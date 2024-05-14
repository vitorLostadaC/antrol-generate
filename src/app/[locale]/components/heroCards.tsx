import icon1 from '@/assets/landingPage/icons/icon1.png'
import icon2 from '@/assets/landingPage/icons/icon2.png'
import icon3 from '@/assets/landingPage/icons/icon3.png'
import icon4 from '@/assets/landingPage/icons/icon4.png'
import icon5 from '@/assets/landingPage/icons/icon5.png'
import icon6 from '@/assets/landingPage/icons/icon6.png'
import icon7 from '@/assets/landingPage/icons/icon7.png'
import icon8 from '@/assets/landingPage/icons/icon8.png'
import icon9 from '@/assets/landingPage/icons/icon9.png'
import icon10 from '@/assets/landingPage/icons/icon10.png'
import icon11 from '@/assets/landingPage/icons/icon11.png'
import icon12 from '@/assets/landingPage/icons/icon12.png'
import icon13 from '@/assets/landingPage/icons/icon13.png'
import icon14 from '@/assets/landingPage/icons/icon14.png'
import icon15 from '@/assets/landingPage/icons/icon15.png'
import icon16 from '@/assets/landingPage/icons/icon16.png'
import icon17 from '@/assets/landingPage/icons/icon17.png'
import icon18 from '@/assets/landingPage/icons/icon18.png'
import icon19 from '@/assets/landingPage/icons/icon19.png'
import icon20 from '@/assets/landingPage/icons/icon20.png'

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
