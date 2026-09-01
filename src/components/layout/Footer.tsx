'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-800 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={logo}
                alt="SiliconCove"
                width={224}
                height={266}
                className="h-12 w-auto md:h-14"
              />
              <span className="text-xl font-bold text-white">SiliconCove</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {(['home', 'about', 'products', 'projects', 'services', 'contact'] as const).map((key) => (
                <li key={key}>
                  <Link
                    href={key === 'home' ? '/' : `/${key}`}
                    className="text-slate-400 text-sm hover:text-cove-400 transition-colors"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2">
              {[t.services.webDev.title, t.services.mobileApps.title, t.services.customSystems.title, t.services.cybersecurity.title].map(
                (service) => (
                  <li key={service}>
                    <Link href="/services" className="text-slate-400 text-sm hover:text-cove-400 transition-colors">
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-cove-400 mt-0.5 shrink-0" />
                {t.contactPage.info.address}
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-cove-400 shrink-0" />
                {t.contactPage.info.email}
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={16} className="text-cove-400 shrink-0" />
                {t.contactPage.info.phone}
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={16} className="text-cove-400 shrink-0" />
               {t.contactPage.info.phone2}
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={16} className="text-cove-400 shrink-0" />
               {t.contactPage.info.phone3}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {year} SiliconCove. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
