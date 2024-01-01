import { Box, useTheme } from '@mui/material'
import React from 'react'

const Wrapper = ({ children, sx }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        [theme.breakpoints.up('sm')]: {
          px: 4 // Apply different padding for screens larger than or equal to sm
        },
        [theme.breakpoints.up('md')]: {
          px: 5 // Apply different padding for screens larger than or equal to md
        },
        [theme.breakpoints.up('lg')]: {
          px: 10 // Apply different padding for screens larger than or equal to lg
        },
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center',
          px: 2 // Apply different padding for screens larger than or equal to lg
        },
        ...sx // Additional styles passed as props
      }}
    >
      {children}
    </Box>
  )
}

export default Wrapper
