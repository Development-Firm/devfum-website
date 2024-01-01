import { CardButton } from '@/app/themes/themes'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Tilt } from 'react-tilt'

const ServiceCard = ({ service }) => {
  return (
    <Tilt>
      <Card>
        <CardContent sx={{ padding: '1rem' }}>
          <Box sx={{ marginBottom: '1.5rem' }}>
            <Image
              src={service.imageSlug}
              alt={service.title}
              width={150}
              height={150}
              style={{ marginInline: 'auto' }}
            />
          </Box>
          <Typography gutterBottom variant='h5' component='div'>
            {service.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {service.description}
          </Typography>
        </CardContent>
        <CardActions>
          <CardButton>Learn more</CardButton>
        </CardActions>
      </Card>
    </Tilt>
  )
}

export default ServiceCard
