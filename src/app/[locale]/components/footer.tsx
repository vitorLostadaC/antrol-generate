import { getScopedI18n } from '@/locales/server'
import Link from 'next/link'

interface LinkSchema {
  href: string
  label: string
}

export const Footer = async () => {
  const t = await getScopedI18n('footer')
  const links: LinkSchema[] = [
    {
      href: '/refund',
      label: t('refund-policy')
    }
  ]

  return (
    <footer id="footer">
      <hr className="mx-auto w-11/12" />

      <section className="container flex flex-col items-center justify-between gap-4 py-10 text-center md:flex-row">
        <div>
          <h3>&copy; 2024 Antrol Generate. All rights reserved. </h3>
          <a
            href="mailto:antrolgenerate@gmail.com"
            className="hover:text-primary"
          >
            antrolgenerate@gmail.com
          </a>
        </div>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-primary">
              {label}
            </Link>
          ))}
        </div>
      </section>
    </footer>
  )
}
