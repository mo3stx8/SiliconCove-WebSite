'use client'

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Language, type Translation } from '@/i18n/translations'

interface LanguageContextValue {
  language: Language
  isRTL: boolean
  t: Translation
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  const isRTL = language === 'ar'
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  }, [language, isRTL])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }, [])

  return (
    <LanguageContext.Provider value={{ language, isRTL, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
