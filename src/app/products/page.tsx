'use client'

import { useLanguage } from '@/context/LanguageContext'
import { productKeys } from '@/i18n/translations'
import ProductCard from '@/components/products/ProductCard'
import CTA from '@/components/home/CTA'

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="pt-32 pb-16 hero-grid">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            data-aos="fade-up"
          >
            {t.productsPage.heroTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t.productsPage.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-10">
          {productKeys.map((key, i) => (
            <ProductCard
              key={key}
              title={t.productsPage.products[key].title}
              subtitle={t.productsPage.products[key].subtitle}
              description={t.productsPage.products[key].description}
              features={t.productsPage.products[key].features}
              tech={t.productsPage.products[key].tech}
              status={t.productsPage.products[key].status}
              link={t.productsPage.products[key].link}
              featuresLabel={t.productsPage.features}
              techLabel={t.productsPage.techStack}
              viewProjectLabel={t.productsPage.viewProject}
              delay={i * 100}
            />
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
