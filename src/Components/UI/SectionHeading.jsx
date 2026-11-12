/**
 * Section header: eyebrow, serif title (may contain <em>), optional lede.
 */
export default function SectionHeading({ eyebrow, title, lede, id, center = false }) {
  return (
    <header
      className="section__head"
      data-reveal
      style={center ? { marginInline: 'auto', textAlign: 'center' } : undefined}
    >
      <p className="eyebrow" style={center ? { justifyContent: 'center' } : undefined}>
        {eyebrow}
      </p>
      <h2 className="section__title" id={id}>
        {title}
      </h2>
      {lede ? (
        <p className="section__lede" style={center ? { marginInline: 'auto' } : undefined}>
          {lede}
        </p>
      ) : null}
    </header>
  )
}
