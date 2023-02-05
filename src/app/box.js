import React from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useLoader } from "@react-three/fiber"

function Box(props) {

    const gltf = useLoader(GLTFLoader, "/paimio_sanatorium/scene.gltf");

  return (
    <>
        <primitive object={gltf.scene} scale={0.08} />
    </>

  );
}
export default Box;