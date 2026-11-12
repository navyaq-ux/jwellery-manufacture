export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'story', label: 'Our Story' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

/** Section ids watched by the navbar's active-link observer. */
export const NAV_IDS = NAV_ITEMS.map((item) => item.id)
