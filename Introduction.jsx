import React from 'react'
import { motion } from 'framer-motion'
import { INTRO_IMAGES, HOTEL_INFO } from '../../data/hotelData'
import Button from '../ui/Button'

export default function Introduction() {
  return (
    <section id="about" className="container-px mx-auto max-w-content py-24 md:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <img
            src={INTRO_IMAGES.large}
            alt="Aurelia Grand lobby lounge with warm lighting"
            className="h-[420px] w-full object-cover md:h-[520px]"
            loading="lazy"
          />
          <img
            src={INTRO_IMAGES.small}
            alt="Detail of curated furnishings at Aurelia Grand"
            className="absolute -bottom-10 -right-6 hidden h-40 w-48 border-8 border-ivory object-cover shadow-xl sm:block md:h-52 md:w-64"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">The Aurelia Story</p>
          <h2 className="heading-serif mt-4 text-4xl leading-tight md:text-5xl">Stay Somewhere Exceptional.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal-800/80">
            {HOTEL_INFO.fullName} combines contemporary comfort with thoughtful Indian hospitality, set in the
            heart of {HOTEL_INFO.city}. Every room, dish and detail is considered with one goal: to make your
            stay feel unhurried, personal and genuinely restful.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-charcoal-800/80">
            From the warmth of our welcome to the quiet comfort of our rooms, we've built a place where guests
            return not for the address, but for how it makes them feel.
          </p>
          <Button as="a" href="#rooms" variant="outlineDark" size="md" className="mt-8">
            Discover Our Story
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
