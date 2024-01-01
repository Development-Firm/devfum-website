import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
  useTheme
} from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import Wrapper from '../../../components/global/wrapper'
import { GradientText, ReviewsCard } from '@/app/themes/themes'
import Image from 'next/image'
import { reviews } from '@/app/constants'

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  const theme = useTheme()

  const avatarResponsiveness = {
    [theme.breakpoints.down('sm')]: {
      width: 100,
      height: 100,
      marginTop: '10px'
    }
  }

  return (
    <Wrapper>
      <Box sx={{ marginBlock: '1.5rem' }}>
        <Typography sx={{ display: 'inline', fontSize: '40px' }}>
          One of the best
        </Typography>
        <GradientText
          variant='h2'
          sx={{ marginInline: '10px', display: 'inline' }}
        >
          Clients
        </GradientText>
        <Typography sx={{ display: 'inline', fontSize: '40px' }}>
          of Devfum
        </Typography>
      </Box>
      <Box sx={{ width: '90%', marginInline: 'auto' }}>
        <Slider {...settings} id='reviews_slider'>
          {reviews.map((review, i) => (
            <ReviewsCard key={i}>
              <CardContent>
                <Grid container columns={16}>
                  <Grid item xs={16} md={13}>
                    <Image
                      src='/images/quotes.png'
                      alt='quotes'
                      height={20}
                      width={20}
                    />
                    <Typography variant='h3'>{review.name}</Typography>
                    <Typography
                      sx={{
                        color: 'rgba(56, 77, 98, 0.6)',
                        fontSize: '1.2rem'
                      }}
                    >
                      {review.title}
                    </Typography>
                    <Typography>{review.comment}</Typography>
                  </Grid>
                  <Grid item xs={16} md={3} pl={2}>
                    <Avatar
                      alt={review.name}
                      src={review.imageSlug}
                      sx={{
                        width: 150,
                        height: 150,
                        marginInline: 'auto',
                        ...avatarResponsiveness
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </ReviewsCard>
          ))}
        </Slider>
      </Box>
    </Wrapper>
  )
}

export default Reviews
