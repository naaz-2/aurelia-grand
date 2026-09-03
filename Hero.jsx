import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { HERO_IMAGE } from '../../data/hotelData'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section id="home" className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Aurelia Grand Hotel lobby bathed in warm evening light"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/35 to-charcoal-900/50" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-content w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-gold-light"
        >
          Welcome to Aurelia Grand
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl font-serif text-5xl leading-[1.08] text-ivory sm:text-6xl md:text-7xl"
        >
          An Elevated Stay,
          <br />
          Designed Around You.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md text-base leading-relaxed text-ivory/80 md:text-lg"
        >
          Experience refined comfort, thoughtful hospitality and unforgettable moments in the heart of Faridabad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button as="a" href="#rooms" variant="gold" size="lg">
            Explore Rooms
          </Button>
          <Button as="a" href="#booking" variant="outline" size="lg">
            Book Your Stay
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#booking"
        aria-label="Scroll to booking"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { delay: 1.2, duration: 1.8, repeat: Infinity } }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  )
}
