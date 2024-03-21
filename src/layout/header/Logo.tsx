import logo from '@/assets/logo.webp'

export const Logo = () => (
  <div className="flex items-center gap-4">
    <img src={logo.src} alt="Antrol Generate" className="w-10 rounded-md" />
    <h1>Antrol Generate</h1>
  </div>
)
