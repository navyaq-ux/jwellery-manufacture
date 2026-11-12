import { useEffect, useRef, useState } from 'react'

/**
 * Counts from 0 to `target` the first time the returned ref enters the
 * viewport. Returns [ref, formattedValue].
 */
export default function useCountUp(target, suffix = '', reduced = false) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (reduced || !('IntersectionObserver' in window)) return undefined

    const element = ref.current
    if (!element) return undefined

    let frameId = 0
    let started = null
    const DURATION = 1900

    const frame = (timestamp) => {
      if (started === null) started = timestamp
      const progress = Math.min((timestamp - started) / DURATION, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setValue(Math.round(target * eased))
      if (progress < 1) frameId = requestAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.disconnect()
          frameId = requestAnimationFrame(frame)
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [target, reduced])

  const shown = reduced ? target : value
  const display = `${shown.toLocaleString('en-US')}${suffix}`
  return [ref, display]
}
