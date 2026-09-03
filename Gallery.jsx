import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY_IMAGES } from '../../data/hotelData'

const CATEGORIES = ['All', 'Rooms', 'Dining', 'Exterior', 'Amenities']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () => (filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter)),
    [filter]
  )

  const openLightbox = (id) => {
    const idx = filtered.findIndex((img) => img.id === id)
    setLightboxIndex(idx)
  }

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const next = useCallback(() => setLightboxIndex((i) => (i + 1) % filtered.length), [filtered.length])
  const prev = useCallback(() => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, closeLightbox, next, prev])

  return (
    <section id="gallery" className="bg-sand/40 py-24 md:py-32">
      <div className="container-px mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="eyebrow">Gallery</p>
          <h2 className="heading-serif mt-4 text-4xl md:text-5xl">A Closer Look</h2>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm transition-colors duration-300 ${
                filter === cat ? 'bg-charcoal-900 text-ivory' : 'bg-ivory-soft text-charcoal-800 hover:bg-charcoal-800/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(img.id)}
                className="mb-4 block w-full overflow-hidden"
                aria-label={`View ${img.alt} in fullscreen`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover transition-transform duration-500 hover:scale-105" />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-charcoal-900/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery viewer"
          >
            <button onClick={closeLightbox} aria-label="Close gallery" className="absolute right-6 top-6 text-ivory">
              <X size={28} />
            </button>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 text-ivory/80 hover:text-gold md:left-10"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img
              key={filtered[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[88vw] object-contain"
            />

            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 text-ivory/80 hover:text-gold md:right-10"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
