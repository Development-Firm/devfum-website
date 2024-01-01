import { GradientText } from '@/app/themes/themes'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ExplainationCard = ({ benifit, index }) => {
  return (
    <Grid
      container
      columns={16}
      mb={5}
      key={index}
      sx={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
    >
      <Grid item xs={16} sm={12}>
        <Box>
          <Typography sx={{ display: 'inline' }}>
            {benifit.title.normalText}
          </Typography>
          <GradientText sx={{ display: 'inline', marginLeft: '6px' }}>
            {benifit.title.gradientText}
          </GradientText>
        </Box>
        <Typography
          mt={2}
          sx={{ fontSize: '13px', color: 'rgba(50, 67, 83, 0.6)' }}
        >
          {benifit.description}
        </Typography>
      </Grid>
      <Grid item xs={16} sm={4}>
        <Image
          src={benifit.imageSlug}
          alt={benifit.title.normalText + benifit.title.gradientText}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  )
}

export default ExplainationCard
