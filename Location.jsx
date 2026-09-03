import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { HOTEL_INFO } from '../../data/hotelData'
import Button from '../ui/Button'

export default function Location() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_INFO.address)}`

  return (
    <section className="container-px mx-auto max-w-content py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Location</p>
          <h2 className="heading-serif mt-4 text-4xl md:text-5xl">Find Your Way to Aurelia Grand</h2>

          <ul className="mt-8 space-y-5 text-sm text-charcoal-800/85">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" /> {HOTEL_INFO.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-gold" />
              <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-gold">
                {HOTEL_INFO.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-gold" />
              <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-gold">
                {HOTEL_INFO.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="shrink-0 text-gold" /> {HOTEL_INFO.frontDeskHours}
            </li>
          </ul>

          <Button as="a" href={directionsUrl} target="_blank" rel="noopener noreferrer" variant="outlineDark" size="md" className="mt-8">
            Get Directions
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-80 w-full overflow-hidden bg-sand lg:h-full"
        >
          <iframe
            title="Aurelia Grand Hotel location map"
            src={HOTEL_INFO.mapsEmbedUrl}
            className="h-full w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
