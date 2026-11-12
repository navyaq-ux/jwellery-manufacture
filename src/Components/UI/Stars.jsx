const STAR_PATH =
  'm12 2 3 6.6 7.2.9-5.3 4.9 1.4 7.1L12 17.9 5.7 21.5l1.4-7.1L1.8 9.5 9 8.6z'

/** Five gold stars with an accessible rating label. */
export default function Stars({ label = 'Rated 5 out of 5' }) {
  return (
    <div className="tst__stars" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  )
}
