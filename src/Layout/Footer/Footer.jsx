import Brand from '../../Components/UI/Brand'
import Newsletter from '../../Components/UI/Newsletter'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Story', href: '#story' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Request a Quote', href: '#contact' },
]

const SERVICE_LINKS = [
  'Custom Design & CAD',
  'Bulk Manufacturing',
  'Gem Setting & Sourcing',
  'Hallmarking & Certification',
  'Repair & Restoration',
  'Private Label',
]

const CONTACTS = [
  {
    id: 'address',
    icon: (
      <>
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    body: (
      <span>
        4th Floor, Hathroi Fort Road,
        <br />
        C-Scheme, Jaipur 302001,
        <br />
        Rajasthan, India
      </span>
    ),
  },
  {
    id: 'phone',
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4z" />
    ),
    body: (
      <span>
        <a href="tel:+911414008800">+91 141 400 8800</a>
        <br />
        <a href="tel:+919829044120">+91 98290 44120</a>
      </span>
    ),
  },
  {
    id: 'email',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    body: (
      <span>
        <a href="mailto:atelier@aureliacrafts.in">atelier@aureliacrafts.in</a>
      </span>
    ),
  },
  {
    id: 'hours',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    body: (
      <span>
        Mon – Sat · 10:00 – 19:00 IST
        <br />
        Sunday by appointment
      </span>
    ),
  },
]

const SOCIALS = [
  {
    id: 'instagram',
    label: 'Aurelia Crafts on Instagram',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    id: 'linkedin',
    label: 'Aurelia Crafts on LinkedIn',
    icon: <path d="M4.5 9v11M4.5 5.5v.01M10 20V9m0 4c0-2.2 1.6-4 3.6-4s3.4 1.6 3.4 4v7" />,
  },
  {
    id: 'pinterest',
    label: 'Aurelia Crafts on Pinterest',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7c-2 0-3 1.4-3 2.9 0 .9.5 1.7 1.2 2 .3.1.5 0 .6-.3l.2-.9c0-.2 0-.4-.2-.6a1.5 1.5 0 0 1-.4-1c0-1 .8-1.7 2-1.7 1.1 0 1.7.7 1.7 1.6 0 1.2-.5 2.2-1.3 2.2-.4 0-.8-.4-.7-.9l.4-1.4c.1-.5 0-1.1-.5-1.1" />
      </>
    ),
  },
  {
    id: 'whatsapp',
    label: 'Aurelia Crafts on WhatsApp',
    icon: (
      <>
        <path d="M3.5 20.5 5 16.8A8 8 0 1 1 8.4 19z" />
        <path d="M9 9.5c.4 2 2.6 4.2 4.6 4.6l1-1.2 2 .9-.3 1.6c-2.9.8-6.4-2.6-6.9-6z" />
      </>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="footer__hook" data-reveal>
          Crafted in Jaipur. Cherished Worldwide.
        </h2>
        <p className="footer__hooksub" data-reveal>
          Since 1998 · A family atelier, not a trading company
        </p>

        <Newsletter />

        <div className="footer__grid">
          <div className="footer__col">
            <Brand style={{ marginBottom: 18 }} />
            <p>
              A full-service jewellery manufacturing house working in 22k and 18k gold, silver and
              diamonds — from the first CAD line to the hallmarked box that leaves our dispatch
              counter.
            </p>
            <div className="social">
              {SOCIALS.map((social) => (
                <a
                  key={social.id}
                  href="#"
                  aria-label={social.label}
                  onClick={(event) => event.preventDefault()}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__col" aria-label="Quick links">
            <h3>Quick Links</h3>
            <ul className="footer__links">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3>Services</h3>
            <ul className="footer__links">
              {SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <a href="#services">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Visit the Atelier</h3>
            <ul className="footer__contact">
              {CONTACTS.map((item) => (
                <li key={item.id}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                  {item.body}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p style={{ margin: 0 }}>
            © {year} Aurelia Crafts. All rights reserved. BIS Reg. No. BIS/AUR/2311.
          </p>
          <p style={{ margin: 0 }}>
            <a href="#contact">Privacy</a> · <a href="#contact">Terms</a> ·{' '}
            <a href="#contact">Shipping &amp; Returns</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
