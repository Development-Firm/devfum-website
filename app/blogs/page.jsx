'use client'
import React from 'react'
import Navbar from '../components/navbar/navbar'
import Wrapper from '../components/global/wrapper'
import { Grid, Typography } from '@mui/material'
import Footer from '../components/footer/footer'
import { GradientText } from '../themes/themes'
import BlogCard from '../components/cards/blogCard'
import { blogs } from '../constants'

const Blogs = () => {
  const navItems = [
    { route: '/', type: 'navigatable' },
    { route: 'Portfolio', type: 'navigatable' },
    { route: 'Blogs', type: 'navigatable' }
  ]

  return (
    <>
      <Navbar navItems={navItems} />
      <Wrapper sx={{ paddingTop: '150px' }}>
        <Typography
          sx={{
            marginLeft: '10px',
            marginBottom: '5px',
            display: 'inline',
            fontSize: '50px',
            fontWeight: 'bold'
          }}
        >
          Our
        </Typography>
        <GradientText
          variant='h2'
          sx={{ display: 'inline', marginLeft: '10px' }}
        >
          Blogs
        </GradientText>

        <Grid container columns={16} my={2}>
          {blogs.map((blog, i) => (
            <Grid key={i} item xs={8} sm={4} mb={5} px={3}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Blogs
