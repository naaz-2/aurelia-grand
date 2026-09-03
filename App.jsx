import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import BookingBar from './components/sections/BookingBar'
import Introduction from './components/sections/Introduction'
import RoomSection from './components/sections/RoomSection'
import Amenities from './components/sections/Amenities'
import Dining from './components/sections/Dining'
import Offers from './components/sections/Offers'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Location from './components/sections/Location'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <BookingBar />
        <Introduction />
        <RoomSection />
        <Amenities />
        <Dining />
        <Offers />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
