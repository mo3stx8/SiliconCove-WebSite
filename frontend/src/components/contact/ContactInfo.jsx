import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import GlowCard from '../common/GlowCard'

const infoIcons = { address: MapPin, email: Mail, phone: Phone, hours: Clock }
const infoKeys = ['address', 'email', 'phone', 'hours']

export default function ContactInfo() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-2xl font-bold text-white mb-6">{t.contactPage.info.title}</h3>
      {infoKeys.map((key) => {
        const Icon = infoIcons[key]
        return (
          <GlowCard key={key} hover={false} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-cove-500/10 flex items-center justify-center shrink-0">
              <Icon size={20} className="text-cove-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm capitalize mb-0.5">{key}</p>
              <p className="text-white font-medium">{t.contactPage.info[key]}</p>
            </div>
          </GlowCard>
        )
      })}
    </div>
  )
}
