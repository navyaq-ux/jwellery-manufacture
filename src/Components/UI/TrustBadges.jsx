import { TRUST_BADGES } from '../../data/trustBadges'
import './TrustBadges.css'

const ICONS = {
  hallmark: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 6 21l6-3 6 3-2.5-7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 6v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3c4 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2-6 6-10z" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),
  box: (
    <>
      <path d="M20 7 12 3 4 7v10l8 4 8-4z" />
      <path d="m4 7 8 4 8-4M12 21V11" />
    </>
  ),
  recycle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5h4a2.5 2.5 0 0 1 0 5h-4" />
    </>
  ),
}

function BadgeIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

/** Certification strip shown beneath the testimonial carousel. */
export default function TrustBadges() {
  return (
    <div className="trust" data-reveal>
      <p className="trust__title">Certifications &amp; standards we ship under</p>
      <ul className="trust__grid">
        {TRUST_BADGES.map((badge) => (
          <li className="badge" key={badge.id}>
            <BadgeIcon name={badge.icon} />
            <span>
              <b>{badge.title}</b>
              <span>{badge.subtitle}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
