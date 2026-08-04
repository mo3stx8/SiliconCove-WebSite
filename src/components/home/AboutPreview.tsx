'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import SectionTitle from '@/components/common/SectionTitle'
import GlowCard from '@/components/common/GlowCard'
import Button from '@/components/common/Button'
import logo from '../../assets/logo.png'

export default function AboutPreview() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-up">
            <SectionTitle
              label={t.aboutPreview.label}
              title={t.aboutPreview.title}
              centered={false}
            />
            <p className="text-slate-400 leading-relaxed mt-6 mb-8">{t.aboutPreview.description}</p>
            <ul className="space-y-3 mb-8">
              {t.aboutPreview.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle size={20} className="text-cove-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button as={Link} href="/about" variant="secondary">
              {t.aboutPreview.cta}
              <Arrow size={18} />
            </Button>
          </div>

          <GlowCard data-aos="fade-up" data-aos-delay="200" className="aspect-square lg:aspect-auto lg:min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <Image
                src={logo}
                alt="SiliconCove"
                width={224}
                height={266}
                className="h-24 w-auto mx-auto mb-6 animate-float drop-shadow-2xl drop-shadow-cove-500/30"
              />
              <h3 className="text-2xl font-bold text-white mb-2">SiliconCove</h3>
              <p className="text-cove-400 text-sm">Digital Solutions Partner</p>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}
