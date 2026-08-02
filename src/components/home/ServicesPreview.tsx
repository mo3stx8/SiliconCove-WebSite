'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { serviceIcons } from '@/i18n/serviceIcons'
import { serviceKeys } from '@/i18n/translations'
import SectionTitle from '@/components/common/SectionTitle'
import ServiceCard from '@/components/services/ServiceCard'
import Button from '@/components/common/Button'

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
              icon={serviceIcons[key]}
              title={t.services[key].title}
              description={t.services[key].description}
              delay={i * 100}
            />
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button as={Link} href="/services" variant="secondary">
            {t.servicesPreview.viewAll}
          </Button>
        </div>
      </div>
    </section>
  )
}
