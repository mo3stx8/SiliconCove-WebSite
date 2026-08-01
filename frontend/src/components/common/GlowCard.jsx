import { motion } from 'framer-motion'

export default function GlowCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`relative rounded-2xl glow-border backdrop-blur-sm p-6 md:p-8 ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      {...props}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cove-500/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
