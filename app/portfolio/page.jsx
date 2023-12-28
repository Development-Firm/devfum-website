'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Wrapper from '../components/global/wrapper'
import PortfolioCard from '../components/cards/portfolioCard'
import { portfolios } from '../constants'

const Portfolio = () => {
  const navItems = [
    { route: '/', type: 'navigatable' },
    { route: 'Portfolio', type: 'navigatable' },
    { route: 'Blogs', type: 'navigatable' }
  ]

  return (
    <>
      <Navbar navItems={navItems} />
      <Wrapper sx={{ paddingTop: '150px' }}>
        {portfolios.map((portfolio, i) => (
          <Box key={i} sx={{ maxHeight: '450px' }}>
            <PortfolioCard portfolio={portfolio} />
          </Box>
        ))}
      </Wrapper>
      <Footer />
    </>
  )
}

export default Portfolio
