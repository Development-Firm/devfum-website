'use client'

import styled from '@emotion/styled'
import {
  AppBar,
  Box,
  Button,
  Card,
  TextField,
  Typography,
  createTheme
} from '@mui/material'

export const theme = createTheme({
  palette: {
    background: {
      default: '#F1F4FA',
      main: '#F1F4FA',
      custom: 'rgba(153, 178, 198, 0.2)'
    },
    neutral: {
      main: '#FFFFFF'
    },
    primary: {
      main: '#3A36DB'
    },
    secondary: {
      main: '#FF69B4',
      medium: 'rgba(255, 105, 180, 0.7)',
      dim: 'rgba(255, 105, 180, 0.1)',
      lid: '#FF69B4',
      bg: 'rgba(255, 105, 180, 0.1)'
    },
    tertiary: {
      main: '#03A89E'
    },
    pink: {
      main: '#FF69B4'
    },
    danger: {
      main: '#C41C1C'
    },
    text: {
      primary: '#06152B',
      secondary: '#06152B',
      custom: '#3A36DB',
      dim: '#000',
      tag: 'rgba(0, 0, 0, 0.5)'
    }
  },
  typography: {
    fontFamily: 'Signika, sans-serif'
  },
  components: {
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'transparent',
    //       boxShadow: 'none'
    //     }
    //   }
    // },
    MuiInput: {
      defaultProps: {
        disableUnderline: true
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained'
      },
      styleOverrides: {
        // root: {
        //   textTransform: 'none',
        //   flexShrink: 0,
        //   borderRadius: 50,
        //   background:
        //     'linear-gradient(270deg, rgba(30,205,247,1) 0%, rgba(38,219,230,1) 35%, rgba(51,241,203,1) 100%)',
        //   color: 'rgba(56, 77, 98, 1)'
        // }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500
        }
      }
    }
  }
})

export const LandingWrapper = styled(Box)(({ props }) => {
  return {
    // background:
    //   'linear-gradient(124deg, rgba(87, 106, 123, 1) 0%, rgba(56, 77, 98, 1) 35%,rgba(31, 43, 56, 1) 100%)',
    // background: '#324353',
    background: '#334255',
    height: '100vh'
  }
})

export const GradientText = styled(Typography)(({ props }) => {
  return {
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    backgroundImage:
      'linear-gradient(180deg, rgba(30,205,247,1) 0%, rgba(38,219,230,1) 35%, rgba(51,241,203,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozBackgroundClip: 'text',
    MozTextFillColor: 'transparent',
    fontWeight: 'bold'
  }
})

export const CustomNavBar = styled(AppBar)(({ scrolled }) => {
  return {
    backgroundColor: '#324353',
    boxShadow: !scrolled && 'none'
  }
})

export const GradientButton = styled(Button)(() => {
  return {
    textTransform: 'none',
    flexShrink: 0,
    borderRadius: 50,
    background:
      'linear-gradient(270deg, rgba(30,205,247,1) 0%, rgba(38,219,230,1) 35%, rgba(51,241,203,1) 100%)',
    color: 'rgba(56, 77, 98, 1)'
  }
})

export const CardButton = styled(Button)(() => {
  return {
    background: 'none',
    borderRadius: '10px',
    border: 'none',
    color: 'rgba(56, 77, 98, 1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'none',
      borderBottom: '1px solid rgba(30,205,247,1) '
    }
  }
})

export const ReviewsCard = styled(Card)(() => {
  return {
    background: 'rgba(30, 204, 247, 0.37)',
    borderRadius: '30px',
    boxShadow: 'none',
    paddingInline: '4vw',
    paddingBlock: '3rem'
  }
})

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'rgba(30,205,247,1)' // Set your custom border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(30,205,247,1)' // Set your custom border color on focus
    }
  }
}))
