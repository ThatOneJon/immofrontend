"use client"

import { Inter } from '@next/font/google'
import { Canvas } from "@react-three/fiber";
import Box from './box';
import { OrbitControls } from "@react-three/drei"

const inter = Inter({
  weight : ['800'],
  subsets: ['latin'] 
})

export default function Home() {

  return (

      <div className="h-96 md:h-128 text-center">
            <h1 className={`mt-6 text-4xl bg-slate-800 text-white rounded py-3 ${inter.className}`}>Concrete Blocks are our passion !</h1>
            <div className="w-full h-4/5">
                <Canvas
                shadows={true}
                camera={{
                  position: [-6, 5, 8],
                }}
              >
              <ambientLight color={"white"} intensity={0.3} />
              <Box rotateX={3} rotateY={0.2} />
              <OrbitControls autoRotate  />
              </Canvas>
            </div>
      </div>

  )
}
