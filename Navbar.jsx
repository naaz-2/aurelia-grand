import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { HOTEL_INFO, NAV_LINKS } from '../data/hotelData'
import Button from './ui/Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
          scrolled ? 'bg-ivory-soft/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(27,26,24,0.08)]' : 'bg-transparent'
        }`}
      >
        <nav className="container-px mx-auto flex max-w-content items-center justify-between py-5">
          <a
            href="#home"
            className={`font-serif text-2xl tracking-wide transition-colors duration-500 ${
              scrolled ? 'text-charcoal-900' : 'text-ivory'
            }`}
          >
            {HOTEL_INFO.name.toUpperCase()}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled ? 'text-charcoal-800' : 'text-ivory/90'
                  } ${activeHash === link.href ? 'text-gold' : 'hover:text-gold'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button as="a" href="#booking" variant={scrolled ? 'gold' : 'outline'} size="sm">
              Book Now
            </Button>
          </div>

          <button
            className={`lg:hidden ${scrolled ? 'text-charcoal-900' : 'text-ivory'}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} activeHash={activeHash} />
    </>
  )
}
