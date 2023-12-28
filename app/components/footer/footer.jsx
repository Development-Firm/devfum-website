import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Wrapper from '../global/wrapper'
import Link from 'next/link'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaSquareBehance } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box
      sx={{
        paddingTop: '3rem',
        paddingBottom: '0.4rem',
        backgroundColor: 'rgba(50, 67, 83, 0.1)'
      }}
    >
      <Wrapper>
        <Grid container columns={16}>
          <Grid item xs={16} sm={4}>
            <Typography variant='h6' mb={1}>
              Resources
            </Typography>

            <Link
              href=''
              style={{
                textDecoration: 'none',
                color: 'rgba(50, 67, 83, 0.9)'
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>Portfolio</Typography>
            </Link>
            <Link
              href=''
              style={{
                textDecoration: 'none',
                color: 'rgba(50, 67, 83, 0.9)'
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>Blogs</Typography>
            </Link>
            <Link
              href=''
              style={{
                textDecoration: 'none',
                color: 'rgba(50, 67, 83, 0.9)'
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>Metaverse</Typography>
            </Link>
            <Link
              href=''
              style={{
                textDecoration: 'none',
                color: 'rgba(50, 67, 83, 0.9)'
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>Configurators</Typography>
            </Link>
          </Grid>
          <Grid item xs={16} sm={4}>
            <Typography variant='h6' mb={1}>
              Solutions
            </Typography>
            <Link
              href=''
              style={{
                textDecoration: 'none',
                color: 'rgba(50, 67, 83, 0.9)'
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>
                Decentralized Apps
              </Typography>
            </Link>
            <Link
              href=''
              style={{
                textDecoration: 'none',
                color: 'rgba(50, 67, 83, 0.9)'
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>
                Artificial Intelligence
              </Typography>
            </Link>
            <Link
              href=''
              style={{
                textDecoration: 'none',
                color: 'rgba(50, 67, 83, 0.9)'
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>
                Saas Applications
              </Typography>
            </Link>
            <Link
              href=''
              style={{
                textDecoration: 'none',
                color: 'rgba(50, 67, 83, 0.9)'
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>
                Ecommerce integrations
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={16} sm={4}>
            <Typography variant='h6' mb={1}>
              Contact us
            </Typography>
            <Typography
              sx={{ fontSize: '14px', color: 'rgba(50, 67, 83, 0.9)' }}
            >
              contact@devfum.com
            </Typography>
            <Typography
              sx={{ fontSize: '14px', color: 'rgba(50, 67, 83, 0.9)' }}
            >
              +923 164246008
            </Typography>
          </Grid>
          <Grid item xs={16} sm={4}>
            <Typography variant='h6' mb={1}>
              Follow us
            </Typography>
            <Box>
              <FaFacebookSquare
                style={{
                  color: 'rgba(50, 67, 83, 0.9)',
                  marginRight: '5px',
                  fontSize: '1.5rem'
                }}
              />
              <FaLinkedin
                style={{
                  color: 'rgba(50, 67, 83, 0.9)',
                  marginRight: '5px',
                  fontSize: '1.5rem'
                }}
              />
              <FaSquareXTwitter
                style={{
                  color: 'rgba(50, 67, 83, 0.9)',
                  marginRight: '5px',
                  fontSize: '1.5rem'
                }}
              />
              <FaSquareBehance
                style={{
                  color: 'rgba(50, 67, 83, 0.9)',
                  marginRight: '5px',
                  fontSize: '1.5rem'
                }}
              />
              <FaYoutube
                style={{
                  color: 'rgba(50, 67, 83, 0.9)',
                  marginRight: '5px',
                  fontSize: '1.5rem'
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ marginTop: '2rem', marginBottom: '0.7rem' }} />
        <Typography
          variant='body2'
          color='rgba(50, 67, 83, 0.9)'
          align='center'
        >
          {'Copyright © '}
          <Link
            style={{ color: 'rgba(50, 67, 83, 0.9)', textDecoration: 'none' }}
            href='https://devfum.com/'
          >
            Devfum
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Wrapper>
    </Box>
  )
}

export default Footer
