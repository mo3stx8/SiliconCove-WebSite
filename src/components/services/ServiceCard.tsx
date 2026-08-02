'use client'

import GlowCard from '@/components/common/GlowCard'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <GlowCard data-aos="fade-up" data-aos-delay={delay}>
      <div className="w-12 h-12 rounded-xl bg-cove-500/10 flex items-center justify-center mb-4 group-hover:bg-cove-500/20 transition-colors">
        <Icon size={24} className="text-cove-400" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </GlowCard>
  )
}
