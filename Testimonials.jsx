import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/hotelData'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (i, dir) => {
    setDirection(dir)
    setIndex(i)
  }

  const next = () => goTo((index + 1) % TESTIMONIALS.length, 1)
  const prev = () => goTo((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, -1)

  const current = TESTIMONIALS[index]

  return (
    <section className="container-px mx-auto max-w-content py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="eyebrow">Guest Voices</p>
        <h2 className="heading-serif mt-4 text-4xl md:text-5xl">What Our Guests Say</h2>
      </motion.div>

      <div className="relative mx-auto mt-14 max-w-2xl text-center">
        <Quote className="mx-auto mb-4 text-gold" size={32} />

        <div className="relative min-h-[220px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <p className="font-serif text-xl leading-relaxed text-charcoal-900 md:text-2xl">"{current.quote}"</p>
              <div className="mt-6 flex justify-center gap-1 text-gold">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm font-medium text-charcoal-900">{current.name}</p>
              <p className="text-xs text-stone">{current.tag}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button onClick={prev} aria-label="Previous testimonial" className="text-charcoal-800 hover:text-gold">
            <ChevronLeft size={22} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 w-6 transition-colors duration-300 ${i === index ? 'bg-gold' : 'bg-charcoal-800/15'}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next testimonial" className="text-charcoal-800 hover:text-gold">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
