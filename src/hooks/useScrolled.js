import { useEffect, useState } from 'react'

/** True once the page has scrolled past `threshold` pixels. */
export default function useScrolled(threshold) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop || 0
      setPast(y > threshold)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return past
}
