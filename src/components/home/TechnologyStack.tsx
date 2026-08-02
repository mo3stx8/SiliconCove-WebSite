'use client'

import { useLanguage } from '@/context/LanguageContext'
import { techStackItems } from '@/i18n/translations'
import SectionTitle from '@/components/common/SectionTitle'
import GlowCard from '@/components/common/GlowCard'

export default function TechnologyStack() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          label={t.techStack.label}
          title={t.techStack.title}
          subtitle={t.techStack.subtitle}
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {techStackItems.map((tech, i) => (
            <GlowCard
              key={tech.name}
              className="text-center py-6"
              data-aos="zoom-in"
              data-aos-delay={i * 50}
            >
              <div className="w-12 h-12 rounded-xl bg-cove-500/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-cove-400 font-bold text-lg">{tech.name.charAt(0)}</span>
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base">{tech.name}</h3>
              <span className="text-slate-500 text-xs capitalize">{tech.category}</span>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
