'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'
import CanvasLoader from '../../components/global/loader'
import { motion } from 'framer-motion'

const Computer = ({ isMobile, model }) => {
  const computer = useGLTF(`/models/${model}`)

  return (
    <mesh>
      <directionalLight position={[0, 0, 6]} intensity={10} />
      <directionalLight position={[0, 0, -6]} intensity={10} />
      <pointLight position={[0, 1, 1]} intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.037 : 0.045}
        position={isMobile ? [0, -2.6, 0] : [0, -3, 0]}
      />
    </mesh>
  )
}

const ComputerCanvas = ({ model }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = event => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 6, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} model={model} />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

const PortfolioCard = ({ portfolio }) => {
  const modelVariants = {
    hidden: { x: '-120vw' },
    visible: { x: 0, transition: { type: 'easeOut', duration: 2 } }
  }
  const contentVariants = {
    hidden: { x: '220vw' },
    visible: { x: 0, transition: { type: 'easeOut', duration: 2 } }
  }

  return (
    <Box>
      <Grid
        container
        columns={16}
        sx={{
          overflowX: 'hidden'
        }}
      >
        <Grid item xs={16} sm={16} md={6}>
          <motion.div
            variants={modelVariants}
            initial='hidden'
            animate='visible'
          >
            <Box sx={{ maxHeight: '450px', height: '450px' }}>
              <ComputerCanvas model={portfolio.model} />
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={16} sm={16} md={10}>
          <motion.div
            variants={contentVariants}
            initial='hidden'
            animate='visible'
          >
            <Typography
              variant='h3'
              sx={{
                marginBottom: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
            >
              {portfolio.name}
            </Typography>
            <Typography
              sx={{ marginBottom: '1rem', color: 'rgba(50, 67, 83, 0.725)' }}
            >
              {portfolio.description}
            </Typography>

            <Box sx={{ marginBottom: '1rem' }}>
              {portfolio.categories.map((cat, i) => (
                <Stack direction='row' spacing={3} key={i}>
                  <Typography>{cat.icon}</Typography>
                  <Typography
                    variant='h5'
                    sx={{ marginTop: '2rem !important' }}
                  >
                    {cat.name}
                  </Typography>
                </Stack>
              ))}
            </Box>

            <Stack direction='row' spacing={5}>
              {portfolio.technologies.map((tech, i) => (
                <Box key={i}>
                  <motion.div
                    whileHover={{ rotate: 360 }} // Animate the rotation to 360 degrees
                    transition={{ duration: 3 }} // Repeat the animation infinitely with a duration of 2 seconds
                  >
                    <Typography>{tech.icon}</Typography>
                  </motion.div>
                  <Typography sx={{ textAlign: 'center' }}>
                    {tech.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  )
  //   return <Typography variant='h2'>HELLO</Typography>
}

export default PortfolioCard
