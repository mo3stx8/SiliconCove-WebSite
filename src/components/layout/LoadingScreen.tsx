'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cove-400 to-blue-500 flex items-center justify-center mx-auto shadow-2xl shadow-cove-500/30">
                <span className="text-3xl font-bold text-white">SC</span>
              </div>
              <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-cove-400/20 animate-ping" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-2">SiliconCove</h1>
            <p className="text-slate-400 text-sm mb-8">{t.loading.tagline}</p>

            <div className="w-48 h-1 bg-surface-700 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-cove-400 to-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
