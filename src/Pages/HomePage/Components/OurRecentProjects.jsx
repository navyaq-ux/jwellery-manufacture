import { GALLERY } from '../../../data/gallery'
import './OurRecentProjects.css'

/** "Signature work" gallery that closes the story section. */
export default function OurRecentProjects() {
  return (
    <div className="story__block">
      <div className="gallery__head" data-reveal>
        <h3 className="story__sub">Signature work</h3>
        <p className="gallery__lede">
          Four pieces from the last bench cycle — weighed, hallmarked and photographed in our own
          studio before they were packed for three different continents.
        </p>
      </div>

      <div className="gallery">
        {GALLERY.map((item, index) => (
          <figure
            className="gallery__item"
            key={item.id}
            data-reveal
            style={index === 0 ? undefined : { '--delay': `${index * 80}ms` }}
          >
            <img
              src={item.image}
              alt={item.alt}
              width="800"
              height="1200"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="gallery__cap">
              <b>{item.title}</b>
              <span>{item.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
