'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Button from '@/components/common/Button'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cove-600/20 via-surface-800 to-blue-600/20" />
          <div className="absolute inset-0 hero-grid opacity-50" />
          <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center border border-cove-500/20 rounded-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-8">
              {t.cta.subtitle}
            </p>
            <Button as={Link} href="/contact" size="lg">
              {t.cta.button}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
