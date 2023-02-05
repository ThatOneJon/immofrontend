import React, { useRef } from 'react'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useLoader } from "@react-three/fiber"


export default function Building(){
    const gltf = useLoader(GLTFLoader, "/building/scene.gltf");

    return(
            <primitive object={gltf.scene} scale={0.08} />
    )
}