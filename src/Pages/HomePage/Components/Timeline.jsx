import { TIMELINE } from '../../../data/timeline'
import './Timeline.css'

export default function Timeline() {
  return (
    <ol className="timeline">
      {TIMELINE.map((item, index) => (
        <li className="tl" key={item.year} style={{ '--delay': `${index * 90}ms` }}>
          <span className="tl__dot" aria-hidden="true"></span>
          <p className="tl__year">{item.year}</p>
          <h4 className="tl__title">{item.title}</h4>
          <p className="tl__text">{item.text}</p>
        </li>
      ))}
    </ol>
  )
}
