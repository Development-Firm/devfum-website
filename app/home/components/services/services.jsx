import { Box, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import Wrapper from '../../../components/global/wrapper'
import { CardButton, GradientText } from '@/app/themes/themes'
import Image from 'next/image'
import Slider from 'react-slick'
import { Tilt } from 'react-tilt'
import ServiceCard from '../cards/serviceCard'
import { services } from '@/app/constants'

const Services = () => {
  const theme = useTheme()

  const paragraphResponsiveness = {
    [theme.breakpoints.down('sm')]: {
      marginInline: 'auto'
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Wrapper>
      <Grid container columns={16} py={2}>
        <Grid item xs={16} sm={10}>
          <GradientText variant='h2' sx={{ display: 'inline' }}>
            End to End
          </GradientText>
          <Typography
            sx={{
              marginLeft: '10px',
              marginBottom: '5px',
              display: 'inline',
              fontSize: '40px'
            }}
          >
            Digital
          </Typography>

          <Typography
            sx={{
              marginTop: '-15px',
              fontSize: '40px'
            }}
          >
            Solutions
          </Typography>

          <Typography
            sx={{
              fontSize: '14px',
              marginTop: '3rem',
              width: '70%',
              ...paragraphResponsiveness
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum totam
            mollitia, ex saepe voluptate dolorum quibusdam nobis quod nam! Eius
            perferendis eligendi saepe praesentium placeat.
          </Typography>

          <Box sx={{ width: '80%', marginInline: 'auto', marginTop: '2rem' }}>
            <Image
              sizes='100vw'
              width={0}
              height={0}
              style={{
                width: '100%',
                height: 'auto'
              }}
              alt='tablet'
              src='/images/tablet.png'
            />
          </Box>
        </Grid>
        <Grid item xs={16} sm={6}>
          <Box sx={{ width: '80%', marginInline: 'auto' }}>
            <Image
              sizes='100vw'
              width={0}
              height={0}
              style={{
                width: '100%',
                height: 'auto'
              }}
              alt='tablet'
              src='/images/mobile.png'
            />
          </Box>
        </Grid>
      </Grid>

      {/* <Grid container columns={16} py={2}> */}
      <Box mt={7} mb={2}>
        <Typography
          sx={{
            marginBottom: '5px',
            display: 'inline',
            fontSize: '40px'
          }}
        >
          Select the
        </Typography>
        <GradientText
          variant='h2'
          sx={{ display: 'inline', marginInline: '10px' }}
        >
          service
        </GradientText>
        <Typography
          sx={{
            marginBottom: '5px',
            display: 'inline',
            fontSize: '40px'
          }}
        >
          you need
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
            marginTop: '1rem',
            width: '60%',
            ...paragraphResponsiveness
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum totam
          mollitia, ex saepe voluptate dolorum quibusdam nobis quod nam! Eius
          perferendis eligendi saepe praesentium placeat.
        </Typography>

        <Slider {...settings}>
          {services.map((service, i) => (
            <Grid key={i} item my={5} px={2}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Slider>
      </Box>

      {/* </Grid> */}
    </Wrapper>
  )
}

export default Services
