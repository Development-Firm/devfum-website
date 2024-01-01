'use client'
import CanvasLoader from '@/app/components/global/loader'
import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { PS5 } from './ps5'

const Model = ({ isMobile, texture }) => {
  return (
    <mesh>
      <directionalLight position={[4, 0, 6]} intensity={1.5} />
      <directionalLight position={[-4, 0, -6]} intensity={1.5} />
      <ambientLight intensity={1} />
      <PS5
        scale={isMobile ? 0.01 : 0.016}
        position={isMobile ? [0, -2, 0] : [0, -3, 0]}
        texture={texture}
      />
    </mesh>
  )
}

const ModelCanvas = ({ texture }) => {
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
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 6, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model isMobile={isMobile} texture={texture} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
const PlaystationConfigurator = ({ texture }) => {
  return <ModelCanvas texture={texture} />
}

export default PlaystationConfigurator
