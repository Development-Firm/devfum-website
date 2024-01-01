'use client'
import CanvasLoader from '@/app/components/global/loader'
import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { Table } from './table'

const Model = ({ isMobile, texture }) => {
  return (
    <mesh>
      <pointLight position={[0, 3.5, 0]} intensity={5} />
      <directionalLight position={[0, -3, 4]} intensity={0.3} />
      <directionalLight position={[0, -3, -4]} intensity={0.3} />
      <directionalLight position={[3, -3, -4]} intensity={0.3} />
      <directionalLight position={[-3, -3, -4]} intensity={0.3} />
      <ambientLight intensity={0.2} />
      <Table
        scale={isMobile ? 0.75 : 1.2}
        position={isMobile ? [0, -1, 0] : [0, -2, 0]}
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
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
        <Model isMobile={isMobile} texture={texture} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
const TableConfigurator = ({ texture }) => {
  return <ModelCanvas texture={texture} />
}

export default TableConfigurator
