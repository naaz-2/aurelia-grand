import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { ROOMS } from '../../data/hotelData'
import RoomCard from './RoomCard'
import RoomModal from './RoomModal'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

export default function RoomSection() {
  const [viewedRoom, setViewedRoom] = useState(null)
  const [bookedRoom, setBookedRoom] = useState(null)

  const handleBook = (room) => {
    setViewedRoom(null)
    setBookedRoom(room)
  }

  return (
    <section id="rooms" className="bg-sand/40 py-24 md:py-32">
      <div className="container-px mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="eyebrow">Accommodation</p>
          <h2 className="heading-serif mt-4 text-4xl md:text-5xl">Rooms Designed for Rest</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} onView={setViewedRoom} onBook={handleBook} />
          ))}
        </div>
      </div>

      <RoomModal room={viewedRoom} onClose={() => setViewedRoom(null)} onBook={handleBook} />

      <Modal isOpen={!!bookedRoom} onClose={() => setBookedRoom(null)} labelledBy="room-book-title" maxWidth="max-w-md">
        {bookedRoom && (
          <div className="p-8 text-center sm:p-10">
            <CheckCircle2 className="mx-auto mb-4 text-gold" size={40} />
            <h3 id="room-book-title" className="heading-serif text-2xl">
              Enquiry Received
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-800/80">
              Thank you for your interest in the <span className="font-medium text-charcoal-900">{bookedRoom.name}</span>.
              Our reservations team will reach out shortly to confirm your dates and rate.
            </p>
            <Button variant="gold" size="md" className="mt-6" onClick={() => setBookedRoom(null)}>
              Continue Browsing
            </Button>
          </div>
        )}
      </Modal>
    </section>
  )
}
