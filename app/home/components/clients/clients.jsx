import { clients } from '@/app/constants'
import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    // <Grid container columns={16} px={24} py={4}>
    <Box py={4} sx={{ width: '90%', margin: 'auto' }}>
      <Slider {...settings}>
        {clients.map((client, i) => (
          <Grid
            key={i}
            item
            mt={client.styling.mt}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            // sx={{ textAlign: client.styling.textAlign }}
          >
            <Box sx={{ width: '55%', marginInline: 'auto' }}>
              <Image
                src={client.imageSlug}
                alt={client.name}
                sizes='100vw'
                width={0}
                height={0}
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              />
            </Box>
          </Grid>
        ))}
      </Slider>
    </Box>
  )
}

export default Clients
