'use client'

import { useEffect, useState, type ReactNode } from 'react'
import AOS from 'aos'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/layout/LoadingScreen'

export default function AppShell({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
  }, [])

  useEffect(() => {
    if (!loading) AOS.refresh()
  }, [loading])

  return (
    <LanguageProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </LanguageProvider>
  )
}
