'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import type { Translation } from '@/i18n/translations'
import Button from '@/components/common/Button'

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
  { key: 'contact', path: '/contact' },
] as const satisfies readonly { key: keyof Translation['nav']; path: string }[]

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cove-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cove-500/20 group-hover:shadow-cove-500/40 transition-shadow">
              <span className="text-sm font-bold text-white">SC</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-white group-hover:text-cove-300 transition-colors">
              SiliconCove
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ key, path }) => (
              <Link
                key={key}
                href={path}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  pathname === path ? 'text-cove-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.nav[key]}
                {pathname === path && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 inset-x-0 h-0.5 bg-cove-400 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg border border-cove-500/30 text-cove-300 text-sm font-medium hover:bg-cove-500/10 transition-colors cursor-pointer"
              aria-label="Toggle language"
            >
              {t.nav.langToggle}
            </button>

            <div className="hidden sm:block">
              <Button as={Link} href="/contact" size="sm">
                {t.nav.contact}
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/5"
            >
              <div className="py-4 space-y-1">
                {navLinks.map(({ key, path }) => (
                  <Link
                    key={key}
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === path
                        ? 'text-cove-400 bg-cove-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {t.nav[key]}
                  </Link>
                ))}
                <div className="px-4 pt-2 sm:hidden">
                  <Button as={Link} href="/contact" className="w-full">
                    {t.nav.contact}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
