import { useEffect, useState } from 'react'

/**
 * Self-typing / erasing headline. Mirrors the original timing:
 * 58 ms per character, 2.4 s hold, 24 ms erase, 340 ms between lines.
 */
export default function useTypewriter(lines, reduced) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (reduced) return undefined

    let lineIndex = 0
    let charIndex = 0
    let erasing = false
    let timer = 0

    const tick = () => {
      const line = lines[lineIndex]

      if (!erasing) {
        charIndex += 1
        setText(line.slice(0, charIndex))
        if (charIndex >= line.length) {
          erasing = true
          timer = window.setTimeout(tick, 2400)
          return
        }
        timer = window.setTimeout(tick, 58)
        return
      }

      charIndex -= 1
      setText(line.slice(0, charIndex))
      if (charIndex <= 0) {
        erasing = false
        lineIndex = (lineIndex + 1) % lines.length
        timer = window.setTimeout(tick, 340)
        return
      }
      timer = window.setTimeout(tick, 24)
    }

    timer = window.setTimeout(tick, 650)
    return () => window.clearTimeout(timer)
  }, [lines, reduced])

  return reduced ? lines[0] : text
}
