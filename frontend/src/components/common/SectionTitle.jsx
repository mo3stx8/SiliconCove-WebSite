export default function SectionTitle({ label, title, subtitle, centered = true, className = '' }) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <span
          className="inline-block text-cove-400 text-sm font-semibold tracking-wider uppercase mb-3"
          data-aos="fade-up"
        >
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
