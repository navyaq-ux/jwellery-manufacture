import './Brand.css'

/** Wordmark + diamond monogram, reused in the navbar and footer. */
export default function Brand({ className = '', style }) {
  return (
    <a
      className={`brand ${className}`.trim()}
      href="#home"
      aria-label="Aurelia Crafts — back to top"
      style={style}
    >
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" width="26" height="26">
          <path
            d="M20 6l11 8-11 20L9 14z"
            stroke="#C9A24B"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path
            d="M9 14h22M20 6l-5 8 5 20 5-20-5-8z"
            stroke="#C9A24B"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="brand__text">
        <span className="brand__name">
          Aurelia<span>.</span>
        </span>
        <span className="brand__sub">Crafts · Jaipur</span>
      </span>
    </a>
  )
}
