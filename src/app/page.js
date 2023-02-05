"use client"

import { Canvas } from "@react-three/fiber";
import Box from './box';
import { OrbitControls } from "@react-three/drei"
import Image from "next/image"
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from 'react'

function Loader() {
  const { progress } = useProgress()
  return <Html center> <p className="text-white text-3xl">{progress} % loaded </p></Html>
}

export default function Home() {

  return (

      <div className="h-full md:h-128 text-center">
            <h1 className="mt-3 mb-4 text-4xl bg-custom text-white rounded py-5">Concrete Blocks are our passion !</h1>
            <div className="h-96 w-full lg:h-4/5 bg-neutral-900 mt-1 rounded">
              <p className="text-white text-left text-xs">3D model by: Lassi Kaukonen on https://sketchfab.com/thesidekick</p>
                <Canvas
                  shadows={true}
                  camera={{
                    position: [-6, 5, 7],
                  }}
                    >
                      <Suspense fallback = {<Loader />} >
                        <ambientLight color={"white"} intensity={0.3} />
                        <Box />
                        <OrbitControls autoRotate autoRotateSpeed={0.7}  />
                      </Suspense>
                </Canvas>
            </div>
            <h1 className={`mt-3 mb-4 text-4xl bg-custom text-white rounded py-5`}>Looking to build, or to expand your portfolio?</h1>
            <div className="bg-slate-900 w-full h-full grid lg:grid-cols-2 gap-2 gid-cols-1 rounded mb-5">
              <div className="bg-slate-800 m-4 rounded relative">
                <h1 className="text-white text-2xl mt-4">Work with our top architects, in order to build your own top tier soviet style concrete blocks!</h1>
                  <div className="w-60 h-52 md:h-120 md:w-100 relative mx-auto hover:shadow-2xl hover:shadow-black hover:cursor-pointer">
                    <Image src="/plan.jpg" fill 
                    sizes ="(max-width:600px) 6vw, (max-width: 1200px) 40vw, 30vw" 
                    className="mx-auto my-4 rounded" alt="planning" />
                  </div>
                <p className="text-white mt-3">Photo by<a href="https://unsplash.com/pt-br/@ryanancill?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryan Ancill</a> on <a href="https://unsplash.com/de/fotos/aJYO8JmVodY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
              </div>
              <div className="bg-slate-800 m-3 rounded">
                <h1 className="text-white text-2xl mt-4">Take a look at our inventory!</h1>
                <div className="w-60 h-52 md:h-120 md:w-100 relative mx-auto hover:shadow-2xl hover:shadow-black hover:cursor-pointer">
                  <Image src="/conc.jpg" fill 
                    sizes ="(max-width:600px) 6vw, (max-width: 1200px) 40vw, 30vw" 
                    className="mx-auto my-4 rounded" alt="planning" />
                  </div>
                  <p className="text-white mt-3">Photo by:Pierre Châtel-Innocenti on <a href="https://unsplash.com/de/fotos/LSSr-EruRb0"></a></p>
              </div>
            </div>
      </div>

  )
}
