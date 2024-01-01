'use client'
import Image from 'next/image'
import Navbar from './components/global/navbar'
import Landing from './home/components/landing/landing'
import { LandingWrapper } from './themes/themes'
import Clients from './home/components/clients/clients'
import { useEffect, useState } from 'react'
import Services from './home/components/services/services'
import Industries from './home/components/industries/industries'
import Reviews from './home/components/reviews/reviews'
import Contact from './home/components/contact/contact'
import Footer from './components/global/footer'
import StarsCanvas from './home/components/stars/stars'

export default function Home () {
  const [scrolled, setScrolled] = useState(false)
  const navItems = [
    { route: 'Home', type: 'scroll' },
    { route: 'Portfolio', type: 'navigatable' },
    { route: 'Blogs', type: 'navigatable' },
    { route: 'Contact', type: 'scroll' },
    { route: 'Configurators', type: 'navigatable' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll percentage
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100

      // Check if the scroll percentage is greater than 10%
      setScrolled(scrollPercentage > 10)
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <LandingWrapper>
        <Navbar navItems={navItems} scrolled={scrolled} />
        <div style={{ position: 'relative', zIndex: 0 }}>
          <StarsCanvas />
        </div>
        <Landing />
      </LandingWrapper>
      <Clients />
      <Services />
      <Industries />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}
