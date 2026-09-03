import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NAV_LINKS, HOTEL_INFO } from '../data/hotelData'
import Button from './ui/Button'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function MobileMenu({ isOpen, onClose, activeHash }) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[110] flex flex-col bg-charcoal-900 text-ivory"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="container-px flex items-center justify-between py-5">
            <span className="font-serif text-xl tracking-wide">{HOTEL_INFO.name.toUpperCase()}</span>
            <button onClick={onClose} aria-label="Close menu">
              <X size={26} />
            </button>
          </div>

          <motion.ul
            className="container-px mt-6 flex flex-1 flex-col gap-1"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((link) => (
              <motion.li key={link.href} variants={itemVariants} className="hairline border-ivory/10 py-4 first:border-t-0">
                <a
                  href={link.href}
                  onClick={onClose}
                  className={`font-serif text-3xl ${activeHash === link.href ? 'text-gold' : 'text-ivory'}`}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="container-px mb-10">
            <Button as="a" href="#booking" onClick={onClose} variant="gold" className="w-full" size="lg">
              Book Now
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
