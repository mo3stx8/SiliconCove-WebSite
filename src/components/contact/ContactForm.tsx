'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import GlowCard from '@/components/common/GlowCard'
import Button from '@/components/common/Button'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialForm: ContactFormData = { name: '', email: '', phone: '', subject: '', message: '' }
const fields = ['name', 'email', 'phone', 'subject'] as const

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || 'https://formly.email/submit'
const accessKey = process.env.NEXT_PUBLIC_FORMLY_ACCESS_KEY || '830602bae8da4873bda763ac7521914e'

export default function ContactForm() {
  const { t } = useLanguage()
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<'success' | 'error' | 'soon' | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    if (!accessKey) {
      setStatus('soon')
      setLoading(false)
      return
    }

    const data = new FormData()
    data.append('access_key', accessKey)
    data.append('from_name', 'SiliconCove Website')
    data.append('replyto', form.email)
    data.append('subject', form.subject)
    data.append('name', form.name)
    data.append('email', form.email)
    data.append('phone', form.phone)
    data.append('message', form.message)

    try {
      const res = await fetch(contactEndpoint, {
        method: 'POST',
        body: data,
        redirect: 'manual',
      })

      if (res.type === 'opaqueredirect' || res.ok || (res.status >= 300 && res.status < 400)) {
        setStatus('success')
        setForm(initialForm)
      } else {
        const result = await res.json().catch(() => null)
        if (result?.success) {
          setStatus('success')
          setForm(initialForm)
        } else {
          setStatus('error')
        }
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <GlowCard data-aos="fade-up">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          {fields.map((field) => (
            <div key={field} className={field === 'subject' ? 'sm:col-span-2' : ''}>
              <label htmlFor={field} className="block text-sm text-slate-400 mb-1.5">
                {t.contactPage.form[field]}
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                id={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required={field !== 'phone'}
                className="w-full px-4 py-3 rounded-xl bg-surface-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cove-500/50 focus:ring-1 focus:ring-cove-500/30 transition-colors"
              />
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">
            {t.contactPage.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-surface-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cove-500/50 focus:ring-1 focus:ring-cove-500/30 transition-colors resize-none"
          />
        </div>

        {status && (
          <div
            className={`flex items-center gap-2 text-sm px-4 py-3 rounded-xl ${
              status === 'success'
                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                : status === 'soon'
                  ? 'bg-cove-500/10 text-cove-300 border border-cove-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}
          >
            {status === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            {status === 'success'
              ? t.contactPage.form.success
              : status === 'soon'
                ? t.contactPage.form.comingSoon
                : t.contactPage.form.error}
          </div>
        )}

        <Button
          as="button"
          type="submit"
          className="w-full sm:w-auto"
          disabled={loading}
        >
          <Send size={18} />
          {loading ? t.contactPage.form.sending : t.contactPage.form.submit}
        </Button>
      </form>
    </GlowCard>
  )
}
