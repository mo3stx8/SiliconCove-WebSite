'use client'

import { motion } from 'framer-motion'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, ReactNode } from 'react'

const variants = {
  primary:
    'bg-gradient-to-r from-cove-500 to-blue-500 text-white hover:from-cove-400 hover:to-blue-400 shadow-lg shadow-cove-500/25',
  secondary:
    'border border-cove-500/40 text-cove-300 hover:bg-cove-500/10 hover:border-cove-400/60',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

type ButtonVariant = keyof typeof variants
type ButtonSize = keyof typeof sizes

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> {
  as?: ElementType
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

export default function Button({
  as: Component = 'button',
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Component
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}