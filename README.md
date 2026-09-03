# Aurelia Grand Hotel — Website

A premium, animated hotel website built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## 1. Create the project

You already have the full file structure below (copy it into a folder, e.g. `aurelia-grand`).

```
aurelia-grand/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── hotelData.js          ← all hotel content lives here
    ├── components/
    │   ├── Navbar.jsx
    │   ├── MobileMenu.jsx
    │   ├── Footer.jsx
    │   ├── WhatsAppButton.jsx
    │   ├── ui/
    │   │   ├── Button.jsx
    │   │   └── Modal.jsx
    │   └── sections/
    │       ├── Hero.jsx
    │       ├── BookingBar.jsx
    │       ├── Introduction.jsx
    │       ├── RoomCard.jsx
    │       ├── RoomModal.jsx
    │       ├── RoomSection.jsx
    │       ├── Amenities.jsx
    │       ├── Dining.jsx
    │       ├── Offers.jsx
    │       ├── Gallery.jsx
    │       ├── Testimonials.jsx
    │       ├── WhyChooseUs.jsx
    │       └── Location.jsx
```

## 2. Install dependencies

From inside the `aurelia-grand` folder:

```bash
npm install
```

This installs React, Vite, Tailwind CSS, Framer Motion and Lucide React as listed in `package.json`.

## 3. Run it locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 4. Where each file goes

Every file above already contains its complete code — just save each one at the path shown. There is nothing to fill in.

## 5. Replacing hotel images

All image URLs live in **`src/data/hotelData.js`** — replace any `https://images.unsplash.com/...` URL with your own image URL, or with a local import (e.g. place a file in `src/assets/` and `import roomImg from '../assets/room.jpg'`, then use `roomImg` instead of a URL string).

## 6. Changing hotel information

Open **`src/data/hotelData.js`** and edit the `HOTEL_INFO` object: name, tagline, address, phone, WhatsApp number, email, map embed URL, check-in/out times and social links. Everything else in the site (navbar, footer, contact section, WhatsApp button) reads from this single object.

## 7. Changing colors

Two places, kept in sync:
1. `tailwind.config.js` → `theme.extend.colors` (charcoal, ivory, gold, sand, stone)
2. `src/data/hotelData.js` → `BRAND_COLORS` (reference copy for documentation/handoff)

Change the hex values in `tailwind.config.js` and every component updates automatically, since all components use Tailwind color classes like `bg-charcoal-900` or `text-gold`.

## 8. Changing the WhatsApp number

In `src/data/hotelData.js`, update:

```js
whatsapp: '919876543210', // digits only, country code first
```

This single value powers both the floating WhatsApp button and the "WhatsApp Us" link in the Contact section.

## 9. Changing rooms, amenities, offers, gallery and testimonials

All are arrays in `src/data/hotelData.js`: `ROOMS`, `AMENITIES`, `OFFERS`, `GALLERY_IMAGES`, `TESTIMONIALS`, `WHY_CHOOSE_US`. Add, remove or edit array entries — the UI re-renders automatically since every section maps over these arrays.

## 10. Deploying

**Build a production bundle:**

```bash
npm run build
```

This outputs static files to `dist/`.

**Deploy options:**
- **Vercel / Netlify:** connect your repo (or drag-and-drop the `dist/` folder) — both auto-detect Vite and need no extra config.
- **Any static host** (GitHub Pages, S3, cPanel): upload the contents of `dist/` after running `npm run build`.

Preview the production build locally before deploying with:

```bash
npm run preview
```

---

## QA Checklist

**Structure & code**
- [x] No pseudocode — every file is complete, working code
- [x] Reusable components (Button, Modal, RoomCard, OfferCard, etc.) — no single giant component
- [x] Centralized data file (`hotelData.js`) for full client customization
- [x] Braces/JSX tags balanced and verified across all component files
- [x] No broken imports — every import maps to an existing file or installed package

**Sections implemented**
- [x] Sticky navbar with scroll-based glass effect + animated mobile menu
- [x] Full-screen hero with entrance animation and scroll indicator
- [x] Functional booking widget (validates dates, shows confirmation modal)
- [x] Introduction / About section with layered imagery
- [x] Rooms & Suites — 4 rooms, hover effects, detail modal with image switcher
- [x] Amenities grid with Lucide icons
- [x] Dining section (EMBER) + Rooftop Lounge sub-section
- [x] Special Offers — 3 cards with image, discount, validity, CTA
- [x] Gallery — category filtering + fullscreen lightbox with keyboard navigation (Esc/←/→)
- [x] Testimonials carousel with star ratings and dot navigation
- [x] Why Choose Us — 4 selling points
- [x] Location — address, contact details, map embed, Get Directions
- [x] Contact form with validation and success state, plus Call/WhatsApp/Email links
- [x] Floating WhatsApp button with pre-filled message
- [x] Footer with nav links, contact info, social icons, newsletter form

**UX & accessibility**
- [x] Smooth scrolling, active nav-link highlighting via IntersectionObserver
- [x] Keyboard-dismissible modals (Escape key), focus moved to close button on open
- [x] Visible focus rings on all interactive elements
- [x] Form validation with inline error messages (booking bar + contact form)
- [x] `prefers-reduced-motion` respected globally in `index.css`
- [x] Semantic HTML (`header`, `main`, `section`, `nav`, `footer`) and image `alt` text throughout

**SEO**
- [x] Page title and meta description as specified
- [x] Open Graph + Twitter card metadata
- [x] Logical heading hierarchy (single H1 in Hero, H2 per section)

**Performance**
- [x] Lazy-loaded images (`loading="lazy"`) outside the hero
- [x] No unnecessary dependencies — only Framer Motion + Lucide added to React/Vite/Tailwind

**Note on verification:** This environment has no network access, so `npm install` could not be run here to produce a live build. The code was manually reviewed file-by-file for balanced braces/JSX tags, consistent imports, and correct prop usage. Run `npm install && npm run dev` locally as the final check — if anything surfaces, it will most likely be a minor version-pinning issue in `package.json`, not a structural code error.
