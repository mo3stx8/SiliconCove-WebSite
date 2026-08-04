'use client'

import { useLanguage } from '@/context/LanguageContext'
import MissionVision from '@/components/about/MissionVision'
import Statistics from '@/components/home/Statistics'
import CTA from '@/components/home/CTA'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="pt-32 pb-16 hero-grid">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            data-aos="fade-up"
          >
            {t.aboutPage.heroTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t.aboutPage.heroSubtitle}
          </p>
        </div>
      </section>
      <MissionVision />
      <Statistics />
      <CTA />
    </>
  )
}
