import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const Clients = () => {
  const clients = [
    {
      name: 'Duncan',
      imageSlug: '/images/clients/duncan.png',
      styling: {
        mt: 1.4,
        textAlign: 'center',
        imageWidth: 200,
        imageHeight: 60
      }
    },
    {
      name: 'Woohoop',
      imageSlug: '/images/clients/woohoop.png',
      styling: {
        mt: 1.2,
        textAlign: 'center',
        imageWidth: 100,
        imageHeight: 60
      }
    },
    {
      name: 'Strike0',
      imageSlug: '/images/clients/strikeo.png',
      styling: {
        mt: 0,
        textAlign: 'center',
        imageWidth: 100,
        imageHeight: 80
      }
    },
    {
      name: 'C3X',
      imageSlug: '/images/clients/c3x.png',
      styling: {
        mt: 1.2,
        textAlign: 'center',
        imageWidth: 100,
        imageHeight: 60
      }
    },
    {
      name: 'Strike0',
      imageSlug: '/images/clients/strikeo.png',
      styling: {
        mt: 0,
        textAlign: 'center',
        imageWidth: 100,
        imageHeight: 80
      }
    },
    {
      name: 'C3X',
      imageSlug: '/images/clients/c3x.png',
      styling: {
        mt: 1.2,
        textAlign: 'center',
        imageWidth: 100,
        imageHeight: 60
      }
    },
    {
      name: 'Strike0',
      imageSlug: '/images/clients/strikeo.png',
      styling: {
        mt: 0,
        textAlign: 'center',
        imageWidth: 100,
        imageHeight: 80
      }
    },
    {
      name: 'C3X',
      imageSlug: '/images/clients/c3x.png',
      styling: {
        mt: 1.2,
        textAlign: 'center',
        imageWidth: 100,
        imageHeight: 60
      }
    }
  ]

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
          slidesToShow: 1,
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
            <Image
              src={client.imageSlug}
              alt={client.name}
              width={client.styling.imageWidth}
              height={client.styling.imageHeight}
            />
          </Grid>
        ))}
      </Slider>
    </Box>
  )
}

export default Clients
