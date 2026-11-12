import { useEffect } from 'react'

/**
 * Reveals every `[data-reveal]` element (and timeline milestone `.tl`)
 * once it enters the viewport.
 */
export default function useScrollReveal(reduced) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal], .tl'))

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [reduced])
}
