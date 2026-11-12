import { useRef, useState } from 'react'
import Button from './Button'
import './Newsletter.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/

const EMPTY_MESSAGE = { text: '', type: '' }

/** "The Aurum Letter" subscribe form with inline validation. */
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(EMPTY_MESSAGE)
  const [invalid, setInvalid] = useState(false)
  const inputRef = useRef(null)

  const showError = (text) => {
    setMessage({ text, type: 'is-err' })
    setInvalid(true)
    inputRef.current?.focus()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = email.trim()

    if (!value) {
      showError('Please enter your email address.')
      return
    }

    if (!EMAIL_RE.test(value)) {
      showError('That email does not look right — could you check it for a typo?')
      return
    }

    setInvalid(false)
    setMessage({
      text: 'Welcome to the Aurelia circle — your first collection brief lands on Friday.',
      type: 'is-ok',
    })
    setEmail('')
  }

  const handleChange = (event) => {
    setEmail(event.target.value)
    if (invalid) {
      setInvalid(false)
      setMessage(EMPTY_MESSAGE)
    }
  }

  return (
    <div className="news" data-reveal>
      <div>
        <h3 className="news__title">The Aurum Letter</h3>
        <p className="news__text">
          One email a month: new collection drops, trade pricing, and the occasional note from the
          workshop floor. No noise, and we never share your address.
        </p>
      </div>

      <form className="news__form" noValidate onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="newsEmail">
          Email address
        </label>
        <input
          ref={inputRef}
          type="email"
          id="newsEmail"
          name="email"
          placeholder="you@atelier.com"
          autoComplete="email"
          aria-describedby="newsMsg"
          aria-invalid={invalid || undefined}
          value={email}
          onChange={handleChange}
          required
        />
        <Button type="submit">Subscribe</Button>
        <p
          className={`news__msg${message.type ? ` ${message.type}` : ''}`}
          id="newsMsg"
          role="status"
          aria-live="polite"
        >
          {message.text}
        </p>
      </form>
    </div>
  )
}
