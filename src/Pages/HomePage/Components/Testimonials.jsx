import { useEffect, useRef, useState } from 'react'
import { TESTIMONIALS } from '../../../data/testimonials'
import SectionHeading from '../../../Components/UI/SectionHeading'
import Stars from '../../../Components/UI/Stars'
import TrustBadges from '../../../Components/UI/TrustBadges'
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion'
import './Testimonials.css'

const AUTOPLAY_MS = 6500
const SWIPE_THRESHOLD = 45

export default function Testimonials() {
  const total = TESTIMONIALS.length
  const reduced = usePrefersReducedMotion()

  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const [dragging, setDragging] = useState(false)

  const dragStart = useRef(0)
  const draggingRef = useRef(false)
  const viewportRef = useRef(null)

  const paused = hovered || focused || tabHidden || dragging

  /* Autoplay — restarts whenever the slide changes, the pointer enters,
     focus moves in, or the tab is hidden. */
  useEffect(() => {
    if (reduced || paused) return undefined

    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % total)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [current, paused, reduced, total])

  /* Pause while the browser tab is in the background. */
  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden)
    onVisibility()
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const goTo = (index) => setCurrent(((index % total) + total) % total)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(current - 1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(current + 1)
    }
  }

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    draggingRef.current = true
    dragStart.current = event.clientX
    setDragging(true)

    try {
      event.currentTarget.setPointerCapture(event.pointerId)
    } catch {
      /* pointer capture is best-effort */
    }
  }

  const endDrag = (clientX) => {
    if (!draggingRef.current) return
    draggingRef.current = false
    setDragging(false)

    const delta = clientX - dragStart.current
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    goTo(delta < 0 ? current + 1 : current - 1)
  }

  const handlePointerUp = (event) => endDrag(event.clientX)

  const handlePointerCancel = () => {
    draggingRef.current = false
    setDragging(false)
  }

  return (
    <section className="section testimonials" id="testimonials" aria-labelledby="tstTitle">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Client voices"
          id="tstTitle"
          title={
            <>
              The people who wear <em>our work.</em>
            </>
          }
          lede="Retailers, brides and buyers in 34 countries. Here is what they said after the invoice cleared."
        />

        <div
          className="tst"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
          }}
          onKeyDown={handleKeyDown}
        >
          <div
            className="tst__viewport"
            ref={viewportRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            <div
              className="tst__track"
              style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
            >
              {TESTIMONIALS.map((item, index) => (
                <div
                  className="tst__slide"
                  key={item.name}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${total}`}
                  inert={index !== current}
                >
                  <Stars />

                  {/* The surrounding spaces sit between the quote and the
                      decorative quote marks, exactly as in the reference. */}
                  <blockquote className="tst__quote">{' '}{item.quote}{' '}</blockquote>

                  <div className="tst__author">
                    <span className="tst__avatar" aria-hidden="true">
                      {item.initials}
                    </span>
                    <span>
                      <span className="tst__name">{item.name}</span>
                      <span className="tst__role">{item.role}</span>
                    </span>
                    <span className="tst__loc">{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tst__ctrl">
            <button
              className="tst__btn"
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(current - 1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 5 8 12l7 7" />
              </svg>
            </button>

            <div className="tst__dots" role="group" aria-label="Choose testimonial">
              {TESTIMONIALS.map((item, index) => (
                <button
                  className="tst__dot"
                  key={item.name}
                  type="button"
                  aria-label={`Testimonial ${index + 1}`}
                  aria-current={index === current ? 'true' : undefined}
                  onClick={() => goTo(index)}
                ></button>
              ))}
            </div>

            <button
              className="tst__btn"
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(current + 1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="visually-hidden" role="status" aria-live="polite">
            Testimonial {current + 1} of {total}
          </p>
        </div>

        <TrustBadges />
      </div>
    </section>
  )
}
