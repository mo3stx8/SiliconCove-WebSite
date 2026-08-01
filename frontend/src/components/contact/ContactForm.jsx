import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import GlowCard from '../common/GlowCard'
import Button from '../common/Button'

export default function ContactForm() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const fields = ['name', 'email', 'phone', 'subject']

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
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}
          >
            {status === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            {status === 'success' ? t.contactPage.form.success : t.contactPage.form.error}
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
