import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'

export default function WhatsAppButton() {
  const href = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Aurelia Grand, I would like to enquire about a stay.'
  )}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </motion.a>
  )
}
