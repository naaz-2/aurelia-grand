import React, { useState } from 'react'
import { Instagram, Facebook, Youtube, CheckCircle2 } from 'lucide-react'
import { HOTEL_INFO, NAV_LINKS } from '../data/hotelData'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-charcoal-900 text-ivory">
      <div className="container-px mx-auto max-w-content py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl">{HOTEL_INFO.name.toUpperCase()}</h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">{HOTEL_INFO.tagline}</p>
            <div className="mt-6 flex gap-4">
              <a href={HOTEL_INFO.social.instagram} aria-label="Instagram" className="text-ivory/70 hover:text-gold">
                <Instagram size={19} />
              </a>
              <a href={HOTEL_INFO.social.facebook} aria-label="Facebook" className="text-ivory/70 hover:text-gold">
                <Facebook size={19} />
              </a>
              <a href={HOTEL_INFO.social.youtube} aria-label="YouTube" className="text-ivory/70 hover:text-gold">
                <Youtube size={19} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-ivory/50">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.filter((l) => l.href !== '#home').map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ivory/75 hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-ivory/50">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-ivory/75">
              <li>{HOTEL_INFO.address}</li>
              <li>
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-gold">
                  {HOTEL_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-gold">
                  {HOTEL_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wide text-ivory/50">Stay in the Know</h4>
            <p className="mt-4 text-sm text-ivory/60">Offers and updates, occasionally, never spam.</p>
            {subscribed ? (
              <p className="mt-4 flex items-center gap-2 text-sm text-gold-light">
                <CheckCircle2 size={16} /> Subscribed — thank you!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex border-b border-ivory/30 focus-within:border-gold">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  className="w-full bg-transparent py-2 text-sm text-ivory placeholder:text-ivory/40 outline-none"
                />
                <button type="submit" className="px-3 text-sm text-gold hover:text-gold-light">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6">
        <p className="container-px mx-auto max-w-content text-center text-xs text-ivory/45">
          © {HOTEL_INFO.year} {HOTEL_INFO.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
