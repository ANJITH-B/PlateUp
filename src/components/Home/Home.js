import React, { useEffect, useRef, useState } from "react";
import FoodSteam from "./foodbowlAndSteam/steam";
import { Environment, CameraShake, PerspectiveCamera, Scroll, ScrollControls, Text, } from "@react-three/drei";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Interface } from "./Interface/Interface";
import { Spotlight } from "../ui/Spotlight";
import { Experience } from "./Interface/Experience"
import { MotionConfig } from "framer-motion";
import { motion } from 'framer-motion'
import { Leva } from "leva";
import { ScrollManager } from './scrollManager/ScrollManager'
import { SectionNav } from './SectionNav/SectionNav'
import Header from "../header";
import * as THREE from 'three'

const Home = (props) => {
  const audio = new Audio('./bg.mp3')

  const { section, setSection } = props;
  const ref = useRef()

  function Rig() {
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse } = useThree()
    useFrame(() => camera.position.lerp(vec.set(mouse.x * 0.4, mouse.y * 0.4, 60), 0.05))
    return null; // Returning null since the function doesn't return anything meaningful
  }

  return (
    <>
      <MotionConfig transition={{ type: 'spring', mass: 3, stiffness: 150, damping: 50, restDelta: 0.0001 }}>
        <div className="h-screen">
          <div className="relative w-full flex items-center justify-center">
            <div className="fixed inset-x-0 w-[95%] mx-auto z-50 rounded-3xl top-2">
              {section >= 1 && section <= 4 ? (
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />) : (<Header />)}
            </div>
          </div>
          <Canvas shadows page={9} className="w-[100vw] h-[100vh] -z-5 relative">
          <Environment preset={section === 0 ? 'night' : section === 1 ? 'night' : 'night'} /> // apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse            <PerspectiveCamera makeDefault position={[1, 4, 8]} />
            <ScrollControls pages={10} damping={0.4} className=''>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll html>
                <Interface />
              </Scroll>
              <Experience section={section} onSectionChange={setSection}  />
            </ScrollControls>
            <Rig />
            {/* <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} /> */}
          </Canvas>
          <motion.div initial={{ opacity: 0, y: 0 }} animate={{x: 1, opacity: section === 0 ? 1 : 0, y: 0 }} transition={{ duration: 3 ,delay:4}}>
            {section === 0 && <FoodSteam section={section} />}
          </motion.div>
          <SectionNav onSectionChange={setSection} section={section} />
          {/* <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" /> */}
        </div>
      </MotionConfig>
      <Leva hidden />
    </>
  )
}

export default Home




