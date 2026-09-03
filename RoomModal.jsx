import React, { useState } from 'react'
import { Maximize2, Users, BedDouble, Check } from 'lucide-react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

export default function RoomModal({ room, onClose, onBook }) {
  const [activeImage, setActiveImage] = useState(0)

  if (!room) return null

  return (
    <Modal isOpen={!!room} onClose={onClose} labelledBy="room-modal-title" maxWidth="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={room.images[activeImage]} alt={room.name} className="h-72 w-full object-cover md:h-full" />
          <div className="flex gap-2 p-3 md:hidden">
            {room.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1}`}
                className={`h-14 w-14 overflow-hidden border-2 ${activeImage === i ? 'border-gold' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-8">
          <h3 id="room-modal-title" className="heading-serif text-3xl">
            {room.name}
          </h3>
          <p className="mt-1 text-sm text-gold">{room.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-800/80">{room.description}</p>

          <div className="mt-5 hidden gap-2 md:flex">
            {room.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1}`}
                className={`h-16 w-16 overflow-hidden border-2 ${activeImage === i ? 'border-gold' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 border-y border-charcoal-800/10 py-4 text-xs text-stone">
            <span className="flex flex-col items-center gap-1">
              <Maximize2 size={16} />
              {room.size}
            </span>
            <span className="flex flex-col items-center gap-1">
              <Users size={16} />
              {room.guests} Guests
            </span>
            <span className="flex flex-col items-center gap-1">
              <BedDouble size={16} />
              {room.bed}
            </span>
          </div>

          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-charcoal-800/80">
            {room.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <Check size={14} className="text-gold" /> {a}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center justify-between pt-6">
            <span className="font-serif text-2xl text-charcoal-900">
              ₹{room.price.toLocaleString('en-IN')}
              <span className="text-sm text-stone"> / night</span>
            </span>
            <Button variant="gold" size="md" onClick={() => onBook(room)}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
