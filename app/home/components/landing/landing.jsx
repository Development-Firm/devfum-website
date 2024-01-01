import React, { useEffect, useState } from 'react'
import styles from './landing.module.css'
import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import {
  GradientButton,
  GradientText,
  LandingWrapper
} from '@/app/themes/themes'
import Wrapper from '../../../components/global/wrapper'
import Image from 'next/image'
import { Tilt } from 'react-tilt'

const Landing = () => {
  const theme = useTheme()

  const textResponsiveness = {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '-14px',
      marginTop: '-14px'
    }
  }

  const buttonResponsiveness = {
    [theme.breakpoints.down('sm')]: {
      marginTop: '14px'
    }
  }

  return (
    <Wrapper>
      <section id='Home'>
        <Grid container spacing={2} columns={16} sx={{ paddingTop: '140px' }}>
          <Grid item xs={16} sm={8}>
            <Typography
              variant='h2'
              sx={{
                marginBottom: '-27px',
                fontWeight: 'bold',
                color: 'white',
                ...textResponsiveness
              }}
            >
              THE
            </Typography>
            <GradientText variant='h1'>FUTURE</GradientText>
            <Typography
              variant='h2'
              sx={{
                marginTop: '-27px',
                fontWeight: 'bold',
                color: 'white',
                ...textResponsiveness
              }}
            >
              IS HERE
            </Typography>

            <Box>
              <GradientButton
                variant='contained'
                sx={{
                  paddingInline: '30px',
                  marginTop: '10px',
                  zIndex: 2,
                  ...buttonResponsiveness
                }}
              >
                Learn More
              </GradientButton>
            </Box>
            <Typography mt={12} sx={{ color: 'white', fontSize: '12px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quidem labore sunt voluptatum repellendus magnam pariatur deserunt
              adipisci, aspernatur eligendi fugiat, modi beatae optio? Quibusdam
              nihil exercitationem, aliquid quos atque aperiam nam dignissimos
              nobis ratione id repudiandae impedit numquam ea at iusto nisi
              architecto hic vel, perspiciatis sunt tempora reiciendis eos
              soluta. Quisquam consequatur debitis corrupti quidem est vel quo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quidem labore sunt voluptatum repellendus magnam pariatur deserunt
              adipisci, aspernatur eligendi fugiat, modi beatae optio? Quibusdam
              nihil exercitationem, aliquid quos atque aperiam nam dignissimos
              nobis ratione id repudiandae impedit numquam ea at iusto nisi
              architecto hic vel, perspiciatis sunt tempora reiciendis eos
              soluta. Quisquam consequatur debitis corrupti quidem est vel quo.
            </Typography>
          </Grid>
          <Grid
            item
            sm={8}
            sx={{ zIndex: 200 }}
            display={{ xs: 'none', sm: 'block' }}
          >
            <Box sx={{ width: '55%', marginInline: 'auto' }}>
              <Tilt
                options={{
                  speed: 2000,
                  easing: 'cubic-bezier(.03,.98,.52,.99)'
                }}
              >
                <Image
                  src='/images/logo.gif'
                  alt='logo'
                  sizes='100vw'
                  width={0}
                  height={0}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </Tilt>
            </Box>
          </Grid>
        </Grid>
      </section>
    </Wrapper>
  )
}

export default Landing
