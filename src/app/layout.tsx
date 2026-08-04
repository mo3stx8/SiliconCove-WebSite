import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google'
import 'aos/dist/aos.css'
import './globals.css'
import AppShell from '@/components/layout/AppShell'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: '--font-sans-ar',
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-sans-en',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SiliconCove | سيليكون كوف',
  description:
    'سيليكون كوف شركة تقنية متخصصة في تطوير البرمجيات والحلول الرقمية المتكاملة للقطاعين الحكومي والخاص والأفراد.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexSansArabic.variable} ${inter.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
