import { PULL_QUOTE, STORY_FACTS, STORY_PARAGRAPHS } from '../../../data/story'
import Timeline from './Timeline'
import ProcessStepper from './ProcessStepper'
import OurRecentProjects from './OurRecentProjects'
import mediaLead from '../../../assets/images/atelier-jewelry-making.jpg'
import mediaInset from '../../../assets/images/atelier-craftsmanship.jpg'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <section className="section story" id="story" aria-labelledby="storyTitle">
      <div className="container">
        <div className="story__grid">
          <div className="story__copy" data-reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="section__title" id="storyTitle">
              A family bench that never became a factory.
            </h2>

            {STORY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}

            <ul className="story__facts">
              {STORY_FACTS.map((fact) => (
                <li className="fact" key={fact.label}>
                  <b>{fact.value}</b>
                  <span>{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="story__side">
            <figure className="story__media" data-reveal>
              <div className="story__media-frame">
                <img
                  className="story__media-lead"
                  src={mediaLead}
                  alt="A jeweller shaping a gold piece at a workbench in the Jaipur atelier"
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="story__media-inset"
                  src={mediaInset}
                  alt="Close view of hand craftsmanship on a gold setting"
                  width="800"
                  height="1066"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="story__media-cap">
                The bench · Johari Bazaar, Jaipur
              </figcaption>
            </figure>

            <figure className="pullquote" data-reveal style={{ '--delay': '120ms' }}>
              <p>{PULL_QUOTE.text}</p>
              <cite>{PULL_QUOTE.cite}</cite>
            </figure>
          </div>
        </div>

        <div className="story__block">
          <h3 className="story__sub" data-reveal>
            Twenty-eight years on the bench
          </h3>
          <Timeline />
        </div>

        <div className="story__block">
          <h3 className="story__sub" data-reveal>
            The craft process
          </h3>
          <ProcessStepper />
        </div>

        <OurRecentProjects />
      </div>
    </section>
  )
}
