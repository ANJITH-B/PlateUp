import React, { useRef, useState } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei' 
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d'
import { easing } from 'maath'

export function Card(props) {
  const { nodes, materials } = useGLTF('/plateUp.glb')
  console.log(nodes);
  const group = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const hoverScale = 0.9; 
  const animationDuration = 0.5; // Duration of animation in seconds
  

  useFrame((state, delta) => {
    group.current.rotation.z += 0.0000; // Adjust the speed of rotation as needed
    group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05  ; // Adjust for hovering 
    
    // group.current.position.y = isHovered ? Math.sin(state.clock.elapsedTime * 2) * 0.05 : 0;
  });

  return (
    <motion.group ref={group}  {...props} dispose={null}  whileHover={{ scale: hoverScale, transition: { duration: animationDuration } }} onPointerOver={(e) => setIsHovered(true)} onPointerOut={(e) => setIsHovered(false)}>
      {/* <OrbitControls enableZoom={false} /> */}
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Material} />
    </motion.group>
  )
}

useGLTF.preload('/plateUp.glb')
