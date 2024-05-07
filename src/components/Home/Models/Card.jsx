import React, { useEffect, useRef, useState } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useMotionValue, useSpring } from 'framer-motion';

export function Card(props) {
  const {mouse} = props ;
  const { nodes, materials } = useGLTF('/plateUp.glb');
  const [isHovered, setIsHovered] = useState(false);
  const group = useRef();

  const hoverScale = 0.9; // Scale of animation on hover
  const animationDuration = 0.5; // Duration of animation in seconds

  // const mouse = {
  //   x: useMotionValue(0),
  //   y: useMotionValue(0)
  // }

  // const smoothMouse = {
  //   x: useSpring(mouse.x),
  //   y: useSpring(mouse.y)
  // }

  // const manageMouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   const { innerWidth, innerHeight } = window;
  //   const x = clientX / innerWidth;
  //   const y = clientY / innerHeight;
  //   mouse.x.set(x);
  //   mouse.y.set(y);
  // }

  // useEffect(() => {
  //   window.addEventListener('mousemove', manageMouseMove);
  //   return () => window.removeEventListener('mousemove', manageMouseMove);
  // }, []);

  useFrame((state, delta) => {
    group.current.rotation.z += 0.00001; // Adjust the speed of rotation as needed
    group.current.position.y = isHovered ? Math.sin(state.clock.elapsedTime * 2) * 0.05 : 0;
    // group.current.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05)
  });

  return (
    <motion.group ref={group} {...props} dispose={null}
      // whileHover={{ scale: hoverScale, transition: { duration: animationDuration } }}
      onPointerOver={() => setIsHovered(true)} onPointerOut={() => setIsHovered(false)}
      position-x={mouse.x} position-y={mouse.y}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Material} />
    </motion.group>
  );
}

useGLTF.preload('/plateUp.glb');
