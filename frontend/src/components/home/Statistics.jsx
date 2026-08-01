import { useEffect, useRef, useState } from 'react'
import { statsData } from '../../i18n/translations'
import { useLanguage } from '../../context/LanguageContext'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Statistics() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cove-500/5 via-transparent to-blue-500/5" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, i) => (
            <div
              key={stat.key}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-400 text-sm md:text-base">{t.statistics[stat.key]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
