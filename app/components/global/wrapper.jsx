import { Box } from '@mui/material'
import React from 'react'

const Wrapper = ({ children, sx }) => {
  return (
    <Box px={14} sx={{ ...sx }}>
      {children}
    </Box>
  )
}

export default Wrapper
