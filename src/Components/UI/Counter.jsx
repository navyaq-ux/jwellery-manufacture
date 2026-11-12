import useCountUp from '../../hooks/useCountUp'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

/** Animated figure used in the hero stats strip. */
export default function Counter({ value, suffix = '' }) {
  const reduced = usePrefersReducedMotion()
  const [ref, display] = useCountUp(value, suffix, reduced)

  return (
    <span className="stat__num" ref={ref}>
      {display}
    </span>
  )
}
