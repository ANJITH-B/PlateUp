import React, { useEffect, useRef, useState } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useMotionValue, useSpring } from 'framer-motion';

export function Card(props) {
  const { nodes, materials } = useGLTF('/models/plateUp.glb');
  const [isHovered, setIsHovered] = useState(false);
  const group = useRef();

  const hoverScale = 0.9; // Scale of animation on hover
  const animationDuration = 0.5; // Duration of animation in seconds


  return (
    <motion.group ref={group} {...props} dispose={null}
      // whileHover={{ scale: hoverScale, transition: { duration: animationDuration } }}
      onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Material} />
    </motion.group>
  );
}

useGLTF.preload('/models/plateUp.glb');
