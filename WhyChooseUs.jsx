import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { WHY_CHOOSE_US } from '../../data/hotelData'

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal-900 py-24 text-ivory md:py-32">
      <div className="container-px mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="eyebrow">The Aurelia Difference</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Why Guests Choose Us</h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = Icons[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t border-ivory/15 pt-6"
              >
                {Icon && <Icon className="text-gold" size={28} />}
                <h3 className="mt-4 font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
