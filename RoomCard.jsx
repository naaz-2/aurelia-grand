import React from 'react'
import { motion } from 'framer-motion'
import { Maximize2, Users, BedDouble } from 'lucide-react'
import Button from '../ui/Button'

export default function RoomCard({ room, onView, onBook }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-ivory-soft"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-charcoal-900/80 px-3 py-1 text-xs tracking-wide text-ivory">
          ₹{room.price.toLocaleString('en-IN')} / night
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="heading-serif text-2xl">{room.name}</h3>
        <p className="mt-1 text-sm text-gold">{room.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-800/75">{room.description}</p>

        <div className="mt-5 flex flex-wrap gap-4 text-xs text-stone">
          <span className="flex items-center gap-1.5">
            <Maximize2 size={14} /> {room.size}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} /> Up to {room.guests} guests
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={14} /> {room.bed}
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          <Button variant="outlineDark" size="sm" onClick={() => onView(room)} className="flex-1">
            View Room
          </Button>
          <Button variant="gold" size="sm" onClick={() => onBook(room)} className="flex-1">
            Book Now
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
