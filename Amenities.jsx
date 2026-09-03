import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { AMENITIES } from '../../data/hotelData'

export default function Amenities() {
  return (
    <section id="amenities" className="container-px mx-auto max-w-content py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="eyebrow">On Property</p>
        <h2 className="heading-serif mt-4 text-4xl md:text-5xl">Everything You Need, Nothing You Don't</h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden bg-charcoal-800/10 md:grid-cols-4">
        {AMENITIES.map((item, i) => {
          const Icon = Icons[item.icon]
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group flex flex-col items-start gap-4 bg-ivory-soft p-8 transition-colors duration-300 hover:bg-charcoal-900"
            >
              {Icon && <Icon size={26} className="text-gold" />}
              <h3 className="font-serif text-xl text-charcoal-900 transition-colors duration-300 group-hover:text-ivory">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal-800/70 transition-colors duration-300 group-hover:text-ivory/70">
                {item.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
