'use client'
import { OrbitControls, Preload, Text3D } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../../canvasLoader/loader'

const Text = () => {
  return (
    // <mesh>
    //   <hemisphereLight intensity={0.15} groundColor='black' />
    //   <spotLight
    //     position={[-20, 50, 10]}
    //     angle={0.12}
    //     penumbra={1}
    //     intensity={1}
    //     castShadow
    //     shadow-mapSize={1024}
    //   />
    //   <pointLight intensity={1} />

    //   <group>
    //     <Text3D
    //       font='./fonts/helvetiker_regular.typeface.json'
    //       size={1}
    //       height={1}
    //     >
    //       Future
    //       <meshNormalMaterial />
    //     </Text3D>
    //   </group>
    // </mesh>
    <Text3D font='./fonts/helvetiker_regular.typeface.json' size={1} height={1}>
      Future
      <meshNormalMaterial />
    </Text3D>
  )
}

const ThreeDText = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Text />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default ThreeDText
