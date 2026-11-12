import useScrolled from '../../hooks/useScrolled'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import './BackToTop.css'

export default function BackToTop() {
  const visible = useScrolled(620)
  const reduced = usePrefersReducedMotion()

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      className={`to-top${visible ? ' is-on' : ''}`}
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
