import { useLanguage } from '../context/LanguageContext'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="pt-32 pb-16 hero-grid">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            data-aos="fade-up"
          >
            {t.contactPage.heroTitle}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t.contactPage.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
