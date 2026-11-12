import { useEffect, useRef, useState } from 'react'
import { NAV_IDS, NAV_ITEMS } from '../../data/navigation'
import useActiveSection from '../../hooks/useActiveSection'
import useScrolled from '../../hooks/useScrolled'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import Button from '../../Components/UI/Button'
import Brand from '../../Components/UI/Brand'
import './Navbar.css'

export default function Navbar() {
  const solid = useScrolled(40)
  const active = useActiveSection(NAV_IDS)
  const reduced = usePrefersReducedMotion()
  const [open, setOpen] = useState(false)
  const drawerRef = useRef(null)
  const burgerRef = useRef(null)
  const lastFocused = useRef(null)

  /* Lock the page, move focus into the drawer, and restore it on close. */
  useEffect(() => {
    if (!open) return undefined

    lastFocused.current = document.activeElement
    const burger = burgerRef.current
    document.body.classList.add('is-locked')

    const frame = window.requestAnimationFrame(() => {
      drawerRef.current?.querySelector('a')?.focus()
    })

    return () => {
      window.cancelAnimationFrame(frame)
      document.body.classList.remove('is-locked')

      const target =
        lastFocused.current && lastFocused.current !== document.body
          ? lastFocused.current
          : burger

      if (target && typeof target.focus === 'function') target.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const handleDrawerLink = (event, id) => {
    event.preventDefault()
    setOpen(false)

    window.setTimeout(() => {
      const target = document.getElementById(id)
      if (!target) return
      target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
      if (window.history.replaceState) window.history.replaceState(null, '', `#${id}`)
    }, 240)
  }

  return (
    <>
      <header className={`nav${solid ? ' is-solid' : ''}`} id="nav">
        <div className="container nav__inner">
          <Brand />

          <nav className="nav__links" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className={`nav__link${active === item.id ? ' is-active' : ''}`}
                href={`#${item.id}`}
                data-nav={item.id}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <Button href="#contact" size="sm" className="nav__quote">
              Request a Quote
            </Button>
            <button
              className="burger"
              type="button"
              ref={burgerRef}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobileMenu"
              onClick={() => setOpen((value) => !value)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`drawer-backdrop${open ? ' is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      ></div>

      <aside
        className={`drawer${open ? ' is-open' : ''}`}
        id="mobileMenu"
        aria-label="Mobile navigation"
        ref={drawerRef}
        inert={!open}
      >
        <p className="drawer__title">Navigate</p>

        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            className={`drawer__link${active === item.id ? ' is-active' : ''}`}
            href={`#${item.id}`}
            data-nav={item.id}
            onClick={(event) => handleDrawerLink(event, item.id)}
          >
            {item.label}
          </a>
        ))}

        <div className="drawer__foot">
          <Button href="#contact" block onClick={(event) => handleDrawerLink(event, 'contact')}>
            Request a Quote
          </Button>
          <p className="drawer__note">
            Atelier visits by appointment.
            <br />
            +91 98290 44120 · atelier@aureliacrafts.in
          </p>
        </div>
      </aside>
    </>
  )
}
