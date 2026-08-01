import {
  Globe,
  Smartphone,
  Settings,
  Shield,
  Cloud,
  Lightbulb,
  Headphones,
  Cpu,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { serviceKeys } from '../i18n/translations'
import ServiceCard from '../components/services/ServiceCard'
import CTA from '../components/home/CTA'

const iconNames = {
  webDev: Globe,
  mobileApps: Smartphone,
  customSystems: Settings,
  cybersecurity: Shield,
  cloud: Cloud,
  consulting: Lightbulb,
  support: Headphones,
  hardware: Cpu,
}

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="pt-32 pb-16 hero-grid">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            data-aos="fade-up"
          >
            {t.servicesPage.heroTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t.servicesPage.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceKeys.map((key, i) => (
              <ServiceCard
                key={key}
                icon={iconNames[key]}
                title={t.services[key].title}
                description={t.services[key].description}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
