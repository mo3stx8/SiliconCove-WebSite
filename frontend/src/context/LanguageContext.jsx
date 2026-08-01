import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ar')

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

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
