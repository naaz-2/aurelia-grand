import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Users, BedDouble, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

const todayISO = () => new Date().toISOString().split('T')[0]

export default function BookingBar() {
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
  })
  const [error, setError] = useState('')
  const [confirmed, setConfirmed] = useState(null)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.checkIn || !form.checkOut) {
      setError('Please select both a check-in and check-out date.')
      return
    }
    if (new Date(form.checkOut) <= new Date(form.checkIn)) {
      setError('Check-out date must be after your check-in date.')
      return
    }
    setConfirmed({ ...form })
  }

  return (
    <section id="booking" className="relative z-20 -mt-16 md:-mt-20">
      <div className="container-px mx-auto max-w-content">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-px overflow-hidden bg-charcoal-800/10 shadow-xl sm:grid-cols-2 lg:grid-cols-5"
        >
          <Field icon={<CalendarDays size={18} />} label="Check In">
            <input
              type="date"
              min={todayISO()}
              value={form.checkIn}
              onChange={handleChange('checkIn')}
              className="w-full bg-transparent text-sm text-charcoal-900 outline-none"
              aria-label="Check-in date"
            />
          </Field>

          <Field icon={<CalendarDays size={18} />} label="Check Out">
            <input
              type="date"
              min={form.checkIn || todayISO()}
              value={form.checkOut}
              onChange={handleChange('checkOut')}
              className="w-full bg-transparent text-sm text-charcoal-900 outline-none"
              aria-label="Check-out date"
            />
          </Field>

          <Field icon={<Users size={18} />} label="Guests">
            <select
              value={form.guests}
              onChange={handleChange('guests')}
              className="w-full bg-transparent text-sm text-charcoal-900 outline-none"
              aria-label="Number of guests"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </Field>

          <Field icon={<BedDouble size={18} />} label="Rooms">
            <select
              value={form.rooms}
              onChange={handleChange('rooms')}
              className="w-full bg-transparent text-sm text-charcoal-900 outline-none"
              aria-label="Number of rooms"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Room' : 'Rooms'}
                </option>
              ))}
            </select>
          </Field>

          <button
            type="submit"
            className="flex items-center justify-center bg-charcoal-900 px-6 py-5 text-sm font-medium tracking-wide text-ivory transition-colors duration-300 hover:bg-gold"
          >
            Check Availability
          </button>
        </motion.form>

        {error && (
          <p role="alert" className="mt-3 bg-ivory-soft px-4 py-2 text-sm text-red-700">
            {error}
          </p>
        )}
      </div>

      <Modal isOpen={!!confirmed} onClose={() => setConfirmed(null)} labelledBy="booking-confirm-title" maxWidth="max-w-md">
        {confirmed && (
          <div className="p-8 text-center sm:p-10">
            <CheckCircle2 className="mx-auto mb-4 text-gold" size={40} />
            <h3 id="booking-confirm-title" className="heading-serif text-2xl">
              Availability Confirmed
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-800/80">
              We have rooms available for your stay from{' '}
              <span className="font-medium text-charcoal-900">{formatDate(confirmed.checkIn)}</span> to{' '}
              <span className="font-medium text-charcoal-900">{formatDate(confirmed.checkOut)}</span> for{' '}
              <span className="font-medium text-charcoal-900">
                {confirmed.guests} {Number(confirmed.guests) === 1 ? 'guest' : 'guests'}
              </span>{' '}
              across{' '}
              <span className="font-medium text-charcoal-900">
                {confirmed.rooms} {Number(confirmed.rooms) === 1 ? 'room' : 'rooms'}
              </span>
              .
            </p>
            <Button variant="gold" size="md" className="mt-6" onClick={() => setConfirmed(null)}>
              Continue Browsing Rooms
            </Button>
          </div>
        )}
      </Modal>
    </section>
  )
}

function Field({ icon, label, children }) {
  return (
    <label className="flex flex-col gap-1.5 bg-ivory-soft px-6 py-4">
      <span className="flex items-center gap-2 text-xs uppercase tracking-wide text-stone">
        {icon}
        {label}
      </span>
      {children}
    </label>
  )
}

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}
