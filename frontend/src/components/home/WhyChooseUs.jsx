import { Award, Puzzle, ShieldCheck, HeartHandshake } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import SectionTitle from '../common/SectionTitle'
import GlowCard from '../common/GlowCard'

const icons = [Award, Puzzle, ShieldCheck, HeartHandshake]

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-surface-800/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          label={t.whyChooseUs.label}
          title={t.whyChooseUs.title}
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChooseUs.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <GlowCard key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-12 rounded-xl bg-cove-500/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-cove-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </GlowCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
