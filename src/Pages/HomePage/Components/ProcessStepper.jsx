import { cloneElement, useState } from 'react'
import { PROCESS_STEPS } from '../../../data/processSteps'
import './ProcessStepper.css'

const BASE_SVG = {
  viewBox: '0 0 320 200',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const VISUALS = [
  <svg {...BASE_SVG} key="design">
    <path d="M40 168h240" opacity=".25" />
    <path d="M40 140h240" opacity=".18" />
    <path d="M40 112h240" opacity=".12" />
    <path d="M70 46v122M120 46v122M170 46v122M220 46v122" opacity=".12" />
    <path d="M212 44l34 30-34 48-34-48z" />
    <path d="M178 74h68M212 44l-15 30 15 48 15-48z" />
    <circle cx="212" cy="74" r="3.2" fill="currentColor" stroke="none" />
    <path d="M62 162l14-6 62-62-8-8-62 62z" />
    <path d="M130 86l8 8" />
    <path d="M148 138h44M148 138l-8 12M148 138l-8-12" opacity=".7" />
  </svg>,
  <svg {...BASE_SVG} key="casting">
    <path d="M118 52h84l-11 44a31 31 0 0 1-62 0z" />
    <path d="M118 52c0-13 19-21 42-21s42 8 42 21" />
    <path d="M160 96v42" opacity=".85" />
    <path d="M150 138h20l6 26h-32z" />
    <path
      d="M232 148c13 10 19 21 15 33-3 9-12 11-15 4-3 8-12 6-15-3-4-12 3-24 15-34z"
      opacity=".9"
    />
    <path d="M232 148c7 7 11 14 9 21" opacity=".5" />
    <path d="M96 164h64" opacity=".35" />
    <path d="M84 164h8M164 164h8" />
  </svg>,
  <svg {...BASE_SVG} key="setting">
    <path d="M140 66l40 32-40 56-40-56z" />
    <path d="M100 98h80M140 66l-16 32 16 56 16-56z" />
    <path d="M140 154v22M180 154v22M100 154v22M180 98l16-14M100 98l-16-14" />
    <path d="M214 78l34-42" />
    <path d="M206 86l-8-8 12-12 8 8z" />
    <path d="M228 58l10-10" opacity=".6" />
    <circle cx="140" cy="98" r="3.4" fill="currentColor" stroke="none" />
  </svg>,
  <svg {...BASE_SVG} key="polishing">
    <circle cx="140" cy="96" r="56" />
    <circle cx="140" cy="96" r="40" opacity=".45" />
    <circle cx="140" cy="96" r="6" fill="currentColor" stroke="none" />
    <path d="M140 40v-12M140 164v-12M84 96H72M208 96h-12" />
    <path d="M200 36l16 16M200 156l16-16M84 36 68 52M84 156l-16-16" opacity=".5" />
    <path d="M246 70l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="currentColor" stroke="none" />
    <path
      d="M254 122l2.6 6.4L263 131l-6.4 2.6L254 140l-2.6-6.4L245 131l6.4-2.6z"
      fill="currentColor"
      stroke="none"
      opacity=".7"
    />
  </svg>,
  <svg {...BASE_SVG} key="quality">
    <circle cx="112" cy="82" r="42" />
    <circle cx="112" cy="82" r="30" opacity=".5" />
    <path d="M142 112l34 34" strokeWidth="3" />
    <path d="M118 82l12 12 22-24" opacity=".8" />
    <path d="M212 60h72M212 78h72M212 96h52M212 114h64" opacity=".55" />
    <path d="M212 132l10 10 18-20" opacity=".9" />
  </svg>,
]

export default function ProcessStepper() {
  const [active, setActive] = useState(0)
  const step = PROCESS_STEPS[active]

  const handleKeyDown = (event, index) => {
    let next = null

    if (event.key === 'ArrowRight') next = (index + 1) % PROCESS_STEPS.length
    if (event.key === 'ArrowLeft') next = (index - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = PROCESS_STEPS.length - 1
    if (next === null) return

    event.preventDefault()
    setActive(next)
    document.getElementById(`step-${next}`)?.focus()
  }

  return (
    <div className="process" data-reveal>
      <div className="process__steps" role="tablist" aria-label="Craft process stages">
        {PROCESS_STEPS.map((item, index) => (
          <button
            key={item.number}
            className="step"
            id={`step-${index}`}
            type="button"
            role="tab"
            aria-controls="processPanel"
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <i>{item.number}</i> {item.name}
          </button>
        ))}
      </div>

      <div
        className="process__panel"
        id="processPanel"
        role="tabpanel"
        aria-labelledby={`step-${active}`}
        tabIndex={0}
      >
        <div className="process__visual">
          {VISUALS.map((visual, index) =>
            cloneElement(visual, { hidden: index !== active }),
          )}
        </div>

        <div className="process__copy">
          <p className="process__eyebrow">
            Step {step.number} — {step.name}
          </p>
          <h4 className="process__title">{step.name}</h4>
          <p className="process__text">{step.text}</p>
          <ul className="process__points">
            {step.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
