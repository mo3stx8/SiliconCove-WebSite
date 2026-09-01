'use client'

import { Clock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import GlowCard from '@/components/common/GlowCard'
import PhoneNumber from '@/components/common/PhoneNumber'

type InfoKey = 'address' | 'email' | 'phone' | 'phone2' | 'phone3' | 'hours'

const isPhone = (key: InfoKey) => key === 'phone' || key === 'phone2' || key === 'phone3'

const infoIcons: Record<InfoKey, LucideIcon> = {
  address: MapPin,
  email: Mail,
  phone: Phone,
  phone2: Phone,
  phone3: Phone,
  hours: Clock,
}

const infoKeys: InfoKey[] = ['address', 'email', 'phone', 'phone2', 'phone3', 'hours']

export default function ContactInfo() {
  const { t } = useLanguage()
  const { title, address, email, hours, phoneLabel } = t.contactPage.info

  const labels: Record<InfoKey, string> = {
    address,
    email,
    phone: phoneLabel,
    phone2: phoneLabel,
    phone3: phoneLabel,
    hours,
  }

  const values: Record<InfoKey, { text: string; tel?: string }> = {
    address: { text: address },
    email: { text: email },
    phone: { text: t.contactPage.info.phone, tel: t.contactPage.info.phone },
    phone2: { text: t.contactPage.info.phone2 ?? '', tel: t.contactPage.info.phone2 },
    phone3: { text: t.contactPage.info.phone3 ?? '', tel: t.contactPage.info.phone3 },
    hours: { text: hours },
  }

  return (
    <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      {infoKeys.map((key) => {
        const Icon = infoIcons[key]
        const isPhoneKey = isPhone(key)
        const { text, tel } = values[key]

        return (
          <GlowCard key={key} hover={false} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-cove-500/10 flex items-center justify-center shrink-0">
              <Icon size={20} className="text-cove-400" />
            </div>
            <div className="min-w-0">
              <p className="text-slate-400 text-sm capitalize mb-0.5">{labels[key]}</p>
              {isPhoneKey && tel ? (
                <PhoneNumber value={tel} className="text-white font-medium">
                  {text}
                </PhoneNumber>
              ) : (
                <p className="text-white font-medium break-words">{text}</p>
              )}
            </div>
          </GlowCard>
        )
      })}
    </div>
  )
}