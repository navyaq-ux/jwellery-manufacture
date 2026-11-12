const ICONS = {
  pen: (
    <>
      <path d="M3 17.5 15.5 5a2.1 2.1 0 013 3L6 20.5 2.5 21z" />
      <path d="M13.5 7 17 10.5" />
      <path d="M2.5 21 7 19.5" />
    </>
  ),
  layers: (
    <>
      <path d="M3 8.5 12 4l9 4.5-9 4.5z" />
      <path d="M3 13l9 4.5L21 13" />
      <path d="M3 17.5 12 22l9-4.5" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20" />
      <path d="M12 3 7 9l5 12 5-12-5-6z" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 6 21l6-3 6 3-2.5-7" />
      <path d="m10 9 1.5 1.5L14.5 7" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.5 4.5a4.5 4.5 0 0 0 5.9 5.9L9 21.8 2.2 15l11.4-11.4z" />
      <path d="m13 6 5 5" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 12.6 12 21.2a2 2 0 0 1-2.8 0L3.4 15.4a2 2 0 0 1 0-2.8L12 3.4l5.7 5.7a3 3 0 0 1 2.9 3.5z" />
      <circle cx="7.8" cy="7.8" r="1.4" />
    </>
  ),
}

/** Line icon for a service category. */
export default function ServiceIcon({ name }) {
  return (
    <div className="svc__icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICONS[name]}
      </svg>
    </div>
  )
}
