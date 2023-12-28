import React from 'react'
import Wrapper from '../global/wrapper'
import { Box, Grid, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import {
  GradientButton,
  GradientText,
  StyledTextField
} from '@/app/themes/themes'
import { motion } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string().required('Message is required')
})

const Contact = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <Wrapper sx={{ paddingBlock: '6rem' }}>
      <section id='Contact'>
        <Grid container columns={16}>
          <Grid item xs={false} sm={8}>
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              <Image
                src='/images/contactus.png'
                alt='contact'
                width={600}
                height={400}
              />
            </motion.div>
          </Grid>
          <Grid item xs={16} sm={8} pl={1}>
            <GradientText
              variant='h2'
              sx={{ marginRight: '10px', display: 'inline' }}
            >
              Contact
            </GradientText>
            <Typography sx={{ fontSize: '40px', display: 'inline' }}>
              us
            </Typography>
            <Box mt={2}>
              <form noValidate onSubmit={formik.handleSubmit}>
                <StyledTextField
                  fullWidth
                  id='name'
                  name='name'
                  label='Name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <StyledTextField
                  fullWidth
                  sx={{ marginTop: '1.2rem' }}
                  id='email'
                  name='email'
                  label='Email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <StyledTextField
                  fullWidth
                  multiline
                  rows={6}
                  sx={{ marginTop: '1.2rem' }}
                  id='message'
                  name='message'
                  label='Message'
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
                <GradientButton
                  variant='contained'
                  type='submit'
                  sx={{ mt: 2, paddingInline: '2rem' }}
                >
                  Submit
                </GradientButton>
              </form>
            </Box>
          </Grid>
        </Grid>
      </section>
    </Wrapper>
  )
}

export default Contact
