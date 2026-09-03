import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Mail, CheckCircle2 } from 'lucide-react'
import { HOTEL_INFO } from '../../data/hotelData'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!/^[0-9+\s-]{7,15}$/.test(form.phone)) next.phone = 'Please enter a valid phone number.'
    if (!form.message.trim()) next.message = 'Please add a short message.'
    return next
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
    setForm(initialForm)
  }

  const whatsappHref = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Aurelia Grand, I would like to enquire about a stay.'
  )}`

  return (
    <section id="contact" className="bg-sand/40 py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-content grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="heading-serif mt-4 text-4xl md:text-5xl">We'd Love to Hear From You</h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-charcoal-800/75">
            Reach out for reservations, event enquiries or anything else — our team responds within a few hours.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a href={`tel:${HOTEL_INFO.phone}`} className="flex items-center gap-3 text-sm text-charcoal-900 hover:text-gold">
              <Phone size={18} className="text-gold" /> Call Us — {HOTEL_INFO.phoneDisplay}
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-charcoal-900 hover:text-gold">
              <MessageCircle size={18} className="text-gold" /> WhatsApp Us
            </a>
            <a href={`mailto:${HOTEL_INFO.email}`} className="flex items-center gap-3 text-sm text-charcoal-900 hover:text-gold">
              <Mail size={18} className="text-gold" /> Email Us — {HOTEL_INFO.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-ivory-soft p-8"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-[320px] flex-col items-center justify-center text-center"
              >
                <CheckCircle2 className="text-gold" size={40} />
                <h3 className="heading-serif mt-4 text-2xl">Enquiry Sent</h3>
                <p className="mt-3 max-w-xs text-sm text-charcoal-800/75">
                  Thank you for reaching out. A member of our team will respond to you shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-medium text-gold hover:text-gold-dark">
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <FormField label="Full Name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    className="w-full border-b border-charcoal-800/20 bg-transparent py-2 text-sm outline-none focus:border-gold"
                  />
                </FormField>

                <FormField label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className="w-full border-b border-charcoal-800/20 bg-transparent py-2 text-sm outline-none focus:border-gold"
                  />
                </FormField>

                <FormField label="Phone" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className="w-full border-b border-charcoal-800/20 bg-transparent py-2 text-sm outline-none focus:border-gold"
                  />
                </FormField>

                <FormField label="Message" error={errors.message}>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={handleChange('message')}
                    className="w-full resize-none border-b border-charcoal-800/20 bg-transparent py-2 text-sm outline-none focus:border-gold"
                  />
                </FormField>

                <button
                  type="submit"
                  className="mt-2 bg-charcoal-900 px-6 py-3 text-sm font-medium tracking-wide text-ivory transition-colors duration-300 hover:bg-gold"
                >
                  Send Enquiry
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function FormField({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs uppercase tracking-wide text-stone">{label}</span>
      {children}
      {error && (
        <span role="alert" className="text-xs text-red-700">
          {error}
        </span>
      )}
    </label>
  )
}
