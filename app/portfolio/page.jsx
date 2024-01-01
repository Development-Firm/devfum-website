'use client'
import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/footer'
import Wrapper from '../components/global/wrapper'
import PortfolioCard from './components/portfolioCard'
import { portfolios } from '../constants'

const Portfolio = () => {
  const navItems = [
    { route: '/', type: 'navigatable' },
    { route: 'Portfolio', type: 'navigatable' },
    { route: 'Blogs', type: 'navigatable' },
    { route: 'Configurators', type: 'navigatable' }
  ]

  return (
    <>
      <Navbar navItems={navItems} />
      <Wrapper sx={{ paddingTop: '150px' }}>
        {portfolios.map((portfolio, i) => (
          <Box key={i} sx={{ paddingBottom: '4rem' }}>
            <PortfolioCard portfolio={portfolio} />
          </Box>
        ))}
      </Wrapper>
      <Footer />
    </>
  )
}

export default Portfolio
