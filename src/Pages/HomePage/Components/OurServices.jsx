import { useEffect, useRef, useState } from 'react'
import { SERVICE_FILTERS, SERVICES } from '../../../data/services'
import SectionHeading from '../../../Components/UI/SectionHeading'
import ServiceIcon from '../../../Components/UI/ServiceIcon'
import './OurServices.css'

export default function OurServices() {
  const [filter, setFilter] = useState('all')
  const [openId, setOpenId] = useState(null)
  const [entering, setEntering] = useState([])
  const enterTimer = useRef(0)

  useEffect(() => () => window.clearTimeout(enterTimer.current), [])

  const matchesFilter = (service, value = filter) =>
    value === 'all' || service.tags.includes(value)

  const shownCount = SERVICES.filter((service) => matchesFilter(service)).length

  const handleFilter = (next) => {
    if (next === filter) return

    setFilter(next)
    setEntering(SERVICES.filter((service) => matchesFilter(service, next)).map((service) => service.id))

    window.clearTimeout(enterTimer.current)
    enterTimer.current = window.setTimeout(() => setEntering([]), 1000)
  }

  const status =
    filter === 'all'
      ? `Showing all ${SERVICES.length} services`
      : `Showing ${shownCount} of ${SERVICES.length} services for ${filter} clients`

  return (
    <section className="section services" id="services" aria-labelledby="servicesTitle">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          id="servicesTitle"
          title={
            <>
              Six crafts, <em>one bench.</em>
            </>
          }
          lede="Most houses do one thing well. We do all six — and we keep every stage in-house, so the person who draws your necklace is the same person who answers the phone when a clasp needs adjusting."
        />

        <div className="filters" role="group" aria-label="Filter services by client type">
          {SERVICE_FILTERS.map((option) => (
            <button
              key={option.id}
              className="filter"
              type="button"
              data-filter={option.id}
              aria-pressed={filter === option.id}
              onClick={() => handleFilter(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <p className="filters__status" role="status" aria-live="polite">
          {status}
        </p>

        <div className="cards">
          {SERVICES.map((service, index) => {
            const visible = matchesFilter(service)
            const isOpen = openId === service.id
            const classes = [
              'svc',
              visible ? '' : 'is-hidden',
              entering.includes(service.id) ? 'is-in' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <article
                key={service.id}
                className={classes}
                data-tags={service.tags.join(' ')}
                data-reveal
                style={{ '--delay': `${index * 80}ms` }}
              >
                <ServiceIcon name={service.icon} />
                <h3 className="svc__title">{service.title}</h3>
                <p className="svc__hook">{service.hook}</p>
                <p className="svc__desc">{service.description}</p>

                <div
                  className={`svc__more${isOpen ? ' is-open' : ''}`}
                  id={`svc-more-${service.id}`}
                >
                  <div>
                    <ul className="svc__list">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  className="svc__toggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`svc-more-${service.id}`}
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                >
                  <span className="svc__toggle-label">
                    {isOpen ? 'Hide details' : "What's included"}
                  </span>
                  <span className="svc__toggle-icon" aria-hidden="true"></span>
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
