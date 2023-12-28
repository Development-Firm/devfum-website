import React from 'react'
import Wrapper from '../global/wrapper'
import { Box, Grid, Typography } from '@mui/material'
import { GradientText } from '@/app/themes/themes'
import Image from 'next/image'
import { industries } from '@/app/constants'

const Industries = () => {
  return (
    <Wrapper>
      <Box sx={{ marginBlock: '1.5rem' }}>
        <Typography sx={{ display: 'inline', fontSize: '40px' }}>
          Empowering
        </Typography>
        <GradientText
          variant='h2'
          sx={{ marginInline: '10px', display: 'inline' }}
        >
          Business
        </GradientText>
        <Typography sx={{ display: 'inline', fontSize: '40px' }}>
          across
        </Typography>
      </Box>

      <Grid container columns={16}>
        {industries.map((industry, i) => (
          <Grid key={i} item xs={8} sm={4} my={5}>
            <Box
              sx={{
                '&:hover': {
                  // Add your hover styles here
                  cursor: 'pointer',
                  transform: 'scale(1.05)',
                  color: 'rgba(30,205,247,1)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Image
                  src={industry.imageSlug}
                  alt={industry.name}
                  width={150}
                  height={150}
                />
              </Box>
              <Typography sx={{ textAlign: 'center', fontSize: '1.2rem' }}>
                {industry.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Industries
