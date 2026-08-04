'use client'

import Hero from '@/components/home/Hero'
import AboutPreview from '@/components/home/AboutPreview'
import ServicesPreview from '@/components/home/ServicesPreview'
import TechnologyStack from '@/components/home/TechnologyStack'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Statistics from '@/components/home/Statistics'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <TechnologyStack />
      <Statistics />
      <WhyChooseUs />
      <CTA />
    </>
  )
}
