// =========================================================================
// AURELIA GRAND — CENTRAL CONFIGURATION
// Change everything about the hotel from this single file.
// Swap HOTEL_INFO, ROOMS, AMENITIES, OFFERS, GALLERY, TESTIMONIALS below
// to re-skin this template for a different hotel client.
// =========================================================================

export const HOTEL_INFO = {
  name: 'Aurelia Grand',
  fullName: 'Aurelia Grand Hotel',
  tagline: 'Where Comfort Meets Timeless Elegance.',
  city: 'Faridabad',
  state: 'Haryana',
  country: 'India',
  address: 'Plot 14, Sector 29, Faridabad, Haryana 121008, India',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '919876543210', // digits only, country code first — used for wa.me links
  email: 'reservations@aureliagrand.com',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5!2d77.3178!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjAiTiA3N8KwMTknMDQuMSJF!5e0!3m2!1sen!2sin!4v1690000000000',
  frontDeskHours: 'Front desk available 24 hours',
  checkIn: '1:00 PM',
  checkOut: '11:00 AM',
  year: 2026,
  social: {
    instagram: 'https://instagram.com/aureliagrandhotel',
    facebook: 'https://facebook.com/aureliagrandhotel',
    youtube: 'https://youtube.com/@aureliagrandhotel',
  },
}

// Core palette tokens — mirrored in tailwind.config.js under theme.extend.colors.
// Update both places together if you change the brand colors.
export const BRAND_COLORS = {
  primaryCharcoal: '#1B1A18',
  secondaryIvory: '#F7F3EA',
  accentGold: '#AD8A52',
  supportingSand: '#E7DFCF',
  supportingStone: '#8B8478',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms & Suites', href: '#rooms' },
  { label: 'Dining', href: '#dining' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Offers', href: '#offers' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const ROOMS = [
  {
    id: 'deluxe-king',
    name: 'Deluxe King Room',
    tagline: 'Warm, quiet, effortlessly comfortable',
    description:
      'A serene retreat with a plush king bed, soft ambient lighting and a work corner overlooking the courtyard gardens. Designed for travelers who want comfort without excess.',
    price: 6500,
    size: '320 sq.ft',
    guests: 2,
    bed: '1 King Bed',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1400',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1400',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1400',
    ],
    amenities: ['Free Wi-Fi', 'Smart TV', 'Rain Shower', 'Mini Bar', 'Tea/Coffee Maker', 'Work Desk'],
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    tagline: 'Elevated space for the discerning traveler',
    description:
      'A generous layout with a separate seating area, upgraded linens and city-facing views. Ideal for extended stays or travelers who value a little more room to breathe.',
    price: 8900,
    size: '400 sq.ft',
    guests: 2,
    bed: '1 King or 2 Twin Beds',
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1400',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1400',
    ],
    amenities: ['Free Wi-Fi', 'Lounge Access', 'Rain Shower', 'Mini Bar', 'Bathtub', 'City View'],
  },
  {
    id: 'premium-suite',
    name: 'Premium Suite',
    tagline: 'A residence within the hotel',
    description:
      'A distinct living and sleeping area separated by a graceful archway, with a private balcony, a deep soaking tub and curated furnishings throughout.',
    price: 13500,
    size: '620 sq.ft',
    guests: 3,
    bed: '1 King Bed + Sofa Bed',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1400',
      'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1400',
    ],
    amenities: ['Free Wi-Fi', 'Private Balcony', 'Soaking Tub', 'Butler Service', 'Lounge Access', 'Mini Bar'],
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tagline: 'The finest expression of Aurelia Grand',
    description:
      'Our signature suite: a private dining nook, a study, a panoramic terrace and round-the-clock butler service. Reserved for moments that call for the exceptional.',
    price: 24000,
    size: '980 sq.ft',
    guests: 4,
    bed: '1 King Bed + 1 Queen Bed',
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=1400',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1400',
    ],
    amenities: ['Free Wi-Fi', 'Private Terrace', 'Butler Service', 'Dining Nook', 'Study', 'Airport Transfer'],
  },
]

export const AMENITIES = [
  { icon: 'Wifi', title: 'Free Wi-Fi', description: 'High-speed connectivity throughout the property.' },
  { icon: 'Waves', title: 'Swimming Pool', description: 'A temperature-controlled pool with a private deck.' },
  { icon: 'Dumbbell', title: 'Fitness Center', description: 'Open 24 hours with modern equipment.' },
  { icon: 'UtensilsCrossed', title: 'Restaurant', description: 'Signature dining led by our in-house chefs.' },
  { icon: 'BellRing', title: 'Room Service', description: 'Available around the clock, delivered with care.' },
  { icon: 'Plane', title: 'Airport Transfer', description: 'Complimentary pickup on request for select stays.' },
  { icon: 'ParkingCircle', title: 'Valet Parking', description: 'Secure on-site parking for every guest.' },
  { icon: 'Clock', title: '24/7 Front Desk', description: 'Assistance whenever you need it, day or night.' },
]

