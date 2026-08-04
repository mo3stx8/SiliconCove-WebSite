'use client'

import { Eye, Gem, Target, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import SectionTitle from '@/components/common/SectionTitle'
import GlowCard from '@/components/common/GlowCard'

export default function MissionVision() {
  const { t } = useLanguage()

  const sections: { key: 'mission' | 'vision'; icon: LucideIcon }[] = [
    { key: 'mission', icon: Target },
    { key: 'vision', icon: Eye },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map(({ key, icon: Icon }, i) => {
            const data = t.aboutPage[key]
            return (
              <GlowCard key={key} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-12 rounded-xl bg-cove-500/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-cove-400" />
                </div>
                <span className="text-cove-400 text-sm font-semibold uppercase tracking-wider">
                  {data.label}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">{data.title}</h3>
                <p className="text-slate-400 leading-relaxed">{data.description}</p>
              </GlowCard>
            )
          })}
        </div>

        <SectionTitle
          label={t.aboutPage.values.label}
          title={t.aboutPage.values.title}
          className="mb-10"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.aboutPage.values.items.map((value, i) => (
            <GlowCard key={value} className="text-center py-8" data-aos="zoom-in" data-aos-delay={i * 80}>
              <Gem size={28} className="text-cove-400 mx-auto mb-3" />
              <span className="text-white font-semibold">{value}</span>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
