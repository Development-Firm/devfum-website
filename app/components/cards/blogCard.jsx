'use client'
import { CardButton } from '@/app/themes/themes'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Tilt } from 'react-tilt'
import { Eye } from '../icons/icons'

const BlogCard = ({ blog }) => {
  return (
    <Tilt>
      <Card>
        <CardContent>
          <Box sx={{ marginBottom: '1.5rem' }}>
            <Image
              src={blog.imageSlug}
              alt={blog.title}
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box px={2}>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              sx={{
                backgroundColor: 'rgba(56, 77, 98, 0.1)',
                borderRadius: '5px',
                width: '40%',
                marginInline: 'auto',
                color: 'black',
                textAlign: 'center',
                fontSize: '13px',
                paddingBlock: '0.7rem'
              }}
            >
              {blog.category}
            </Typography>
            <Typography
              gutterBottom
              variant='h6'
              sx={{ fontWeight: 'bold', textAlign: 'center' }}
              component='div'
            >
              {blog.title}
            </Typography>

            <Typography
              gutterBottom
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                color: 'rgba(56, 77, 98, 0.7)'
              }}
              component='div'
            >
              {blog.author}
            </Typography>
            <Divider />
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              spacing={2}
              pt={1}
            >
              <Typography
                sx={{
                  color: 'rgba(56, 77, 98, 0.4)',
                  fontSize: '13px',
                  marginTop: '10px'
                }}
              >
                {new Date(blog.date).toLocaleDateString()}
              </Typography>
              <Stack direction='row'>
                <Eye
                  style={{
                    color: 'rgba(56, 77, 98, 0.4)',
                    fontSize: '16px',
                    marginRight: '4px',
                    marginTop: '1.5px'
                  }}
                />
                <Typography
                  sx={{
                    color: 'rgba(56, 77, 98, 0.4)',
                    fontSize: '13px'
                  }}
                >
                  {blog.views}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Tilt>
  )
}

export default BlogCard
