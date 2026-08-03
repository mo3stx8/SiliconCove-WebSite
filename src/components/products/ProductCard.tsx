'use client'

import Link from 'next/link'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import GlowCard from '@/components/common/GlowCard'

interface ProductCardProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  tech: string[]
  status: string
  link?: string
  featuresLabel: string
  techLabel: string
  viewProjectLabel: string
  delay?: number
}

export default function ProductCard({
  title,
  subtitle,
  description,
  features,
  tech,
  status,
  link,
  featuresLabel,
  techLabel,
  viewProjectLabel,
  delay = 0,
}: ProductCardProps) {
  return (
    <GlowCard data-aos="fade-up" data-aos-delay={delay} className="flex flex-col h-full">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-white font-bold text-2xl">{title}</h3>
          <p className="text-cove-400 text-sm mt-1.5">{subtitle}</p>
        </div>
        <span className="shrink-0 px-3 py-1 rounded-full bg-cove-500/10 border border-cove-500/30 text-cove-300 text-xs font-semibold whitespace-nowrap">
          {status}
        </span>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

      <div className="mb-6">
        <h4 className="text-white font-semibold text-sm mb-3">{featuresLabel}</h4>
        <ul className="space-y-2.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-slate-400 text-sm">
              <CheckCircle2 size={16} className="text-cove-400 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <h4 className="text-white font-semibold text-sm mb-3">{techLabel}</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-lg bg-surface-800 border border-white/10 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cove-400 text-sm font-medium hover:text-cove-300 transition-colors"
          >
            {viewProjectLabel}
            <ExternalLink size={16} />
          </Link>
        )}
      </div>
    </GlowCard>
  )
}
