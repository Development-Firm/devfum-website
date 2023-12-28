import React from 'react'
import styles from './landing.module.css'
import { Box, Button, Grid, Typography } from '@mui/material'
import {
  GradientButton,
  GradientText,
  LandingWrapper
} from '@/app/themes/themes'
import ThreeDText from '../canvas/Text/threeDText'
import Wrapper from '../global/wrapper'
import Image from 'next/image'
import { Tilt } from 'react-tilt'

const Landing = () => {
  return (
    <Wrapper id='Home'>
      <section id='Home'>
        <Grid container spacing={2} columns={16} sx={{ paddingTop: '140px' }}>
          <Grid item xs={16} sm={8}>
            <Typography
              variant='h2'
              sx={{ marginBottom: '-27px', fontWeight: 'bold', color: 'white' }}
            >
              THE
            </Typography>
            <GradientText variant='h1'>FUTURE</GradientText>
            <Typography
              variant='h2'
              sx={{ marginTop: '-27px', fontWeight: 'bold', color: 'white' }}
            >
              IS HERE
            </Typography>

            <Box>
              <GradientButton
                variant='contained'
                sx={{ paddingInline: '30px', marginTop: '10px' }}
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
            </Typography>
          </Grid>
          <Grid item xs={16} sm={8}>
            <Box sx={{ paddingLeft: '14rem' }}>
              <Tilt
                options={{
                  speed: 2000,
                  easing: 'cubic-bezier(.03,.98,.52,.99)'
                }}
              >
                <Image
                  src='/images/logo.gif'
                  alt='logo'
                  width={400}
                  height={550}
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
