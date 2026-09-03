import React from 'react'
import { motion } from 'framer-motion'
import { Clock, ChefHat } from 'lucide-react'
import { DINING } from '../../data/hotelData'
import Button from '../ui/Button'

export default function Dining() {
  return (
    <section id="dining" className="bg-charcoal-900 py-24 text-ivory md:py-32">
      <div className="container-px mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{DINING.subtitle}</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{DINING.name} — Signature Dining</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75">{DINING.description}</p>

          <div className="mt-8 flex flex-wrap gap-8 text-sm text-ivory/70">
            <span className="flex items-center gap-2">
              <ChefHat size={16} className="text-gold" /> {DINING.cuisine}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-gold" /> {DINING.hours}
            </span>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-y-2 text-sm text-ivory/80">
            {DINING.dishes.map((dish) => (
              <li key={dish}>— {dish}</li>
            ))}
          </ul>

          <Button as="a" href="#contact" variant="gold" size="md" className="mt-8">
            Explore Dining
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={DINING.image} alt={`${DINING.name} signature dining room`} className="h-[420px] w-full object-cover md:h-[500px]" loading="lazy" />
        </motion.div>
      </div>

      <div className="container-px mx-auto mt-20 max-w-content border-t border-ivory/10 pt-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src={DINING.rooftop.image}
            alt={DINING.rooftop.name}
            className="h-72 w-full object-cover lg:order-2"
            loading="lazy"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:order-1"
          >
            <h3 className="font-serif text-3xl">{DINING.rooftop.name}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/75">{DINING.rooftop.description}</p>
            <span className="mt-4 flex items-center gap-2 text-sm text-ivory/60">
              <Clock size={15} className="text-gold" /> {DINING.rooftop.hours}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
