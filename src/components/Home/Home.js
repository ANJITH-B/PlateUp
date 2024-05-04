import React, { useRef, useState } from "react";
import FoodSteam from "./foodbowlAndSteam/steam";
import { Environment, OrbitControls, PerspectiveCamera, Scroll, ScrollControls, Text, } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Interface } from "./Interface/Interface";
import { Spotlight } from "../ui/Spotlight";
import { Experience } from "./Interface/Experience"
import { MotionConfig } from "framer-motion";
import { motion } from 'framer-motion'
import { Leva } from "leva";
import { ScrollManager } from './scrollManager/scrollManager'
import { SectionNav } from './SectionNav/SectionNav'
// import ParallaxText from '../Home/parallax/ParallaxText'
import NavbarDemo from "../Navbar";
// import Image from "next/image";
// import clsx from "clsx";
// import FoodWorld from "./foodworld/Foodworld";

const Home = (props) => {
  
  const { section , setSection } = props;
  const videoRef = useRef();

  const getBackgroundColor = () => {
    if (section === 0) { return "#FED854"; }
    if (section === 1) { return "#FED854"; }
    if (section === 2) { return '#080809' }
    if (section === 3) { return '#080809' }
    if (section === 4) { return '#080809' }
    if (section === 5) { return '#000' }
    if (section === 6) { return '#000' }
    if (section === 7) { return '#080809' }
    if (section === 8) { return '##080809' }
    
  };

  return (
    <>
      <MotionConfig transition={{ type: 'spring', mass: 5, stiffness: 150, damping: 50, restDelta: 0.0001 }}>
      <div className="h-screen">
          {/* <video ref={videoRef} className="absolute inset-0 z-[-1]" autoPlay loop muted>
            <source src="https://youtu.be/VeTwNnZUPlw?si=eKyTXile59tV2raR" type="video/mp4" />
          </video> */}
            {/* Add additional source elements for other video formats if needed */}

          {/* <ParallaxText baseVelocity={1}>INCREDIBLE FOOD CHOICES WITH AWESOME REWARD POINTS</ParallaxText> */}
            
          {/* <Image src='/image/bgtext.png' width={600} height={200}/> */}
          
          {section === 0 && <NavbarDemo />}
          <Canvas page={5} className="w-[100vw] h-[100vh] -z-5 relative">
            {/* <color attach="background" args={[getBackgroundColor()]} /> */}
            <Environment preset="city" />
            <PerspectiveCamera makeDefault position={[1, 4, 8]} />
            <ScrollControls pages={9} damping={0.5} className=''>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll html>
                {/* Added a mesh for background */}
                <mesh position={[0, 0, -10]} rotation={[0, 7, 0]}>
                  <planeGeometry args={[100, 100]} />
                  <meshStandardMaterial color={getBackgroundColor()} />
                </mesh>
                <Interface />
              </Scroll>
              {/* <Text position={[1,5,3]} baseVelocity={1}>INCREDIBLE FOOD CHOICES WITH AWESOME REWARD POINTS</Text> */}
              <Experience section={section} />
            </ScrollControls>
          </Canvas>
          {/* <FoodWorld /> */}

          <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: section === 0 ? 1 : 0, y: 0 }} transition={{ duration: 0.3 }}>
            <FoodSteam section={section} />
          </motion.div>
          <SectionNav onSectionChange={setSection} section={section} />
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        </div>
      </MotionConfig>
      <Leva hidden />
    </>
  )
}

export default Home




