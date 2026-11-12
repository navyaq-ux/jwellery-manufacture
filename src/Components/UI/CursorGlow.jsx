import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import './CursorGlow.css'

/** Soft gold glow that trails the pointer on fine-pointer desktops. */
export default function CursorGlow() {
  const glowRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return undefined

    const glow = glowRef.current
    if (!glow) return undefined

    let gx = 0
    let gy = 0
    let tx = 0
    let ty = 0
    let frameId = null

    const tick = () => {
      gx += (tx - gx) * 0.12
      gy += (ty - gy) * 0.12
      glow.style.transform = `translate3d(${gx.toFixed(1)}px,${gy.toFixed(1)}px,0)`

      if (Math.abs(tx - gx) > 0.6 || Math.abs(ty - gy) > 0.6) {
        frameId = window.requestAnimationFrame(tick)
      } else {
        frameId = null
      }
    }

    const onMove = (event) => {
      tx = event.clientX
      ty = event.clientY
      glow.classList.add('is-on')
      if (!frameId) frameId = window.requestAnimationFrame(tick)
    }

    const onLeave = () => glow.classList.remove('is-on')

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [reduced])

  return <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
}
