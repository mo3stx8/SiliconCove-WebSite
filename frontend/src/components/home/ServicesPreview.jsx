import { Link } from 'react-router-dom'
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
import { useLanguage } from '../../context/LanguageContext'
import { serviceKeys } from '../../i18n/translations'
import SectionTitle from '../common/SectionTitle'
import ServiceCard from '../services/ServiceCard'
import Button from '../common/Button'

const iconMap = {
  Globe,
  Smartphone,
  Settings,
  Shield,
  Cloud,
  Lightbulb,
  Headphones,
  Cpu,
}

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

export default function ServicesPreview() {
  const { t } = useLanguage()
  const previewKeys = serviceKeys.slice(0, 6)

  return (
    <section className="py-20 md:py-28 bg-surface-800/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          label={t.servicesPreview.label}
          title={t.servicesPreview.title}
          subtitle={t.servicesPreview.subtitle}
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewKeys.map((key, i) => (
            <ServiceCard
              key={key}
              icon={iconNames[key]}
              title={t.services[key].title}
              description={t.services[key].description}
              delay={i * 100}
            />
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Link to="/services">
            <Button variant="secondary">{t.servicesPreview.viewAll}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
