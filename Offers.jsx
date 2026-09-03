import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { OFFERS } from '../../data/hotelData'

function OfferCard({ offer, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-96 overflow-hidden"
    >
      <img
        src={offer.image}
        alt={offer.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-7 text-ivory">
        <span className="text-xs uppercase tracking-wide text-gold-light">{offer.discount}</span>
        <h3 className="mt-2 font-serif text-2xl">{offer.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ivory/75">{offer.description}</p>
        <p className="mt-3 text-xs text-ivory/50">{offer.validity}</p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-light transition-colors hover:text-gold"
        >
          Enquire Now <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.article>
  )
}

export default function Offers() {
  return (
    <section id="offers" className="container-px mx-auto max-w-content py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="eyebrow">Special Offers</p>
        <h2 className="heading-serif mt-4 text-4xl md:text-5xl">Curated Rates for Every Stay</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {OFFERS.map((offer, i) => (
          <OfferCard key={offer.id} offer={offer} index={i} />
        ))}
      </div>
    </section>
  )
}
