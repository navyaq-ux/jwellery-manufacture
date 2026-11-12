import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import CursorGlow from '../Components/UI/CursorGlow'
import BackToTop from '../Components/UI/BackToTop'

export default function Layout() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <CursorGlow />
      <Navbar />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