export const DINING = {
  name: 'EMBER',
  subtitle: 'Signature Dining',
  description:
    'Discover a curated dining experience blending Indian flavors with contemporary culinary artistry, served in a warm, low-lit dining room designed for lingering conversation.',
  image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400',
  cuisine: 'Modern Indian · Global Small Plates',
  hours: '7:00 AM – 11:30 PM',
  dishes: ['Tandoori Barrah Kebab', 'Saffron Dum Biryani', 'Charred Miso Aubergine', 'Deconstructed Rasmalai'],
  rooftop: {
    name: 'The Rooftop Lounge',
    description: 'Craft cocktails and light bites under the open sky, with the city skyline as your backdrop.',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1400',
    hours: '5:00 PM – 1:00 AM',
  },
}

export const OFFERS = [
  {
    id: 'weekend-escape',
    title: "Weekend Escape",
    discount: '15% OFF',
    description: 'Unwind with a two-night stay across any room category, every Friday through Sunday.',
    validity: 'Valid through December 2026',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200',
  },
  {
    id: 'couples-retreat',
    title: "Couple's Retreat",
    discount: 'Breakfast + Late Checkout',
    description: 'A complimentary breakfast for two and a relaxed 2:00 PM checkout, on us.',
    validity: 'Valid all year, subject to availability',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200',
  },
  {
    id: 'business-stay',
    title: 'Business Stay',
    discount: 'Exclusive Corporate Rates',
    description: 'Preferred pricing, express check-in and a dedicated workspace for corporate travelers.',
    validity: 'Ongoing — enquire for your company code',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200',
  },
]

export const GALLERY_IMAGES = [
  { id: 1, category: 'Rooms', src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200', alt: 'Executive room with city view' },
  { id: 2, category: 'Dining', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200', alt: 'EMBER signature dining room' },
  { id: 3, category: 'Exterior', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200', alt: 'Hotel exterior at dusk' },
  { id: 4, category: 'Amenities', src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200', alt: 'Swimming pool deck' },
  { id: 5, category: 'Rooms', src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200', alt: 'Premium suite living area' },
  { id: 6, category: 'Dining', src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200', alt: 'Rooftop lounge at night' },
  { id: 7, category: 'Exterior', src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200', alt: 'Hotel entrance and driveway' },
  { id: 8, category: 'Amenities', src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200', alt: 'Fitness center' },
  { id: 9, category: 'Rooms', src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1200', alt: 'Deluxe king room' },
  { id: 10, category: 'Dining', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200', alt: 'Plated signature dish' },
  { id: 11, category: 'Exterior', src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200', alt: 'Garden courtyard' },
  { id: 12, category: 'Amenities', src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200', alt: 'Spa relaxation area' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'From the moment we arrived, everything felt effortless. The room was beautiful, the staff incredibly attentive, and the dining experience was exceptional.',
    name: 'Ritika Malhotra',
    tag: 'Verified Guest',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Aurelia Grand quietly outclasses every hotel we have stayed at in the region. The Premium Suite was spacious, spotless and genuinely restful.',
    name: 'Arjun Kapoor',
    tag: 'Verified Guest',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'We booked the Couple\'s Retreat offer for our anniversary and it exceeded every expectation — the rooftop dinner alone was worth the trip.',
    name: 'Neha & Rohan Sharma',
    tag: 'Verified Guest',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'As a frequent business traveler, the Executive Room and express check-in save me real time. Reliable, comfortable, and never pretentious.',
    name: 'Vikram Sethi',
    tag: 'Verified Guest',
    rating: 5,
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Exceptional Hospitality',
    description: 'A team trained to anticipate what you need before you ask for it.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Prime Location',
    description: 'Minutes from Faridabad\'s business district and major transit routes.',
    icon: 'MapPin',
  },
  {
    title: 'Thoughtful Comfort',
    description: 'Every room considered down to the linens and the lighting.',
    icon: 'BedDouble',
  },
  {
    title: 'Memorable Experiences',
    description: 'Dining, events and moments designed to be remembered long after checkout.',
    icon: 'Sparkles',
  },
]

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920'

export const INTRO_IMAGES = {
  large: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200',
  small: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
}
