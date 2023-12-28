'use client'
import Image from 'next/image'
import Navbar from './components/navbar/navbar'
import Landing from './components/landing/landing'
import { LandingWrapper } from './themes/themes'
import Clients from './components/clients/clients'
import { useEffect, useState } from 'react'
import Services from './components/services/services'
import Industries from './components/industries/industries'
import Reviews from './components/reviews/reviews'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

export default function Home () {
  const [scrolled, setScrolled] = useState(false)
  const navItems = [
    { route: 'Home', type: 'scroll' },
    { route: 'Portfolio', type: 'navigatable' },
    { route: 'Blogs', type: 'navigatable' },
    { route: 'Contact', type: 'scroll' }
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
