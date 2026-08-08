'use client'

import { useLanguage } from '@/context/LanguageContext'
import { projectKeys } from '@/i18n/translations'
import ProductCard from '@/components/products/ProductCard'
import CTA from '@/components/home/CTA'

export default function ProjectsPage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="pt-32 pb-16 hero-grid">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            data-aos="fade-up"
          >
            {t.projectsPage.heroTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t.projectsPage.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {projectKeys.map((key, i) => (
              <ProductCard
                key={key}
                title={t.projectsPage.projects[key].title}
                subtitle={t.projectsPage.projects[key].subtitle}
                description={t.projectsPage.projects[key].description}
                features={t.projectsPage.projects[key].features}
                tech={t.projectsPage.projects[key].tech}
                status={t.projectsPage.projects[key].status}
                featuresLabel={t.projectsPage.features}
                techLabel={t.projectsPage.techStack}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
