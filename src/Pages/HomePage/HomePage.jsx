import HeroSection from './Components/HeroSection'
import OurServices from './Components/OurServices'
import AboutUs from './Components/AboutUs'
import Testimonials from './Components/Testimonials'
import useScrollReveal from '../../hooks/useScrollReveal'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

export default function HomePage() {
  const reduced = usePrefersReducedMotion()
  useScrollReveal(reduced)

  return (
    <>
      <HeroSection />
      <OurServices />
      <AboutUs />
      <Testimonials />
    </>
  )
}
